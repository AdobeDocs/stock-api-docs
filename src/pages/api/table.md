# Table

## Blah

You know it

<table class="spectrum-Table">
    <thead class="spectrum-Table-head">
        <tr class="spectrum-Table-row css-us97lb-Tr">
            <th class="spectrum-Table-headCell"><strong>Parameter</strong>
            </th>
            <th class="spectrum-Table-headCell"><strong>Description</strong>
            </th>
        </tr>
    </thead>
    <tbody class="spectrum-Table-body">
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>locale
          </td>
          <td>Location language code. String. Default is en_US. See <a href="14-locale-codes.md">Locale codes
                  reference</a>.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[words]
          </td>
          <td>Keyword search. Space-separated list of keywords. String.
              Words can also be individual media identifiers (media_id), for example:
              <inlineCode class="spectrum-Body--sizeS">search_parameters[words]=71182279</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[limit]
          </td>
          <td>Maximum number of assets to return in the call. Valid values are 1 through 64. Default is 32. String.
              Call repeatedly with different [offset] values to page through the found assets. <strong>Tip:</strong>
              The
              number of images returned in each call can vary, but never exceeds 64 entries.
              See the note below for <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][premium]</inlineCode> and refer to the FAQ question, <a href="../15-faq.md?#why-are-there-more-search-results-returned-than-the-limit-value">Why are there more search results returned than the 'limit' value?</a>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
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
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[order]
          </td>
          <td>Sort order in which to return found assets. Default is "relevance". String.
              Valid strings and their meanings:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">relevance</inlineCode><br />
                      How closely it matches your search request, closest matches first.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">creation</inlineCode><br />
                      Creation date in descending order (newest first).</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">featured</inlineCode><br />
                      Attempts to display the highest quality content first, as scored by Adobe Sensei's machine
                      learning
                      algorithms. In practice, it performs best on lifestyle imagery.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">nb_downloads</inlineCode><br />
                      In descending order by the number of downloads by all users since the asset was added to Adobe
                      Stock.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">undiscovered</inlineCode><br />
                      Starting with assets that have not commonly been viewed or downloaded.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[creator_id]
          </td>
          <td>Search by a specific asset creator's ID. Integer.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[media_id]
          </td>
          <td>Search for one specific asset by its unique identifier (media_id). Integer.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[model_id]
          </td>
          <td>Search for assets that portray a specific person (model) using the model's ID. Integer.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[serie_id]
          </td>
          <td>Search for assets in the specified series using the series ID. Returns all assets that the creator has
              grouped
              into this single series. Integer.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[similar]
          </td>
          <td>Search for assets that are similar in appearance to an asset with a specific media ID. Integer. For
              example:
              <inlineCode class="spectrum-Body--sizeS">search_parameters[similar]=99338</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[similar_url]
          </td>
          <td>Search for assets that are similar in appearance to an image at a specific URL. String. For example:
              <inlineCode class="spectrum-Body--sizeS">search_parameters[similar_url]=http://my.site.com/images/cutedog.jpg</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[similar_image]
          </td>
          <td>Whether to use similar_image data for visual similarity search. Integer.
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode> (if using image data).
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>similar_image
          </td>
          <td>Image data to use when searching for visually similar assets. Must also specify:
              <inlineCode class="spectrum-Body--sizeS">search_parameters[similar_image]=1</inlineCode>
              Supported in POST only. Valid image data is for JPG, PNG, or GIF files. Use multipart/form-data.
              Ignored if <inlineCode class="spectrum-Body--sizeS">search_parameters[similar_url]</inlineCode> is specified.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[category]
          </td>
          <td>Search for assets with a specific category ID. Integer.
              For example, to search for assets in the category "travel":
              <inlineCode class="spectrum-Body--sizeS">search_parameters[category]=1043</inlineCode>
              For more information see the <a href="17-categorytree.md">CategoryTree API reference</a>.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[thumbnail_size]
          </td>
          <td>Thumbnail size in pixels. Specify the size of thumbnail to return for each found asset. Integer.
              Valid values and meanings:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">110</inlineCode>: Small (110 px)</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">160</inlineCode>: Medium (160 px)</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">220</inlineCode>: Medium-Large (220 px)</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">240</inlineCode>: Large (240 px)</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">500</inlineCode>: Extra large (XL) (500 px). Returned with watermark. (default)</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">1000</inlineCode>: Extra-extra large (XXL) (1000 px). Returned with watermark.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][area_m_pixels]
          </td>
          <td>
              Image sizes in megapixels (millions of pixels) to return, specified as a range in the format <inlineCode class="spectrum-Body--sizeS">min-max</inlineCode>.<br/> <inlineCode class="spectrum-Body--sizeS">min</inlineCode> and <inlineCode class="spectrum-Body--sizeS">max</inlineCode> are both optional and default to open
              ranges. Values must be (whole) integers.
              <p class="spectrum-Body--sizeS">Examples:<br />
                <em>Search for an image that has a minimum pixel area of 4000x2500 (10Mpix) and maximum area of
                    5000x5000 (25Mpix):</em><br />
                <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][area_m_pixels]:10-25</inlineCode>
              </p>
              <p class="spectrum-Body--sizeS">
                <em>Search for an image that has a minimum area size of 4000x5000 pixels (20Mpix).</em><br />
                <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][area_m_pixels]:20-</inlineCode>
              </p>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][image_width]</td>
          <td>
              Asset width specified as a range of pixels in the format <inlineCode class="spectrum-Body--sizeS">min-max</inlineCode>.<br /> 
              <inlineCode class="spectrum-Body--sizeS">min</inlineCode> and
              <inlineCode class="spectrum-Body--sizeS">max</inlineCode> are both optional and default to open ranges.
              <p class="spectrum-Body--sizeS">
                Example:<br />
                <em>Only include images with a width of at least 5000 pixels</em><br />
                <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][image_width]=5000-</inlineCode> <br />
                OR <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][image_width]=5000</inlineCode>
              </p>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][image_height]</td>
          <td>
              Asset height specified as a range of pixels in the format <inlineCode class="spectrum-Body--sizeS">min-max</inlineCode>. <br /> 
              <inlineCode class="spectrum-Body--sizeS">min</inlineCode> and
              <inlineCode class="spectrum-Body--sizeS">max</inlineCode> are both optional and default to open ranges.
              <p class="spectrum-Body--sizeS">
                Examples:<br />
                <em>Only include images with a height between 2000-4000 pixels</em><br />
                <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][image_height]=2000-4000</inlineCode>
              </p>
              <p class="spectrum-Body--sizeS">
                <em>Only include images with a max height of 3000 pixels</em><br />
                <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][image_height]=-3000</inlineCode>
              </p>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][premium]
          </td>
          <td>Whether to return Premium assets or not. Possible values:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">false</inlineCode>: only return assets with a premium level of either 0 (core) or 1 (free).</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">true</inlineCode>: only return assets with a premium level > 1.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">all</inlineCode>: Return everything. String.</li>
              </ul>
              <p class="spectrum-Body--sizeS">
                Strongly recommend <strong>always</strong> setting this parameter to one of its three values, as it
                works around an issue where more assets can be returned than set in the <inlineCode class="spectrum-Body--sizeS">search_parameters[limit]</inlineCode>
                parameter, which can throw off pagination. See the FAQ, <a href="../15-faq.md?#why-are-there-more-search-results-returned-than-the-limit-value">Why are there more search results returned than the 'limit' value?</a>
              </p>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][3d_type_id][]
          </td>
          <td>A multiple-value array specifying which 3D types to return. Valid values and meanings:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">1</inlineCode>: Models</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">2</inlineCode>: Lights</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">3</inlineCode>: Materials</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][template_type_id][]
          </td>
          <td>Return found templates (starter files) for PSD or AI only if they are of the specified type. A
              multiple-value
              array specifying which template types to return.
              Valid values and meanings:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">1</inlineCode>: Photoshop PSDT</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">2</inlineCode>: Illustrator AIT</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">3</inlineCode>: Indesign INDT</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">4</inlineCode>: Premiere Pro Motion Graphics Template</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">5</inlineCode>: After Effects Motion Graphics Template</li>
              </ul>
              For example:
              <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][template_type_id][]=2&search_parameters[filters][template_type_id][]=3</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][has_releases]
          </td>
          <td>Return found assets only if the asset has model or property releases. String.
              Valid values and meanings:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">true</inlineCode>: Return only assets with releases.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">false</inlineCode>: Return only assets without releases. </li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">all</inlineCode>: (Default.) Return assets regardless of release status.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][content_type:photo]
          </td>
          <td>Include found assets that are photos. Integer.<br />
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][content_type:illustration]
          </td>
          <td>Include found assets that are illustrations. Integer.<br />
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][content_type:vector]
          </td>
          <td>Include found assets that are vectors. Integer.<br />
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][content_type:video]
          </td>
          <td>Include found assets that are videos. Integer.<br />
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][content_type:template]
          </td>
          <td>Include found assets that are templates. Integer.<br />
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][content_type:3d]
          </td>
          <td>Include found assets that are 3D items. Integer.<br />
              <inlineCode class="spectrum-Body--sizeS">0 | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][offensive:2]
          </td>
          <td>Return found assets only if they are flagged as including Explicit/Nudity/Violence. Integer.
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">0</inlineCode>: Default. Omit assets in this group.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">1</inlineCode>: Return assets only if they are in this group.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][isolated:on]
          </td>
          <td>Return found assets only if the subject is isolated from the background by being on a uniformly colored
              background. Integer.<ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">0</inlineCode>: Default. Omit assets that are isolated.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">1</inlineCode>: Return assets only if they are isolated.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][panoramic:on]
          </td>
          <td>Return found assets only if they are panoramic (can be combined with [orientation]). Integer.
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">0</inlineCode>: Default. Omit panoramic assets.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">1</inlineCode>: Return assets only if they are panoramic.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][orientation]
          </td>
          <td>Return found assets of the specified orientation. String. Valid values and meanings:<ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">horizontal</inlineCode>: Only horizontal images.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">vertical</inlineCode>: Only vertical images.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">square</inlineCode>: Only square images.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">all</inlineCode>: Default. All image orientations.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][video_duration]</td>
          <td>Return found videos whose duration is no longer than the specified duration in seconds. String.
              Valid values and meanings:
              <ul>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">10</inlineCode>: Only videos up to 10 seconds.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">20</inlineCode>: Only videos up to 20 seconds.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">30</inlineCode>: Only videos up to 30 seconds.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">30-</inlineCode>: Only videos longer than 30 seconds.</li>
                  <li class="spectrum-Body--sizeS"><inlineCode class="spectrum-Body--sizeS">all</inlineCode>: Default. Videos of all durations.</li>
              </ul>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][colors]
          </td>
          <td>Comma-separated list of hexadecimal colors (without any # prefix). Return only found assets that contain
              the
              specified colors. String.
              Example:<br />
              <inlineCode class="spectrum-Body--sizeS">search_parameters[filters][colors]=ff0000,00ff00,0000ff</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[gallery_id]
          </td>
          <td>Returns members of the specified Fotolia gallery, which must be public. Note this requires access to a
              Fotolia
              website user account. String.
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>search_parameters[filters][copy_space]
          </td>
          <td>Image copy space. Value <inlineCode class="spectrum-Body--sizeS">all</inlineCode> returns all the images (equivalent to not having the filter in
              the
              query); value <inlineCode class="spectrum-Body--sizeS">1</inlineCode> filters for images that have copy space. String.
              <inlineCode class="spectrum-Body--sizeS">all | 1</inlineCode>
          </td>
      </tr>
      <tr class="spectrum-Table-row css-us97lb-Tr">
          <td>result_columns[]
          </td>
          <td>
              <p class="spectrum-Body--sizeS">Specific fields you wish to include in the search result, excluding all other fields. Array[]. For a
                  detailed
                  description of each field, see <a href="#responses">Responses</a>, below.</p>
              <p class="spectrum-Body--sizeS"><strong>Tip:</strong> To combine result columns, use this syntax:
                  <inlineCode class="spectrum-Body--sizeS">result_columns[]=is_licensed&result_columns[]=creation_date</inlineCode>
              </p>
              <p class="spectrum-Body--sizeS"><strong>Note 1:</strong> Fields marked with <strong>\*</strong> are returned by default, but if the
                  <inlineCode class="spectrum-Body--sizeS">result_columns[]</inlineCode> command is present, the default fields will not be returned unless
                  explicitly
                  included. <br /> <strong>Note 2:</strong> <inlineCode class="spectrum-Body--sizeS">is_licensed</inlineCode> requires an authentication
                  header.
              </p>
              <p class="spectrum-Body--sizeS">
                  <inlineCode class="spectrum-Body--sizeS">\*nb_results</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*id</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*title</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*creator_name</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">\*creator_id</inlineCode> <inlineCode class="spectrum-Body--sizeS">country_name</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*width</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*height</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">\*thumbnail_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*thumbnail_html_tag</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*thumbnail_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">\*thumbnail_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_110_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_110_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">thumbnail_110_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_160_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_160_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">thumbnail_160_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_220_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_220_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">thumbnail_220_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_240_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_240_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">thumbnail_240_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_500_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_500_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">thumbnail_500_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_1000_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">thumbnail_1000_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">thumbnail_1000_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*media_type_id</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*category</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">\*category_hierarchy</inlineCode> <inlineCode class="spectrum-Body--sizeS">nb_views</inlineCode> <inlineCode class="spectrum-Body--sizeS">nb_downloads</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">creation_date</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">keywords</inlineCode> <inlineCode class="spectrum-Body--sizeS">has_releases</inlineCode> <inlineCode class="spectrum-Body--sizeS">comp_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">comp_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">comp_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">is_licensed</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*vector_type</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">\*content_type</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">framerate</inlineCode> <inlineCode class="spectrum-Body--sizeS">duration</inlineCode> <inlineCode class="spectrum-Body--sizeS">comps</inlineCode> <inlineCode class="spectrum-Body--sizeS">details_url</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">template_type_id</inlineCode> <inlineCode class="spectrum-Body--sizeS">template_category_ids</inlineCode> <inlineCode class="spectrum-Body--sizeS">marketing_text</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">description</inlineCode> <inlineCode class="spectrum-Body--sizeS">size_bytes</inlineCode> <inlineCode class="spectrum-Body--sizeS">\*premium_level_id</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">is_premium</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">licenses</inlineCode> <inlineCode class="spectrum-Body--sizeS">video_preview_url</inlineCode> <inlineCode class="spectrum-Body--sizeS">video_preview_width</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">video_preview_height</inlineCode> <inlineCode class="spectrum-Body--sizeS">video_preview_content_length</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">video_preview_content_type</inlineCode> <inlineCode class="spectrum-Body--sizeS">video_small_preview_url</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">video_small_preview_width</inlineCode> <inlineCode class="spectrum-Body--sizeS">video_small_preview_height</inlineCode>
                  <inlineCode class="spectrum-Body--sizeS">video_small_preview_content_length</inlineCode> <inlineCode class="spectrum-Body--sizeS">video_small_preview_content_type</inlineCode>
              </p>
          </td>
      </tr>
    </tbody>
</table>
