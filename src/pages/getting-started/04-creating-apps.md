---
keywords:
  - Adobe Stock
  - Stock API
  - Stock Photos
  - Stock Video
  - Premium Images
  - Illustrations
  - Creative Cloud 
title: Stock APIs
description: Getting started with the Adobe Stock API. Build an API application to access millions of royalty-free stock images, photos, graphics, vectors, video footage, illustrations, templates, 3d assets, editorial assets and high-quality premium content.
---

# Creating Adobe Stock applications

As discussed previously, the Adobe Stock API is a RESTful web service. To call the API, you make requests using HTTPS GET and POST methods. The API provides several methods, defined as URL endpoints, for requesting information or assets from Adobe Stock. There are methods for searching, licensing assets, and getting purchase history. You pass parameters to the method appended to a URL endpoint, and in return the API provides responses in JSON structures. In this section, we will explore the API command structure and learn techniques for searching and licensing content.

## Overview
Here is a summary of the general steps you follow when integrating with the Stock API:

1.  Spend some time browsing and searching content on the [Adobe Stock website](https://stock.adobe.com/), to get a sense of the typical end-user workflows.
2.  Define your requirements for displaying Stock search results on your page. For example,
    *   define your thumbnail sizes, localization preferences, and the number of thumbnails to display on the page;
    *   plan which sorting and filtering capabilities to support, such as relevancy, creation date, and what asset types to return, such as only photos or only videos and/or premium content;
    *   and decide which types of searches to support, such as keyword search and image similarity search.
3.  [Register your application](./02-register-app.md) as a client of the Stock API and obtain your API Key (client ID) by creating an integration on the Adobe Developer Console. If you need to call licensing APIs, you will need additional credentials.
4.  Set up your [headers for authentication](./03-api-authentication.md), which could mean only the API key and application name, but could also require a user or organization token.
    *   You will need to craft additional code (not specific to the Stock APIs) to generate your tokens.
5.  Build and execute a [search query](./apps/05-search-for-assets.md) using your design decisions and user choices. Parse the JSON response and display information or thumbnails for the quantity of assets returned. Include metadata and thumbnails where appropriate.
    *   Display additional results from the Search query using [pagination](./apps/05-search-for-assets.md#paginating-results).
6.  If desired, assist your user to [license Stock assets](./apps/06-licensing-assets.md), and view past [license history](./apps/06-licensing-assets.md#getting-a-license-history).

**&gt;&gt;&gt; NEXT:** Learn how to use the [Search API](./apps/05-search-for-assets.md).
