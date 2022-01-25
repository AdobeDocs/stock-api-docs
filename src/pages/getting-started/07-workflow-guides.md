# Stock workflow guides

These guides are meant to supplement the API documentation with detailed instructions for specific workflows.

For a complete description and business case for these types of integrations, refer to [Register your application](02-register-app.md).

*   **[Enterprise service account](https://github.com/AdobeDocs/stock-api-docs/raw/main/supplemental/Service-Account-API-workflow.pdf).** This is for customers with Adobe Stock enterprise entitlements who want to create an integration between their application and their Stock account, without requiring users to sign in.
    *   [Guide specific to Adobe Stock customers](https://github.com/AdobeDocs/stock-api-docs/raw/main/supplemental/Service-Account-API-workflow.pdf). The UI screenshots in this document are out of date, but the essential workflow is the same.
*   **[OAuth (auth code) integration](https://www.adobe.io/authentication/auth-methods.html#!adobeio/adobeio-documentation/master/auth/OAuth2.0Endpoints/web-oauth2.0-guide.md).** This can be used for authenticating any type of user who has an Adobe Stock account so they can access protected resources such as the License API.
    *   Note that if your application is being created for an Adobe Enterprise customer (including most Print on Demand customers), OAuth is *not* the correct workflow for you. Instead, choose Service Account (above.) OAuth integrations always require an interactive user login--it cannot be fully automated.
*   **[Affiliate workflow (search only)](https://github.com/AdobeDocs/stock-api-docs/raw/main/supplemental/Affiliate-API-workflow.pdf).** This guide covers how to integrate with the Search API and redirect users to the Adobe Stock website to complete the transaction.
