---
keywords:
  - Adobe Stock
  - Stock API
  - Stock Photos
  - Stock Video
  - Premium Images
  - Illustrations
  - Creative Cloud
title: Stock API reference
description: Stock Search API reference
---

# Search API reference

You can query Adobe Stock for assets that meet your specified search criteria. You can filter the results, specify the sort order in which the results are returned, and choose how many assets to return for each page of results.

## Search requests

A request using the Stock Search API retrieves a list of assets from Adobe Stock that matches a set of search and filter values. A maximum of 100 assets can be returned from one request. This is a paginated interface that you can call multiple times to retrieve the full list.

For a guide to usage and additional examples, see [Creating Adobe Stock applications](../getting-started/04-creating-apps.md).

| Endpoint                                         | Methods                                                 |
| ------------------------------------------------ | ------------------------------------------------------- |
| https://stock.adobe.io/Rest/Media/1/Search/Files | GET, POST (only when using the similar_image parameter) |

### About search and filter criteria

Search commands have three formats:

1.  **Search parameters.** In general, search parameters identify asset information for values that cannot be predetermined, such as ID numbers or keywords. Parameters for searches look like this:

    `search_parameters[*search_item*]=*value*`

    For example:

    `search_parameters[words]=dog big happy`

    Search parameters are treated as AND. For example, you could combine `[words]` and `[creator_id]` to search for assets created by a specific creator that have the specified keywords.

    `search_parameters[words]=dog big happy&search_parameters[creator_id]=12345`

    **Tip:** You must specify at least one `search_parameters` value for each Search.

1.  **Filtering values.** These optional qualifiers specify which of the found assets to return. In general, filters identify asset information that has a known set of values, such as true/false or file type. Parameters for filtering look like this:

    `search_parameters[filters][{FILTER NAME}]={VALUE}`

    For example:

    `search_parameters[filters][orientation]=horizontal`

    You can specify multiple filtering values for content_type, template_type_id, and template_category_id; search returns assets that match any of those values. The remaining filters are treated as AND.

1.  **Response control.** In addition to the filter and search mechanisms above, search queries by default return a fixed number of fields. To increase or decrease the scope of the response data, add one or more `result_columns[]` to the query. For example, using `?result_columns[]=id` by itself will return _only_ content IDs.

```json
{
    "id": 108289885
},
{
    "id": 173919253
},
```

Chain together multiple `result_columns[]` commands to get exactly the results you want.

    result_columns[]=id&result_columns[]=title&result_columns[]=thumbnail_url

```json
{
    "id": 108289885,
    "title": "Vector illustration of colorful horse, unicorn, or pony.",
    "thumbnail_url": "https://as1.ftcdn.net/jpg/01/08/28/98/500_F_108289885_zxdW0u0ds2oI69ZiLaON3kfhM2OLxdin.jpg"
},
{
    "id": 173919253,
    "title": "Isolated cute watercolor unicorn clipart. Nursery unicorns illustration. Princess rainbow unicorns poster. Trendy pink cartoon horse.",
    "thumbnail_url": "https://as1.ftcdn.net/jpg/01/73/91/92/500_F_173919253_ivNTXG10bJKxSPRkxiAeaZZOjaWr5SBe.jpg"
},
```

See [Responses](#responses), below.

### Authentication

An `Authorization` header is not required. If you do not pass a valid bearer token in the Authorization header, you can search within Adobe Stock and access preview versions of assets, but the API will not return licensing requirements or give you the licensed status for the assets. Requests made in this way are essentially anonymous, with no notion of the user making the request.

If you do pass a valid token, then the Adobe Stock service returns the license state and licensed URL for each asset. See [API authentication](../getting-started/03-api-authentication.md).

### Request headers

See [API authentication](../getting-started/03-api-authentication.md) and [Headers for Stock API calls](10-headers-for-api-calls.md) for details about header content.

- Required headers: `x-Product`, `x-api-key`
- Optional headers: `Authorization` (required to view license state), `X-Request-Id`

### URL parameters

Pass the following URL parameters with the GET request.

**Tip:** The only required parameter is at least one search_parameters[].

| **Parameter**                                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| locale                                                | Location language code. String. Default is en_US. This command is crucial for relevant localized search results. See [Locale codes reference](14-locale-codes.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| search_parameters[words]                              | Keyword search. Space-separated list of keywords. String. Words can also be individual media identifiers (media_id), for example: `search_parameters[words]=71182279`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| search_parameters[limit]                              | Maximum number of assets to return in the call. Valid values are 1 through 100. Default is 32. String. Call repeatedly with different [offset] values to page through the found assets. **Tip:** The number of images returned in each call can vary, but never exceeds 100 entries. See the note below for `search_parameters[filters][premium]` and refer to the FAQ question, [Why are there more search results returned than the 'limit' value?](/faq/index.md#why-are-there-more-search-results-returned-than-the-limit-value)                                                                                                                                    |
| search_parameters[offset]                             | Start position in query. Valid values are 0 (the first found asset) or higher integers. With each successive call for your search, increment this by the [limit] value to get the next page of assets. For example, by default your first call uses a 0 offset and limit of 32 to return the first 32 found assets. Call this API again with an offset of 32 to retrieve the next page. Integer. Default is 0.                                                                                                                                                                                                                                                          |
| search_parameters[order]                              | Sort order in which to return found assets. Default is "relevance". String. Valid strings and their meanings: * `relevance` — How closely it matches your search request, closest matches first. * `creation` — Creation date in descending order (newest first). * `featured` — Attempts to display the highest quality content first, as scored by Adobe Sensei's machine learning algorithms. In practice, it performs best on lifestyle imagery. * `nb_downloads` — In descending order by the number of downloads by all users since the asset was added to Adobe Stock. * `undiscovered` — Starting with assets that have not commonly been viewed or downloaded. |
| search_parameters[creator_id]                         | Search by a specific asset creator's ID. Integer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| search_parameters[media_id]                           | Search for one specific asset by its unique identifier (media_id). Integer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| search_parameters[model_id]                           | Search for all assets that contain the same model as shown in this media ID. Integer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| search_parameters[serie_id]                           | Search for all assets grouped in the same series as this media ID. Integer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| search_parameters[similar]                            | Search for assets that are similar in appearance to an asset with a specific media ID. Integer. For example: `search_parameters[similar]=99338`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| search_parameters[similar_url]                        | Search for assets that are similar in appearance to an image at a specific URL. String. For example: `search_parameters[similar_url]=https://my.site/cutedog.jpg`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| search_parameters[similar_image]                      | Whether to use similar_image data for visual similarity search. Integer. `0｜1` (if using image data).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| similar_image                                         | Image data to use when searching for visually similar assets. Must also specify: `search_parameters[similar_image]=1` Supported in POST only. Valid image data is for JPG, PNG, or GIF files. Use multipart/form-data. Ignored if `search_parameters[similar_url]` is specified.                                                                                                                                                                                                                                                                                                                                                                                        |
| search_parameters[category]                           | Search for assets with a specific category ID. Integer. For example, to search for assets in the category "travel": `search_parameters[category]=1043` For more information see the [CategoryTree API reference](17-categorytree.md).                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| search_parameters[thumbnail_size]                     | Thumbnail size in pixels. Specify the size of thumbnail to return for each found asset. Integer. Valid values and meanings: * `110`: Small (110 px) * `160`: Medium (160 px) * `220`: Medium-Large (220 px) * `240`: Large (240 px) * `500`: Extra large (XL) (500 px). Returned with watermark. (default) * `1000`: Extra-extra large (XXL) (1000 px). Returned with watermark.                                                                                                                                                                                                                                                                                        |
| search_parameters[filters][area_m_pixels]             | Image sizes in megapixels (millions of pixels) to return, specified as a range in the format `min-max`. `min` and `max` are both optional and default to open ranges. Values must be (whole) integers. *Example: Search for an image that has a minimum pixel area of 4000x2500 (10Mpix) and maximum area of 5000x5000 (25Mpix):* `search_parameters[filters][area_m_pixels]:10-25` *Example: Search for an image that has a minimum area size of 4000x5000 pixels (20Mpix).* `search_parameters[filters][area_m_pixels]:20-`                                                                                                                                           |
| search_parameters[filters][image_width]               | Asset width specified as a range of pixels in the format `min-max`. `min` and `max` are both optional and default to open ranges. *Example: Only include images with a width of at least 5000 pixels* `search_parameters[filters][image_width]=5000-` OR `search_parameters[filters][image_width]=5000`                                                                                                                                                                                                                                                                                                                                                                 |
| search_parameters[filters][image_height]              | Asset height specified as a range of pixels in the format `min-max`. `min` and `max` are both optional and default to open ranges. *Examples: Only include images with a height between 2000-4000 pixels* `search_parameters[filters][image_height]=2000-4000` *Only include images with a max height of 3000 pixels* `search_parameters[filters][image_height]=-3000`                                                                                                                                                                                                                                                                                                  |
| search_parameters[filters][premium]                   | Whether to return Premium assets or not. Possible values: * `false`: only return assets with a premium level of either 0 (core) or 1 (free). * `true`: only return assets with a premium level > 1. * `all`: Return everything. String. Strongly recommend **always** setting this parameter to one of its three values, as it works around an issue where more assets can be returned than set in the `search_parameters[limit]` parameter, which can throw off pagination. See the FAQ, [Why are there more search results returned than the 'limit' value?](/faq/index.md#why-are-there-more-search-results-returned-than-the-limit-value)                           |
| search_parameters[filters][3d_type_id][]              | A multiple-value array specifying which 3D types to return. Valid values and meanings: * `1`: Models * `2`: Lights * `3`: Materials                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| search_parameters[filters][template_type_id][]        | Return found templates (starter files) for PSD or AI only if they are of the specified type. A multiple-value array specifying which template types to return. Valid values and meanings: * `1`: Photoshop PSDT * `2`: Illustrator AIT * `3`: Indesign INDT * `4`: Premiere Pro Motion Graphics Template * `5`: After Effects Motion Graphics Template For example: `search_parameters[filters][template_type_id][]=2 &search_parameters[filters][template_type_id][]=3`                                                                                                                                                                                                |
| search_parameters[filters][has_releases]              | Return found assets only if the asset has model or property releases. String. Valid values and meanings: * `true`: Return only assets with releases. * `false`: Return only assets without releases. * `all`: (Default.) Return assets regardless of release status.                                                                                                                                                                                                                                                                                                                                                                                                    |
| search_parameters[filters][content_type:photo]        | Include found assets that are photos. Integer. `0｜1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| search_parameters[filters][content_type:illustration] | Include found assets that are illustrations. Integer. `0｜1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| search_parameters[filters][content_type:vector]       | Include found assets that are vectors. Integer. `0｜1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| search_parameters[filters][content_type:video]        | Include found assets that are videos. Integer. `0｜1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| search_parameters[filters][content_type:template]     | Include found assets that are templates. Integer. `0｜1`. |
| search_parameters[filters][content_type:3d]           | Include found assets that are 3D items. Integer. `0｜1`. |
| search_parameters[filters][offensive:2]               | Return found assets only if they are flagged as including Explicit/Nudity/Violence. Integer. * `0`: Default. Omit assets in this group. * `1`: Include both safe and offensive assets in search result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| search_parameters[filters][isolated:on]               | Return found assets only if the subject is isolated from the background by being on a uniformly colored background. Integer. * `0`: Default. Omit assets that are isolated. * `1`: Return assets only if they are isolated.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| search_parameters[filters][panoramic:on]              | Return found assets only if they are panoramic (can be combined with [orientation]). Integer. * `0`: Default. Omit panoramic assets. * `1`: Return assets only if they are panoramic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| search_parameters[filters][orientation]               | Return found assets of the specified orientation. String. Valid values and meanings: * `horizontal`: Only horizontal images. * `vertical`: Only vertical images. * `square`: Only square images. * `all`: Default. All image orientations.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| search_parameters[filters][video_duration]            | Return found videos whose duration is no longer than the specified duration in seconds. String. Valid values and meanings: * `10`: Only videos up to 10 seconds. * `20`: Only videos up to 20 seconds. * `30`: Only videos up to 30 seconds. * `30-`: Only videos longer than 30 seconds. * `all`: Default. Videos of all durations.                                                                                                                                                                                                                                                                                                                                    |
| search_parameters[filters][colors]                    | Comma-separated list of hexadecimal colors (without any # prefix). Return only found assets that contain the specified colors. String. Example: `search_parameters[filters][colors]=ff0000,00ff00,0000ff`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| search_parameters[gallery_id]                         | Returns members of the specified Fotolia gallery, which must be public. Note this requires access to a Fotolia website user account. String.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| search_parameters[filters][copy_space]                | Image copy space. Value `all` returns all the images (equivalent to not having the filter in the query); value `1` filters for images that have copy space. String. `all｜1`. |
| search_parameters[filters][is_loop]                   | Filter to return loop assets; applicable only to audio & video assets. Value 'all' returns all the audio/video assets; Value '1' or 'true' filters for audio/video asset that is a loop. Note: 'false' or '0' is not a valid option * `1` * `true` * `all`                                                                                                                                                                                                                                                                                                                                                                                                              |
| search_parameters[filters][transparent]               | Filter PNG assets by transparency. When set, only PNG images with a transparent background are included. Value 'all' returns all the images (equivalent to not having the filter in the query); Value `1` or `true` filters for images that have transparency. * `1` * `true` * `all`                                                                                                                                                                                                                                                                                                                                                                                   |
| search_parameters[filters][gentech]                   | Filter AI generated (gentech) and non-gentech assets. `true` would return all gentech assets, `false` would return all non-gentech assets, `all` would return both gentech and non-gentech assets (equivalent of not having the filter). * `all` * `true` * `false`                                                                                                                                                                                                                                                                                                                                                                                                     |
| search_parameters[filters][icon_option][]             | Use to filter/exclude is_icon_sheet and is_single_icon content. The supported values are: * `icon_sheet` * `single_icon` * `icon_sheet, single_icon` * `-icon_sheet` * `-single_icon` * `-icon_sheet, -single_icon` Example: `result_columns[]=icon_option&search_parameters[filters][icon_option][]=icon_sheet&search_parameters[filters][icon_option][]=-single_icon`                                                                                                                                                                                                                                                                                                 |
| result_columns[]                                      | Specific fields you wish to include in the search result, excluding all other fields. Array[]. For a detailed description of each field, see [Responses](#responses), below. **Tip:** To combine result columns, use this syntax: `result_columns[]=title&result_columns[]=keywords` **Note 1:** Fields marked with **\*** are returned by default, but if the `result_columns[]` command is present, the default fields will not be returned unless explicitly included. **Note 2:** `is_licensed` requires an authentication header. `*nb_results` ｜ `*id` ｜ `*title` ｜ `*creator_name` ｜ `*creator_id` ｜ `country_name` ｜ `*width` ｜ `*height` ｜ `*thumbnail_url` ｜ `*thumbnail_html_tag` ｜ `*thumbnail_width` ｜ `*thumbnail_height` ｜ `thumbnail_110_url` ｜ `thumbnail_110_width` ｜ `thumbnail_110_height` ｜ `thumbnail_160_url` ｜ `thumbnail_160_width` ｜ `thumbnail_160_height` ｜ `thumbnail_220_url` ｜ `thumbnail_220_width` ｜ `thumbnail_220_height` ｜ `thumbnail_240_url` ｜ `thumbnail_240_width` ｜ `thumbnail_240_height` ｜ `thumbnail_500_url` ｜ `thumbnail_500_width` ｜ `thumbnail_500_height` ｜ `thumbnail_1000_url` ｜ `thumbnail_1000_width` ｜ `thumbnail_1000_height` ｜ `*media_type_id` ｜ `*category` ｜ `*category_hierarchy` ｜ `keywords` ｜ `has_releases` ｜ `comp_url` ｜ `comp_width` ｜ `comp_height` ｜ `is_licensed` ｜ `*vector_type` ｜ `*content_type` ｜ `framerate` ｜ `duration` ｜ `comps` ｜ `details_url` ｜ `template_type_id` ｜ `template_category_ids` ｜ `marketing_text` ｜ `description` ｜ `size_bytes` ｜ `*premium_level_id` ｜ `is_premium` ｜ `is_loop` ｜ `is_transparent` ｜ `licenses` ｜ `video_preview_url` ｜ `video_preview_width` ｜ `video_preview_height` ｜ `video_preview_content_length` ｜ `video_preview_content_type` ｜ `video_small_preview_url` ｜ `video_small_preview_width` ｜ `video_small_preview_height` ｜ `video_small_preview_content_length` ｜ `video_small_preview_content_type` ｜ `is_gentech` ｜ `icon_option` |


## Responses

The Adobe Stock Search service returns information about all found assets that also match the filtering criteria.

**Tip:** Assets on Adobe Stock can be added, changed, or removed by other parties between your API calls. Therefore, the total number of matching assets and the selection of assets can change between successive calls to Search.

\<!-- Start include --\>

<Fragment src="./search-files-responses.md" />

\<!-- End include --\>

## Example queries and responses

This example searches for assets that have the keyword "dog" and returns no more than the first two matches.

```http
GET /Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=dogs&search_parameters[limit]=2 HTTP/1.1
Host: stock.adobe.io
X-Product: MySampleApp/1.0
x-api-key: MyApiKey
```

The preceding request returns two asset descriptions. `nb_results` shows that 399,884 assets currently match the keyword "dog".

```json
{
 "nb_results": 399884,
 "files": [
   {
     "id": 86760419,
     "title": "German Shepherd Dog Sticking Head Out Driving Car Window",
     "width": 3454,
     "height": 2303,
     "creator_name": "Christin Lola",
     "creator_id": 204004289,
     "thumbnail_url":
        "https://as1.ftcdn.net/jpg/00/86/76/04/110_F_86760419_NEhOeuriYu82RwfgDqjTeIL9yx7ih5iv.jpg",
     "thumbnail_html_tag":
        "<img src='https://as1.ftcdn.net/jpg/00/86/76/04/110_F_86760419_NEhOeuriYu82RwfgDqjTeIL9yx7ih5iv.jpg'
        alt='German Shepherd Dog Sticking Head Out Driving Car Window'
        title='Photo: German Shepherd Dog Sticking Head Out Driving Car Window' />",
     "thumbnail_width": 110,
     "thumbnail_height": 73,
     "media_type_id": 1,
     "vector_type": null,
     "category": {
       "id": 47,
       "name": "Dogs"
     }
   },
   {
     "id": 84977202,
     "title": "Happy dog playing outside and carrying the American flag",
     "width": 5616,
     "height": 3744,
     "creator_name": "SSilver",
     "creator_id": 200407313,
     "thumbnail_url": "https://as1.ftcdn.net/jpg/00/84/97/72/110_F_84977202_JplQMoMQ5QiZCgVeWLwKhFHCrr4HG99Q.jpg",
     "thumbnail_html_tag":
        "<img src='https://as1.ftcdn.net/jpg/00/84/97/72/110_F_84977202_JplQMoMQ5QiZCgVeWLwKhFHCrr4HG99Q.jpg'
         alt='Happy dog playing outside and carrying the American flag'
         title='Photo: Happy dog playing outside and carrying the American flag' />",
     "thumbnail_width": 110,
     "thumbnail_height": 73,
     "media_type_id": 1,
     "vector_type": null,
     "category": {
       "id": 47,
       "name": "Dogs"
     }
   }
 ]
}
```

### Common search queries

Here are simple examples of common searches.

- Keyword search; assets matching "purple" and "clouds":

```curl
  https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[words]=purple+clouds&locale=en_US
```

- Using pagination, get the 3rd page of results (rows 200-300) for the word "dogs":

```curl
  https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[words]=dogs&search_parameters[limit]=100&search_parameters[offset]=200&locale=en_US
```

- Search for assets similar in appearance to the specified asset ID:

```curl
  https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[similar]=121353611&locale=en_US
```

- Search for assets similar in appearance to the specified URL:

```curl
  https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[similar_url]=https://i.kinja-img.com/gawker-media/image/upload/xqkbwkexcl7udc5va7pn.jpg&locale=en_US
```

- Similar asset by URL and keyword:

```curl
  https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[similar_url]=https://i.kinja-img.com/gawker-media/image/upload/xqkbwkexcl7udc5va7pn.jpg&search_parameters[words]=cats&locale=en_US
```

- Search for assets depicting the specified model:

```curl
  https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[model_id]=58344279&locale=en_US
```

## Error codes

Each error generates a JSON array that contains the following keys and values. If your application receives this array and you need assistance, send the array to Adobe.

- An **`error`** key.
- Optionally a **`code`** key. Specifies an integer designating the category of error. Code values:
  - `10`: Invalid access token. The access token that you passed is invalid or expired.
  - `11`: Invalid API Key. The API key that you passed is not valid or has expired.
  - `20`: Invalid parameters. The URL parameters that you passed are not supported.
  - `31`: Invalid Method. The method that you specified does not exist in the method list.
  - `100`: Invalid data. Data that you specified as arguments are not supported.


## More information

- See the practical search example in [Search for assets](../getting-started/apps/05-search-for-assets.md).
- Refer to the [Affiliate API Workflow](../getting-started/07-workflow-guides.md) guide for a complete guide to partnering with Adobe Stock and using the Search API.
