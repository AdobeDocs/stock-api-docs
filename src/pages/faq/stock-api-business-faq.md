---
keywords:
  - Adobe Stock
  - Stock API
  - Stock Photos
  - Stock Video
  - Premium Images
  - Illustrations
  - Creative Cloud 
title: Stock API FAQs and supplemental info
description: Stock API Frequently Asked Questions.
---

<!-- omit in toc -->
# Stock API: Business frequently asked questions

A list of questions and answers for customers and partners looking to use Stock APIs, from a business perspective. For technical questions on the Stock APIs, see the [Technical FAQ](/faq/).

<InlineAlert variant="warning">

Please note that the Stock API is only open to Stock for Enterprise customers and Adobe Affiliates at this time. See [Getting started](./../getting-started/index.md) for more details. 

- [General FAQ](#general-faq)
  - [What are the criteria for applying for the Adobe Stock API?](#what-are-the-criteria-for-applying-for-the-adobe-stock-api)
  - [How can I contact Adobe Stock to discuss a business proposal or get technical assistance?](#how-can-i-contact-adobe-stock-to-discuss-a-business-proposal-or-get-technical-assistance)
  - [How much does it cost to access Adobe Stock API?](#how-much-does-it-cost-to-access-adobe-stock-api)
  - [What are the API calls limits?](#what-are-the-api-calls-limits)
  - [How can I test the Search API?](#how-can-i-test-the-search-api)
  - [How can I test the Licensing API?](#how-can-i-test-the-licensing-api)
  - [Where I can find a technical reference?](#where-i-can-find-a-technical-reference)
  - [What standard size previews are available via the API?](#what-standard-size-previews-are-available-via-the-api)
  - [How I can get access to unwatermarked previews medium or high resolution size?](#how-i-can-get-access-to-unwatermarked-previews-medium-or-high-resolution-size)
  - [I am using Fotolia API. How can I migrate to Adobe Stock?](#i-am-using-fotolia-api-how-can-i-migrate-to-adobe-stock)
  - [Are there any framework agreements which govern all Adobe Stock API partnerships?](#are-there-any-framework-agreements-which-govern-all-adobe-stock-api-partnerships)
  - [Where can I learn about the Adobe Stock integration with Magento?](#where-can-i-learn-about-the-adobe-stock-integration-with-magento)
- [Definitions and terms](#definitions-and-terms)
- [Print on demand FAQ](#print-on-demand-faq)
  - [What are the main objectives of the print on demand use case?](#what-are-the-main-objectives-of-the-print-on-demand-use-case)
  - [What type of assets can I access by using Adobe Stock API for print on demand?](#what-type-of-assets-can-i-access-by-using-adobe-stock-api-for-print-on-demand)
  - [What are online examples of the Adobe Stock API Print on Demand use case?](#what-are-online-examples-of-the-adobe-stock-api-print-on-demand-use-case)
  - [What is the Print on demand pricing model?](#what-is-the-print-on-demand-pricing-model)
  - [Do I need a contract to start my API Print on demand business?](#do-i-need-a-contract-to-start-my-api-print-on-demand-business)
  - [Is there any software with build-in support or software developers specialized in integrating Adobe Stock API for Print-on-demand?](#is-there-any-software-with-build-in-support-or-software-developers-specialized-in-integrating-adobe-stock-api-for-print-on-demand)
- [Enterprise FAQ](#enterprise-faq)
  - [Do I need to sign a contract to build my Enterprise integration?](#do-i-need-to-sign-a-contract-to-build-my-enterprise-integration)
  - [Is there a separate cost to use the Stock API?](#is-there-a-separate-cost-to-use-the-stock-api)
  - [How can I automate my Stock workflows?](#how-can-i-automate-my-stock-workflows)
  - [May I use my Creative Cloud Professional or Professional Plus plan with the Stock API?](#may-i-use-my-creative-cloud-professional-or-professional-plus-plan-with-the-stock-api)
- [Marketing Platforms FAQ](#marketing-platforms-faq)
  - [What are the common use cases of Marketing Platform integrations?](#what-are-the-common-use-cases-of-marketing-platform-integrations)
  - [What are the benefits of integrating Adobe Stock into a Marketing Platform?](#what-are-the-benefits-of-integrating-adobe-stock-into-a-marketing-platform)
  - [Do I need sign a contract to build my marketing platform integration?](#do-i-need-sign-a-contract-to-build-my-marketing-platform-integration)
- [DAMs FAQ](#dams-faq)
  - [Do I need to sign a contract to build my DAM/MAM platform integration?](#do-i-need-to-sign-a-contract-to-build-my-dammam-platform-integration)
  - [Does Adobe Stock have a pre-built integration with the my DAM platform? (or) Can Adobe Stock build an integration with my platform?](#does-adobe-stock-have-a-pre-built-integration-with-the-my-dam-platform-or-can-adobe-stock-build-an-integration-with-my-platform)
- [Affiliates FAQ](#affiliates-faq)
  - [How can I earn affiliate commissions by promoting Adobe Stock?](#how-can-i-earn-affiliate-commissions-by-promoting-adobe-stock)
  - [How can the Adobe Stock API help me earn by promoting Adobe Stock?](#how-can-the-adobe-stock-api-help-me-earn-by-promoting-adobe-stock)
  - [What are benefits of Adobe Affiliate Program?](#what-are-benefits-of-adobe-affiliate-program)
  - [Are there any examples of Adobe Stock API Affiliates use cases available online?](#are-there-any-examples-of-adobe-stock-api-affiliates-use-cases-available-online)


## General FAQ

### What are the criteria for applying for the Adobe Stock API?

Because of recent changes to our APIs, if you are not a Stock for Enterprise customer you must apply for access. Please see [Getting started](./../getting-started/index.md) for more details.

### How can I contact Adobe Stock to discuss a business proposal or get technical assistance?

If you want to discuss a partnership with Adobe Stock please contact your Adobe account representative or [request a callback](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi).

If you need technical help with your Stock API integration, please email <stockapis@adobe.com>. Please visit <https://developer.adobe.com/stock/docs/> for help resources, technical documentation and sample code.

### How much does it cost to access Adobe Stock API?

Use of the Adobe Stock API is free of charge. Charges may apply when you license images via the API.

### What are the API calls limits?

Currently we do not limit number of API requests, however we are monitoring usage and reserve the right to limit API calls or refuse API access for API keys which generate an unreasonable number of API calls.

### How can I test the Search API?

Create an Adobe Stock API key for free at <https://developer.adobe.com/console>.

### How can I test the Licensing API?

Please contact your Adobe account representative or [request a callback from the Enterprise team](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi).

### Where I can find a technical reference?

<https://developer.adobe.com/stock/docs/>

### What standard size previews are available via the API?

  - 110: Small (110 px)

  - 160: Medium (160 px)

  - 240: Large (240 px)

  - 500: Extra large (XL) (500 px). Returned with watermark. (default)

  - 1000: Extra-extra large (XXL) (1000 px). Returned with watermark.

All previews above are served from a content delivery network (CDN) for best performance.

### How I can get access to unwatermarked previews medium or high resolution size?

This requires an Adobe Stock Enterprise contract. Please contact your Adobe account representative or [request a callback](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi) to learn more.

### I am using Fotolia API. How can I migrate to Adobe Stock?

You can find technical resources [here](/faq/18-fotolia-migration-resources.md).

### Are there any framework agreements which govern all Adobe Stock API partnerships?

There are two essential documents:

  - Adobe Developer terms <http://www.adobe.com/go/developer-terms>

  - Adobe Stock terms: <http://www.adobe.com/go/stockterms>

Please note that depending on your use case (see sections below), an additional contract may be required.

### Where can I learn about the Adobe Stock integration with Magento?

Users of Magento Commerce 2.3.4 and newer have access to a pre-built integration with Adobe Stock inside the Page Builder. This allows users to search, license, and download Stock assets without leaving the Magento platform. Learn more about the [Adobe Stock Integration](https://docs.magento.com/user-guide/cms/adobe-stock.html) in the Magento documentation.


## Definitions and terms

Here are the definitions of some standard acronyms and terms used throughout this document.

**POD.** Print-on-Demand

**DAM/MAM.** Digital Asset Management/Media Asset Management

**API.** Application Programming Interface

**Standard content.** For the purposes of this document, Standard content is a group of images (photos, vectors and illustrations) which consist of Adobe Stock's micro-stock collection. All assets in this class can be licensed for one credit with a Standard license (see below), and this license allows downloading the asset at full resolution. 

__Standard license.__ This is a limited type of license offered on most Stock assets, including all Standard content (see above). With a Print on Demand contract, a Standard license may be used to print one good. This is different from Extended licenses, which may be used for unlimited prints, but at a much higher cost. For more details see [Adobe Stock License Information](https://stock.adobe.com/license-terms).

**Enterprise account model.** Offers advanced options and volume pricing for Print-on-demand. Requires an Adobe Enterprise contract.

**OAuth integration.** A technical workflow in which users must login to Adobe Stock to authorize their licenses.

**Server to Server integration**. A technical workflow where the application can authenticate to Adobe Stock without any human user interaction. This method is only available for Enterprise accounts.

## Print on demand FAQ

### What are the main objectives of the print on demand use case?

You can implement the Search API and display search results from the Adobe Stock database. When your customer places an order, we require purchase of one standard license\* per each produced item. For example, if you customer order 5 posters with the same image, you need acquire 5 licenses for the image.

\* Licenses must be from Enterprise licenses under _the Enterprise account model_.

Consumer image subscriptions (subscription plans available at: <https://stock.adobe.com/plans> and https://stock.adobe.com/teams) **cannot be used** for print on demand, nor can "unlimited" Stock subscriptions included in Creative Cloud Pro/Plus agreements.

### What type of assets can I access by using Adobe Stock API for print on demand?

Technically, the API will give access to any kind of asset, including Premium, Video, 3D, Templates, etc.

However, from a legal standpoint, Print on Demand customers may access __only Standard assets__ and must therefore *filter out* Premium content and other non-Standard asset types. If you need access to other types of content in your application, please contact your Adobe account representative or [request a callback](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi).

To filter out Premium content from Stock API search results, see the [Stock API FAQ](/faq/).

### What are online examples of the Adobe Stock API Print on Demand use case?

* https://nikkel-art.com
* https://www.wallsauce.com/


### What is the Print on demand pricing model?

Pricing is based on volume and assumes a minimum purchase up front. Please contact your Adobe account representative or [request a callback](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi) for pricing information.

### Do I need a contract to start my API Print on demand business?

Yes. Please contact your Adobe account representative or [request a callback](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi) to get a contract.

### Is there any software with build-in support or software developers specialized in integrating Adobe Stock API for Print-on-demand?

* ResetPro: [https://reset.pro/](https://reset.pro/?lang=8) 
<!--
  * Learn more at: ["How the Adobe Stock API is Helping Nikkel Art Thrive in the Print-on-Demand Industry"](https://medium.com/adobetech/how-the-adobe-stock-api-is-helping-nikkel-art-thrive-in-the-print-on-demand-industry-c4793e8cd5cd)
-->
* Durst Smart Shop: https://durst-professional-services.com/en/smart-shop
* OnPrintShop: https://www.onprintshop.com/

## Enterprise FAQ

### Do I need to sign a contract to build my Enterprise integration?

If you are an existing Enterprise customer, typically your use of the API is included in the terms of your contract. Please contact your sales representative if you have any doubts.

If you are not an Adobe Stock Enterprise customer, please [request a callback from the Enterprise team](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi).

### Is there a separate cost to use the Stock API?

No. Usage of the Stock API is free for all users.

### How can I automate my Stock workflows?

All Adobe Enterprise customers have access to a Server to Server integration. This method uses special credentials to authorize and access its Adobe licenses which do not require a user to sign in. Subsequently, this application can perform tasks on an automated scheduled with no user interaction.

Any Stock API may be used in an automated method. Examples include downloading new assets from a group’s license history, licensing assets in bulk (e.g., from a list of IDs), or integrating controls inside a corporate application which allow a non-Adobe user to download assets which have been previously licensed by a different user.

### May I use my Creative Cloud Professional or Professional Plus plan with the Stock API?

Creative Cloud Professional (CC Pro) and Pro Plus plans are not designed for API use outside Adobe.  Any use of these plans through API requires Adobe business approval of the intended use case and assistance from the Stock product team.

CC Pro and Pro Plus plans allow unlimited download of Adobe stock assets, without quota. For the following reasons, API access is made available only on an approved exception basis. 
* API access may encourage “stockpiling” or bulk downloading of Adobe Stock Pro assets in violation of the governing terms of use.  
* API access may enable download of Stock assets for machine learning purposes, which is not permitted by the governing terms of use.  
* API access may encourage or enable use of Stock Pro assets in client projects as a part of agency and similar workflows.  This is not permitted by the governing terms of use.
* API access may encourage or enable use of Stock Pro assets in support of a Print on Demand (POD) business model, which is not permitted by the terms governing Adobe CC Pro and Pro Plus plans. A separate agreement with Adobe is required for such uses.
*  Use of API to access Stock Pro assets may make tracking of downloaded Stock assets more difficult. Assets downloaded under CC Pro and Pro Plus plans may not be used perpetually. Once a customer’s subscription ends, the customer must cease use of previously downloaded assets in new projects. If an asset is downloaded to a Digital Asset Manager (DAM), those assets need to be removed at the end of subscription to prevent their continued use.

For more information, please see the [Adobe Stock Additional Terms](http://www.adobe.com/go/stockterms) or the PSLT that governs your use of Adobe Stock.  

Despite the concerns stated above, it is technically possible to use a Server to Server integration with CC Pro plans for internal automation tasks but requires Adobe business approval of the use case and help from the Stock product team. Please contact us only if you understand the use restrictions and have a legitimate business requirement.


## Marketing Platforms FAQ

### What are the common use cases of Marketing Platform integrations?

You can integrate Adobe Stock with your e-mail platform, Content Management System (CMS), advertisement builder tool or social media marketing and management tool.

### What are the benefits of integrating Adobe Stock into a Marketing Platform?

Customers can benefit from a seamless experience of searching and licensing Adobe Stock assets from within their own application.

### Do I need sign a contract to build my marketing platform integration?

That depends on your desired workflow. If you want allow your customers to login to Adobe Stock by using their Adobe ID, that typically does not require a contract.

If you want to use your company’s own Adobe account to license assets which may be used by your customers on your platform, please contact your Adobe account representative or [request a callback](https://www.adobe.com/creativecloud/business/enterprise.html#creativecloud-rfi) to work on a contract.

## DAMs FAQ

### Do I need to sign a contract to build my DAM/MAM platform integration?

This type of integration typically doesn’t require signing a contract. The Stock API is free and open to any developer who creates an Adobe ID (personal) account and can be used to search for Stock assets and download watermarked previews.

Further, the developer can create an Adobe OAuth integration, which will allow end-users to sign in and access their own accounts. From here, they can license new assets or download previously licensed assets from their license history.

If the DAM provider needs to create an integration for an Adobe Enterprise customer, some additional steps will be required. Please contact us for more information on this use case.

### Does Adobe Stock have a pre-built integration with the my DAM platform? (or) Can Adobe Stock build an integration with my platform?

Adobe Stock has a pre-built integration with with the [Adobe Experience Manager](https://www.adobe.com/marketing/experience-manager.html) (AEM) Assets platform. If you are an AEM user, see [more information here](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/manage/aem-assets-adobe-stock).

Adobe will be happy to work with any platform provider or customer who wishes to create a new integration, and can provide technical support, sample code and architecture guidance, but does not have the resources to perform the integration work. 

## Affiliates FAQ

### How can I earn affiliate commissions by promoting Adobe Stock?

You can connect your API integration with [the Adobe Affiliate Program](https://www.adobe.com/affiliates.html).

### How can the Adobe Stock API help me earn by promoting Adobe Stock?

Instead of displaying static banners, text links, you can use the Adobe Stock Search API to engage your visitors, which increases the chance they purchase from stock.adobe.com. This will increase your commissions.

### What are benefits of Adobe Affiliate Program?

High commission: $72 when referred user subscribe to a plan with minimum 10 images a month.

Cross marketing opportunity. Earn when your referred users purchase one of other Adobe products: Creative Cloud and Document Cloud.

<!--
### Are there any example scripts to get started?

See the Medium article, “[Get Paid to Search Adobe Stock](https://medium.com/adobetech/get-paid-to-search-adobe-stock-e2ba9a7c0312).”
-->

### Are there any examples of Adobe Stock API Affiliates use cases available online?

Eezy is a partner of Adobe Stock, and it has banners and custom search result widgets for Stock available on its video search pages. 

Example: https://www.vecteezy.com/search?content_type=video&qterm=planet-saturn
