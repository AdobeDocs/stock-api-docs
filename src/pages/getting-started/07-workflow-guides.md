---
keywords:
  - Adobe Stock, Stock API, stock photos, stock video, premium images, illustrations, Creative Cloud
title: Stock APIs
description: Getting started with the Adobe Stock API. Build an API application to access millions of royalty-free stock images, photos, graphics, vectors, video footage, illustrations, templates, 3d assets, editorial assets and high-quality premium content.
---

# Stock workflow guides

These guides are meant to supplement the API documentation with detailed instructions for specific workflows. For a complete description and business case for these types of integrations, refer to [Register your application](02-register-app.md).

*   **[Enterprise service account](https://developer.adobe.com/developer-console/docs/guides/authentication/ServiceAccountIntegration/).** This is for customers with Adobe Stock enterprise entitlements who want to create an integration between their application and their Stock account, without requiring users to sign in.
    *  [Guide specific to Adobe Stock customers](/Service-Account-API-workflow.pdf). The UI screenshots in this document are out of date, but the essential workflow is the same.
*   **[OAuth (auth code) integration](https://developer.adobe.com/developer-console/docs/guides/authentication/OAuthIntegration/).** This can be used for authenticating any type of user who has an Adobe Stock account so they can access protected resources such as the License API.
    *  Note that if your application is being created for an Adobe Enterprise customer (including most Print on Demand customers), OAuth is *not* the correct workflow for you. Instead, choose Service Account (above.) OAuth integrations always require an interactive user login--it cannot be fully automated.
*   **[Affiliate workflow (search only)](/Affiliate-API-workflow.pdf).** This guide covers how to integrate with the Search API and redirect users to the Adobe Stock website to complete the transaction.
    *  To join the Adobe Affiliate Program, go here: [https://www.adobe.com/affiliates.html](https://www.adobe.com/affiliates.html).
    *  For an in-depth use case, see [Get Paid to Search Adobe Stock!](https://medium.com/adobetech/get-paid-to-search-adobe-stock-e2ba9a7c0312)
