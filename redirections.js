/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
  let prefixPath =
    window.location.host.indexOf("localhost") >= 0
      ? "/"
      : "stock/docs/";
  let redirectPath = "";

  // redirect paths must land on developer.adobe.com/stock/docs/
  // or on localhost/
  if (
    (window.location.hash !== "" &&
      window.location.host.indexOf("localhost") < 0 &&
      window.location.pathname === "/stock/docs/") ||
    (window.location.hash !== "" &&
      window.location.host.indexOf("localhost") >= 0 &&
      window.location.pathname === "/")
  ) {
    switch (window.location.hash) {
      case "#!adobe/stock-api-docs/master/docs/01-getting-started.md":
        redirectPath = prefixPath + `getting-started/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/02-register-app.md":
        redirectPath = prefixPath + `getting-started/02-register-app/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/03-api-authentication.md":
        redirectPath = prefixPath + `getting-started/03-api-authentication/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/04-creating-apps.md":
        redirectPath = prefixPath + `getting-started/04-creating-apps/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/apps/05-search-for-assets.md":
        redirectPath = prefixPath + `getting-started/apps/05-search-for-assets/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/apps/06-licensing-assets.md":
        redirectPath = prefixPath + `getting-started/apps/06-licensing-assets/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/07-workflow-guides.md":
        redirectPath = prefixPath + `getting-started/07-workflow-guides/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/getting-started/08-sample-code-sdks.md":
        redirectPath = prefixPath + `getting-started/08-sample-code-sdks/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/09-api-summary.md":
        redirectPath = prefixPath + `api/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/10-headers-for-api-calls.md":
        redirectPath = prefixPath + `api/10-headers-for-api-calls/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/11-search-reference.md":
        redirectPath = prefixPath + `api/11-search-reference/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/19-bulk-metadata-files-reference.md":
        redirectPath = prefixPath + `api/19-bulk-metadata-files-reference/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/12-licensing-reference.md":
        redirectPath = prefixPath + `api/12-licensing-reference/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/13-license-history.md":
        redirectPath = prefixPath + `api/13-license-history/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/17-categorytree.md":
        redirectPath = prefixPath + `api/17-categorytree/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/api/14-locale-codes.md":
        redirectPath = prefixPath + `api/14-locale-codes/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/15-faq.md":
        redirectPath = prefixPath + `faq/`;
        break;
      case "#!adobe/stock-api-docs/master/supplemental/stock-api-business-faq.md":
        redirectPath = prefixPath + `faq/stock-api-business-faq/`;
        break;
      case "#!adobe/stock-api-docs/master/supplemental/terms-for-adobe-stock-developers.md":
        redirectPath = prefixPath + `faq/terms-for-adobe-stock-developers/`;
        break;
      case "#!adobe/stock-api-docs/master/docs/18-fotolia-migration-resources.md":
        redirectPath = prefixPath + `faq/18-fotolia-migration-resources/`;
        break;
    }

    window.location.href =
      decodeURIComponent("http://" + window.location.host + "/" + redirectPath);
  }
})();