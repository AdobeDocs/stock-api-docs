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

<a id="search-requests"></a>

## Search requests

A request using the Stock Search API retrieves a list of assets from Adobe Stock that matches a set of search and filter values. A maximum of 100 assets can be returned from one request. This is a paginated interface that you can call multiple times to retrieve the full list.

For a guide to usage and additional examples, see [Creating Adobe Stock applications](../getting-started/04-creating-apps.md).

| Endpoint                                         | Methods                                                 |
| ------------------------------------------------ | ------------------------------------------------------- |
| https://stock.adobe.io/Rest/Media/1/Search/Files | GET, POST (only when using the similar_image parameter) |

<a id="about-search-and-filter-criteria"></a>

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

<a id="authentication"></a>

### Authentication

An `Authorization` header is not required. If you do not pass a valid bearer token in the Authorization header, you can search within Adobe Stock and access preview versions of assets, but the API will not return licensing requirements or give you the licensed status for the assets. Requests made in this way are essentially anonymous, with no notion of the user making the request.

If you do pass a valid token, then the Adobe Stock service returns the license state and licensed URL for each asset. See [API authentication](../getting-started/03-api-authentication.md).

<a id="request-headers"></a>

### Request headers

See [API authentication](../getting-started/03-api-authentication.md) and [Headers for Stock API calls](./10-headers-for-api-calls.md) for details about header content.

- Required headers: `x-Product`, `x-api-key`
- Optional headers: `Authorization` (required to view license state), `X-Request-Id`

<a id="url-parameters"></a>

### URL parameters

Pass the following URL parameters with the GET request.

**Tip:** The only required parameter is at least one search_parameters[].

<table columnWidths="30,70">
    <thead>
        <tr>
            <th><strong>Parameter</strong>
            </th>
            <th><strong>Description</strong>
            </th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>locale
        </td>
        <td>Location language code. String. Default is en_US. This command is crucial for relevant localized search results. See <a href="./14-locale-codes.md">Locale codes reference</a>.
        </td>
    </tr>
    <tr>
        <td>search_parameters[words]
        </td>
        <td>Keyword search. Space-separated list of keywords. String.
            Words can also be individual media identifiers (media_id), for example:
            <inlineCode>search_parameters[words]=71182279</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[limit]
        </td>
        <td>Maximum number of assets to return in the call. Valid values are 1 through 100. Default is 32. String.
            Call repeatedly with different [offset] values to page through the found assets. <strong>Tip:</strong>
            The
            number of images returned in each call can vary, but never exceeds 100 entries.
            See the note below for <inlineCode>search_parameters[filters][premium]</inlineCode> and refer to the FAQ question, <a href="/faq/?#why-are-there-more-search-results-returned-than-the-limit-value">Why are there more search results returned than the 'limit' value?</a>
        </td>
    </tr>
    <tr>
        <td>search_parameters[offset]
        </td>
        <td>Start position in query. Valid values are 0 (the first found asset) or higher integers. With each
            successive
            call for your search, increment this by the [limit] value to get the next page of assets.
            For example, by default your first call uses a 0 offset and limit of 32 to return the first 32 found
            assets.
            Call this API again with an offset of 32 to retrieve the next page. Integer. Default is 0.
        </td>
    </tr>
    <tr>
        <td>search_parameters[order]
        </td>
        <td>Sort order in which to return found assets. Default is "relevance". String.
            Valid strings and their meanings:
            <ul>
                <li><inlineCode>relevance</inlineCode><br />
                    How closely it matches your search request, closest matches first.</li>
                <li><inlineCode>creation</inlineCode><br />
                    Creation date in descending order (newest first).</li>
                <li><inlineCode>featured</inlineCode><br />
                    Attempts to display the highest quality content first, as scored by Adobe Sensei's machine
                    learning
                    algorithms. In practice, it performs best on lifestyle imagery.</li>
                <li><inlineCode>nb_downloads</inlineCode><br />
                    In descending order by the number of downloads by all users since the asset was added to Adobe
                    Stock.</li>
                <li><inlineCode>undiscovered</inlineCode><br />
                    Starting with assets that have not commonly been viewed or downloaded.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[creator_id]
        </td>
        <td>Search by a specific asset creator's ID. Integer.
        </td>
    </tr>
    <tr>
        <td>search_parameters[media_id]
        </td>
        <td>Search for one specific asset by its unique identifier (media_id). Integer.
        </td>
    </tr>
    <tr>
        <td>search_parameters[model_id]
        </td>
        <td>Search for all assets that contain the same model as shown in this media ID. Integer.
        </td>
    </tr>
    <tr>
        <td>search_parameters[serie_id]
        </td>
        <td>Search for all assets grouped in the same series as this media ID. Integer.
        </td>
    </tr>
    <tr>
        <td>search_parameters[similar]
        </td>
        <td>Search for assets that are similar in appearance to an asset with a specific media ID. Integer. For
            example:
            <inlineCode>search_parameters[similar]=99338</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[similar_url]
        </td>
        <td>Search for assets that are similar in appearance to an image at a specific URL. String. For example:
            <inlineCode>search_parameters[similar_url]=https://my.site/cutedog.jpg</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[similar_image]
        </td>
        <td>Whether to use similar_image data for visual similarity search. Integer.
            <inlineCode>0 | 1</inlineCode> (if using image data).
        </td>
    </tr>
    <tr>
        <td>similar_image
        </td>
        <td>Image data to use when searching for visually similar assets. Must also specify:
            <inlineCode>search_parameters[similar_image]=1</inlineCode>
            Supported in POST only. Valid image data is for JPG, PNG, or GIF files. Use multipart/form-data.
            Ignored if <inlineCode>search_parameters[similar_url]</inlineCode> is specified.
        </td>
    </tr>
    <tr>
        <td>search_parameters[category]
        </td>
        <td>Search for assets with a specific category ID. Integer.
            For example, to search for assets in the category "travel":
            <inlineCode>search_parameters[category]=1043</inlineCode>
            For more information see the <a href="./17-categorytree.md">CategoryTree API reference</a>.
        </td>
    </tr>
    <tr>
        <td>search_parameters[thumbnail_size]
        </td>
        <td>Thumbnail size in pixels. Specify the size of thumbnail to return for each found asset. Integer.
            Valid values and meanings:
            <ul>
                <li><inlineCode>110</inlineCode>: Small (110 px)</li>
                <li><inlineCode>160</inlineCode>: Medium (160 px)</li>
                <li><inlineCode>220</inlineCode>: Medium-Large (220 px)</li>
                <li><inlineCode>240</inlineCode>: Large (240 px)</li>
                <li><inlineCode>500</inlineCode>: Extra large (XL) (500 px). Returned with watermark. (default)</li>
                <li><inlineCode>1000</inlineCode>: Extra-extra large (XXL) (1000 px). Returned with watermark.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][area_m_pixels]
        </td>
        <td>
            Image sizes in megapixels (millions of pixels) to return, specified as a range in the format <inlineCode>min-max</inlineCode>.<br/> <inlineCode>min</inlineCode> and <inlineCode>max</inlineCode> are both optional and default to open
            ranges. Values must be (whole) integers.
            <p>Examples:<br />
              <em>Search for an image that has a minimum pixel area of 4000x2500 (10Mpix) and maximum area of
                  5000x5000 (25Mpix):</em><br />
              <inlineCode>search_parameters[filters][area_m_pixels]:10-25</inlineCode>
            </p>
            <p>
              <em>Search for an image that has a minimum area size of 4000x5000 pixels (20Mpix).</em><br />
              <inlineCode>search_parameters[filters][area_m_pixels]:20-</inlineCode>
            </p>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][image_width]</td>
        <td>
            Asset width specified as a range of pixels in the format <inlineCode>min-max</inlineCode>.<br /> 
            <inlineCode>min</inlineCode> and
            <inlineCode>max</inlineCode> are both optional and default to open ranges.
            <p>
              Example:<br />
              <em>Only include images with a width of at least 5000 pixels</em><br />
              <inlineCode>search_parameters[filters][image_width]=5000-</inlineCode> <br />
              OR <inlineCode>search_parameters[filters][image_width]=5000</inlineCode>
            </p>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][image_height]</td>
        <td>
            Asset height specified as a range of pixels in the format <inlineCode>min-max</inlineCode>. <br /> 
            <inlineCode>min</inlineCode> and
            <inlineCode>max</inlineCode> are both optional and default to open ranges.
            <p>
              Examples:<br />
              <em>Only include images with a height between 2000-4000 pixels</em><br />
              <inlineCode>search_parameters[filters][image_height]=2000-4000</inlineCode>
            </p>
            <p>
              <em>Only include images with a max height of 3000 pixels</em><br />
              <inlineCode>search_parameters[filters][image_height]=-3000</inlineCode>
            </p>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][premium]
        </td>
        <td>Whether to return Premium assets or not. Possible values:
            <ul>
                <li><inlineCode>false</inlineCode>: only return assets with a premium level of either 0 (core) or 1 (free).</li>
                <li><inlineCode>true</inlineCode>: only return assets with a premium level > 1.</li>
                <li><inlineCode>all</inlineCode>: Return everything. String.</li>
            </ul>
            <p>
              Strongly recommend <strong>always</strong> setting this parameter to one of its three values, as it
              works around an issue where more assets can be returned than set in the <inlineCode>search_parameters[limit]</inlineCode>
              parameter, which can throw off pagination. See the FAQ, <a href="/faq/?#why-are-there-more-search-results-returned-than-the-limit-value">Why are there more search results returned than the 'limit' value?</a>
            </p>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][3d_type_id][]
        </td>
        <td>A multiple-value array specifying which 3D types to return. Valid values and meanings:
            <ul>
                <li><inlineCode>1</inlineCode>: Models</li>
                <li><inlineCode>2</inlineCode>: Lights</li>
                <li><inlineCode>3</inlineCode>: Materials</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][template_type_id][]
        </td>
        <td>Return found templates (starter files) for PSD or AI only if they are of the specified type. A
            multiple-value
            array specifying which template types to return.
            Valid values and meanings:
            <ul>
                <li><inlineCode>1</inlineCode>: Photoshop PSDT</li>
                <li><inlineCode>2</inlineCode>: Illustrator AIT</li>
                <li><inlineCode>3</inlineCode>: Indesign INDT</li>
                <li><inlineCode>4</inlineCode>: Premiere Pro Motion Graphics Template</li>
                <li><inlineCode>5</inlineCode>: After Effects Motion Graphics Template</li>
            </ul>
            For example:
            <inlineCode>search_parameters[filters][template_type_id][]=2 &search_parameters[filters][template_type_id][]=3</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][has_releases]
        </td>
        <td>Return found assets only if the asset has model or property releases. String.
            Valid values and meanings:
            <ul>
                <li><inlineCode>true</inlineCode>: Return only assets with releases.</li>
                <li><inlineCode>false</inlineCode>: Return only assets without releases. </li>
                <li><inlineCode>all</inlineCode>: (Default.) Return assets regardless of release status.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][content_type:photo]
        </td>
        <td>Include found assets that are photos. Integer.<br />
            <inlineCode>0 | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][content_type:illustration]
        </td>
        <td>Include found assets that are illustrations. Integer.<br />
            <inlineCode>0 | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][content_type:vector]
        </td>
        <td>Include found assets that are vectors. Integer.<br />
            <inlineCode>0 | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][content_type:video]
        </td>
        <td>Include found assets that are videos. Integer.<br />
            <inlineCode>0 | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][content_type:template]
        </td>
        <td>Include found assets that are templates. Integer.<br />
            <inlineCode>0 | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][content_type:3d]
        </td>
        <td>Include found assets that are 3D items. Integer.<br />
            <inlineCode>0 | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][offensive:2]
        </td>
        <td>Return found assets only if they are flagged as including Explicit/Nudity/Violence. Integer.
            <ul>
                <li><inlineCode>0</inlineCode>: Default. Omit assets in this group.</li>
                <li><inlineCode>1</inlineCode>: Include both safe and offensive assets in search result.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][isolated:on]
        </td>
        <td>Return found assets only if the subject is isolated from the background by being on a uniformly colored
            background. Integer.<ul>
                <li><inlineCode>0</inlineCode>: Default. Omit assets that are isolated.</li>
                <li><inlineCode>1</inlineCode>: Return assets only if they are isolated.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][panoramic:on]
        </td>
        <td>Return found assets only if they are panoramic (can be combined with [orientation]). Integer.
            <ul>
                <li><inlineCode>0</inlineCode>: Default. Omit panoramic assets.</li>
                <li><inlineCode>1</inlineCode>: Return assets only if they are panoramic.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][orientation]
        </td>
        <td>Return found assets of the specified orientation. String. Valid values and meanings:<ul>
                <li><inlineCode>horizontal</inlineCode>: Only horizontal images.</li>
                <li><inlineCode>vertical</inlineCode>: Only vertical images.</li>
                <li><inlineCode>square</inlineCode>: Only square images.</li>
                <li><inlineCode>all</inlineCode>: Default. All image orientations.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][video_duration]</td>
        <td>Return found videos whose duration is no longer than the specified duration in seconds. String.
            Valid values and meanings:
            <ul>
                <li><inlineCode>10</inlineCode>: Only videos up to 10 seconds.</li>
                <li><inlineCode>20</inlineCode>: Only videos up to 20 seconds.</li>
                <li><inlineCode>30</inlineCode>: Only videos up to 30 seconds.</li>
                <li><inlineCode>30-</inlineCode>: Only videos longer than 30 seconds.</li>
                <li><inlineCode>all</inlineCode>: Default. Videos of all durations.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][colors]
        </td>
        <td>Comma-separated list of hexadecimal colors (without any # prefix). Return only found assets that contain
            the
            specified colors. String.
            Example:<br />
            <inlineCode>search_parameters[filters][colors]=ff0000,00ff00,0000ff</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[gallery_id]
        </td>
        <td>Returns members of the specified Fotolia gallery, which must be public. Note this requires access to a
            Fotolia
            website user account. String.
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][copy_space]
        </td>
        <td>Image copy space. Value <inlineCode>all</inlineCode> returns all the images (equivalent to not having the filter in
            the
            query); value <inlineCode>1</inlineCode> filters for images that have copy space. String.
            <inlineCode>all | 1</inlineCode>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][is_loop]
        </td>
        <td>Filter to return loop assets; applicable only to audio & video assets. Value 'all' returns all the audio/video assets; Value '1' or 'true' filters for audio/video asset that is a loop. Note: 'false' or '0' is not a valid option
            <ul>
                <li><inlineCode>1</inlineCode></li>
                <li><inlineCode>true</inlineCode></li>
                <li><inlineCode>all</inlineCode></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>search_parameters[filters][transparent]
        </td>
        <td>Filter PNG assets by transparency. When set, only PNG images with a transparent background are included. Value 'all' returns all the images (equivalent to not having the filter in the query); Value `1` or `true` filters for images that have transparency.
            <ul>
                <li><inlineCode>1</inlineCode></li>
                <li><inlineCode>true</inlineCode></li>
                <li><inlineCode>all</inlineCode></li>
            </ul>
        </td>
    </tr>
    <tr>
            <td>search_parameters[filters][gentech]
        </td>
        <td>Filter AI generated (gentech) and non-gentech assets. <inlineCode>true</inlineCode> would return all gentech assets, <inlineCode>false</inlineCode> would return all non-gentech assets, <inlineCode>all</inlineCode> would return both gentech and non-gentech assets (equivalent of not having the filter). 
            <ul>
                <li><inlineCode>all</inlineCode></li>
                <li><inlineCode>true</inlineCode></li>
                <li><inlineCode>false</inlineCode></li>
            </ul>
        </td>
    </tr>
    <tr>
            <td>search_parameters[filters][icon_option][] 
        </td>
        <td>Use to filter/exclude is_icon_sheet and is_single_icon content. The supported values are:
            <ul>
                <li><inlineCode>icon_sheet</inlineCode></li>
                <li><inlineCode>single_icon</inlineCode></li>
                <li><inlineCode>icon_sheet, single_icon</inlineCode></li>
                <li><inlineCode>-icon_sheet</inlineCode></li>
                <li><inlineCode>-single_icon</inlineCode></li>
                <li><inlineCode>-icon_sheet, -single_icon</inlineCode></li>
            </ul>
        Example:
        <pre>result_columns[]=icon_option&search_parameters[filters][icon_option][]=icon_sheet&search_parameters[filters][icon_option][]=-single_icon</pre>
        </td>
    </tr>    
    <tr>
        <td>result_columns[]
        </td>
        <td>
            Specific fields you wish to include in the search result, excluding all other fields. Array[]. For a
                detailed
                description of each field, see <a href="#responses">Responses</a>, below.
            <p><strong>Tip:</strong> To combine result columns, use this syntax:
                <inlineCode>result_columns[]=title&result_columns[]=keywords</inlineCode>
            </p>
            <p><strong>Note 1:</strong> Fields marked with <strong>*</strong> are returned by default, but if the
                <inlineCode>result_columns[]</inlineCode> command is present, the default fields will not be returned unless
                explicitly
                included. <br /> <strong>Note 2:</strong> <inlineCode>is_licensed</inlineCode> requires an authentication
                header.
            </p>
            <p>
                <inlineCode>*nb_results</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*id</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*title</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*creator_name</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*creator_id</inlineCode>&nbsp;|&nbsp;
                <inlineCode>country_name</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*thumbnail_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*thumbnail_html_tag</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*thumbnail_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*thumbnail_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_110_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_110_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_110_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_160_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_160_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_160_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_220_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_220_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_220_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_240_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_240_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_240_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_500_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_500_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_500_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_1000_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_1000_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>thumbnail_1000_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*media_type_id</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*category</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*category_hierarchy</inlineCode>&nbsp;|&nbsp;
                <inlineCode>keywords</inlineCode>&nbsp;|&nbsp;
                <inlineCode>has_releases</inlineCode>&nbsp;|&nbsp;
                <inlineCode>comp_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>comp_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>comp_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>is_licensed</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*vector_type</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*content_type</inlineCode>&nbsp;|&nbsp;
                <inlineCode>framerate</inlineCode>&nbsp;|&nbsp;
                <inlineCode>duration</inlineCode>&nbsp;|&nbsp;
                <inlineCode>comps</inlineCode>&nbsp;|&nbsp;
                <inlineCode>details_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>template_type_id</inlineCode>&nbsp;|&nbsp;
                <inlineCode>template_category_ids</inlineCode>&nbsp;|&nbsp;
                <inlineCode>marketing_text</inlineCode>&nbsp;|&nbsp;
                <inlineCode>description</inlineCode>&nbsp;|&nbsp;
                <inlineCode>size_bytes</inlineCode>&nbsp;|&nbsp;
                <inlineCode>*premium_level_id</inlineCode>&nbsp;|&nbsp;
                <inlineCode>is_premium</inlineCode>&nbsp;|&nbsp;
                <inlineCode>is_loop</inlineCode>&nbsp;|&nbsp;
                <inlineCode>is_transparent</inlineCode>&nbsp;|&nbsp;
                <inlineCode>licenses</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_preview_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_preview_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_preview_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_preview_content_length</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_preview_content_type</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_small_preview_url</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_small_preview_width</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_small_preview_height</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_small_preview_content_length</inlineCode>&nbsp;|&nbsp;
                <inlineCode>video_small_preview_content_type</inlineCode>&nbsp;|&nbsp;
                <inlineCode>is_gentech</inlineCode>&nbsp;|&nbsp;
                <inlineCode>icon_option</inlineCode>
            </p>
        </td>
    </tr>
    </tbody>
</table>

<a id="responses"></a>

## Responses

The Adobe Stock Search service returns information about all found assets that also match the filtering criteria.

**Tip:** Assets on Adobe Stock can be added, changed, or removed by other parties between your API calls. Therefore, the total number of matching assets and the selection of assets can change between successive calls to Search.

<!-- Start include -->

import Responses from './search-files-responses.md'

<Responses />

<!-- End include -->

<a id="example-queries-and-responses"></a>

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

<a id="common-search-queries"></a>

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

<a id="error-codes"></a>

## Error codes

Each error generates a JSON array that contains the following keys and values. If your application receives this array and you need assistance, send the array to Adobe.

- An **`error`** key.
- Optionally a **`code`** key. Specifies an integer designating the category of error. Code values:
  - `10`: Invalid access token. The access token that you passed is invalid or expired.
  - `11`: Invalid API Key. The API key that you passed is not valid or has expired.
  - `20`: Invalid parameters. The URL parameters that you passed are not supported.
  - `31`: Invalid Method. The method that you specified does not exist in the method list.
  - `100`: Invalid data. Data that you specified as arguments are not supported.

<a id="more-information"></a>

## More information

- See the practical search example in [Search for assets](../getting-started/apps/05-search-for-assets.md).
- Refer to the [Affiliate API Workflow](../getting-started/07-workflow-guides.md) guide for a complete guide to partnering with Adobe Stock and using the Search API.
