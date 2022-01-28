/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Adobe Stock API',
        path: '/getting-started/',
      },
      {
        title: 'API reference',
        path: '/api/',
      },
      {
        title: 'FAQs',
        path: '/faq/',
      },
    ],
    subPages: [
      {
        path: '/getting-started/',
        title: 'Getting started with the Stock API',
      },
      {
        path: '/getting-started/02-register-app.md',
        title: 'Register your application',
      },
      {
        path: '/getting-started/03-api-authentication.md',
        title: 'API authentication headers',
      },
      {
        path: '/getting-started/04-creating-apps.md',
        title: 'Creating Adobe Stock applications',
      },
      {
        path: '/getting-started/apps/05-search-for-assets.md',
        title: 'Searching for assets',
      },
      {
        path: '/getting-started/apps/06-licensing-assets.md',
        title: 'Licensing assets and stuff',
      },
      {
        path: '/getting-started/07-workflow-guides.md',
        title: 'Stock workflow guides',
      },
      {
        path: '/getting-started/08-sample-code-sdks.md',
        title: 'Sample code and SDKs',
      },
      {
        path: '/api/',
        title: 'Adobe Stock API reference',
      },
      {
        path: '/api/10-headers-for-api-calls.md',
        title: 'Headers for Stock API calls',
      },
      {
        path: '/api/11-search-reference.md',
        title: 'Search API reference',
      },
      {
        path: '/api/19-bulk-metadata-files-reference.md',
        title: 'Files API for bulk metadata',
      },
      {
        path: '/api/12-licensing-reference.md',
        title: 'Licensing reference',
      },
      {
        path: '/api/13-license-history.md',
        title: 'License history reference',
      },
      {
        path: '/api/17-categorytree.md',
        title: 'Category tree reference',
      },
      {
        path: '/api/14-locale-codes.md',
        title: 'Locale codes',
      },
      {
        title: 'Stock API technical FAQ',
        path: '/faq/',
      },
      {
        title: 'Stock API business FAQ',
        path: '/faq/stock-api-business-faq.md',
      },
      {
        path: '/faq/terms-for-adobe-stock-developers.md',
        title: 'Adobe Stock developer terms',
      },
      {
        path: '/faq/18-fotolia-migration-resources.md',
        title: 'Fotolia migration resources',
      },
    ],
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/stock/docs/',
};
