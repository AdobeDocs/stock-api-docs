---
title: License History Report CSV API
---

# License History Report CSV API

\<!-- MarkdownTOC --\>

- [License History Report CSV API](#license-history-report-csv-api)
  - [Before you begin](#before-you-begin)
  - [Workflow](#workflow)
  - [API endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Request Headers](#request-headers)
  - [API actions](#api-actions)
    - [Enqueue a job](#enqueue-a-job)
      - [Enqueue a job: Request Headers](#enqueue-a-job-request-headers)
      - [Request Body Parameters](#request-body-parameters)
      - [Success responses:](#success-responses)
      - [Error responses:](#error-responses)
    - [Get job details](#get-job-details)
      - [Success response (200)](#success-response-200)
      - [Get job details: Error responses](#get-job-details-error-responses)
    - [Delete job](#delete-job)
      - [Delete job: Error responses](#delete-job-error-responses)
    - [Get job list](#get-job-list)
    - [API Spec](#api-spec)
  - [Example (curl)](#example-curl)
  - [Limits](#limits)
  - [Rate Limits / Data Retention Policy](#rate-limits--data-retention-policy)

\<!-- /MarkdownTOC --\>

Organization admins can export their full license/usage history as CSV files. The API accepts a date range and optional filters and delivers output via pre-signed S3 URLs.

## Before you begin

Use of this API requires Adobe Stock enterprise customers to first create a Server-to-Server integration in the Developer Console, and then promote the API integration to be an administrator for the organization. Please follow the steps found in [Creating an API integration for the License History Report CSV API](../faq/set-up-integration-for-license-history-csv-api.md).

## Workflow

- Client sends `POST /1/Enterprise/ReportCsv/Reports` with date range and optional filters.

- If `immediate: true`: API returns 200 with download URLs in a single call.

- If async (default): API returns 201 with an `enterprise_report_id` and a polling URL.

- Client polls `GET /1/Enterprise/ReportCsv/Reports/:id` until `status` is `completed`.

- Client presents the pre-signed S3 URLs to the admin for download (valid for 7 days).

- Admin can view past jobs via `GET /1/Enterprise/ReportCsv/Reports` (list) or cancel one via `DELETE`.

## API endpoints

The API provides the following endpoints in the `https://stock.adobe.io/Rest` namespace.

| **Method** | **Path** | **Purpose** |
|----|----|----|
| `POST` | `/1/Enterprise/ReportCsv/Reports` | Create a report job (sync or async) |
| `GET` | `/1/Enterprise/ReportCsv/Reports` | List all jobs for the org (last 7 days) |
| `GET` | `/1/Enterprise/ReportCsv/Reports/:enterprise_report_id` | Poll job status; get download URLs when complete |
| `DELETE` | `/1/Enterprise/ReportCsv/Reports/:enterprise_report_id` | Remove a job record |

### Authentication

The Authorization header is required for any of the licensing calls. The API uses the header to determine the user's member number, licensing status, and default locale. See [Authentication for API Access](https://developer.adobe.com/stock/docs/getting-started/03-api-authentication).

### Request Headers

See [Headers for Stock API Calls](https://developer.adobe.com/stock/docs/api/10-headers-for-api-calls) for details about header content.

- Required headers: `x-Product, x-api-key, Authorization`

- Optional headers: `X-Product-Location, X-Request-Id`

## API actions

### Enqueue a job

Method: POST\
Path: `/1/Enterprise/ReportCsv/Reports`

#### Enqueue a job: Request Headers

| **Header**      | **Required** | **Value**            |
|-----------------|--------------|----------------------|
| `Authorization` | Yes          | `Bearer <ims_token>` |
| `Content-Type`  | Yes          | `application/json`   |
| `x-api-key`     | Yes          | API key / client ID  |

#### Request Body Parameters

| **Field** | **Required** | **Description** |
|----|----|----|
| `starting_date` | Yes | Range start in M/D/YYYY format |
| `ending_date` | Yes | Range end in M/D/YYYY format |
| `date_order` | No | `asc` or `desc` (default: `desc`) |
| `locale` | No | Output locale, e.g. `en_US` |
| `filters.keyword` | No | Keyword filter — only applied when `isSUDExportWithKeywordEnabled` flag is on |

#### Success responses:

| **Mode**        | **Status** | **Body**                                    |
|-----------------|------------|---------------------------------------------|
| Async (default) | 201        | `enterprise_report_id` + `reportStatus_url` |

#### Error responses:

| **Status** | **Condition** |
|----|----|
| 401 | Feature flag off, not authenticated, or not an org admin |
| 422 | Missing dates, invalid `date_order`, or an active job already exists for this org |
| 500 | Unexpected server error |

### Get job details

Method: GET\
Path: `/1/Enterprise/ReportCsv/Reports/:enterprise_report_id`

#### Success response (200)

| **Field** | **Description** |
|----|----|
| `enterprise_report_id` | UUID of the job |
| `member_id` | Admin who created it |
| `organization_id` | Org that owns it |
| `report_type` | `purchases`, `users`, or `groups` |
| `request` | Original request params (dates, filters, locale) |
| `status.status` | Current status: `pending`, `in_progress`, `completed`, `failed` |
| `status.created_at` | ISO 8601 timestamp |
| `status.completed_at` | ISO 8601 timestamp (null until completed) |
| `result` | Empty object until completed; then: `parts_count`, `parts[]` (with `s3_url`, `row_count`), `combined` |

#### Get job details: Error responses

| **Status** | **Condition**                      |
|------------|------------------------------------|
| 401        | Not authenticated or not org admin |
| 404        | Job not found or older than 7 days |

### Delete job

Method: DELETE\
Path: `/1/Enterprise/ReportCsv/Reports/:enterprise_report_id`

Removes the job record for the authenticated org.

#### Delete job: Error responses

| **Status** | **Condition**                      |
|------------|------------------------------------|
| 204        | Deleted successfully               |
| 401        | Not authenticated or not org admin |
| 404        | Job not found or older than 7 days |

### Get job list

### API Spec

Method: GET\
Path: `/1/Enterprise/ReportCsv/Reports`

Returns all non-expired jobs for the org, newest first. Each item is the same shape as the Get Job Details response. Empty array if no jobs exist within the last 7 days.

| **Status** | **Condition**                      |
|------------|------------------------------------|
| 200        | Success: Array of job objects      |
| 401        | Not authenticated or not org admin |

## Example (curl)

This is a GET request which should fetch the list of current jobs. To create a job, use a POST method instead.

> `curl --location --request GET 'https:// stock.adobe.io/Rest/1/Enterprise/ReportCsv/Reports' \`\
> `--header '` `x-api-key: <API key>' \`\
> `--header 'Authorization: <Bearer Token>' \`\
> `--header 'Content-Type: application/json' \`\
> `--data '{`\
> `"starting_date": "12/10/2025",`\
> `"ending_date": "4/2/2026",`\
> `"date_order": "desc",`\
> `"filters": {`\
> `"keyword": ""`\
> `},`\
> `"locale": "en_US"`\
> `}'`

## Limits

| **Limit**                        | **Value**        |
|----------------------------------|------------------|
| Date range per request           | 5 years max      |
| Active jobs per org              | 1                |
| Active-job window per Enterprise | 4 hours          |
| Job / URL visibility             | 7 days           |
| Records per part shard           | 100k rows - prod |
| S3 multipart min part size       | 5 MB             |

## Rate Limits / Data Retention Policy

- Concurrency limit: one active job per org at a time.

- The API checks for any `pending` or `in_progress` row created within the last 4 hours before accepting a new POST.

- Returns 422 if an active job exists.

- Rows older than 4 hours are treated as stale (hung worker) and do not block new submissions.

- Data retention: jobs older than 7 days are hidden from all API responses. S3 signed URLs share the same 7-day TTL — files are accessible for exactly as long as the job is visible.
