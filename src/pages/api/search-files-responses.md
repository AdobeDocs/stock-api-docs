<!--
Include file with API responses for Search and Files API
-->

All responses are in a JSON array with this general structure:

```js
{
  "nb_results" : value,
  "files": [
     { details_for_first_file ...
          field_name: value,
          ...
     },
     { details_for_second_file   ...
          field_name: value,
          ...
     }
  ]
}
```

### Response fields

These are the fields returned either by default or by explicit use by the `result_columns[]` parameter.

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
        <td>nb_results
        </td>
        <td>Total number of found assets in the search result. Integer.
        </td>
    </tr>
    <tr>
        <td>id
        </td>
        <td>Asset's unique identifier. Integer.
        </td>
    </tr>
    <tr>
        <td>title
        </td>
        <td>Asset's title. String.
        </td>
    </tr>
    <tr>
        <td>creator_id
        </td>
        <td>Unique identifier for the asset's creator. Integer.
        </td>
    </tr>
    <tr>
        <td>creator_name
        </td>
        <td>Asset creator's name. String.
        </td>
    </tr>
    <tr>
        <td>country_name
        </td>
        <td>Country in which the asset's creator lives. String.
        </td>
    </tr>
    <tr>
        <td>thumbnail_url
        </td>
        <td>URL for the default-sized asset thumbnail. You can use this to display the thumbnail on your page using
            your preferred display method. Alternatively, use <inlineCode>thumbnail_html_tag</inlineCode>. String.
        </td>
    </tr>
    <tr>
        <td>thumbnail_html_tag
        </td>
        <td>HTML &lt;img&gt; tag that you can use to display the default asset thumbnail. This is a convenience for displaying the thumbnail and references the <inlineCode>thumbnail_url</inlineCode>. String.
            Example:
            <inlineCode>"thumbnail_html_tag": "&lt;img src='https://thumbnail-url' alt='German Shepherd Dog Sticking Head Out Driving Car Window' /&gt;"</inlineCode>
        </td>
    </tr>
    <tr>
        <td>thumbnail_width
        </td>
        <td>Thumbnail's width in pixels. Integer.
        </td>
    </tr>
    <tr>
        <td>thumbnail_height
        </td>
        <td>Thumbnail's height in pixels. Integer.
        </td>
    </tr>
    <tr>
        <td>thumbnail_*_width
        </td>
        <td>Width for the thumbnail of the requested size, where * is the thumbnail size in pixels. Float.
            For example:<br />
            <inlineCode>"thumbnail_160_width": 200</inlineCode>
        </td>
    </tr>
    <tr>
        <td>thumbnail_*_height
        </td>
        <td>Height for the thumbnail of the requested size, where * is the thumbnail size in pixels. Integer.
        </td>
    </tr>
    <tr>
        <td>thumbnail_*_url
        </td>
        <td>URL for the requested thumbnail size, where * is the thumbnail size in pixels. You can use this to
            display the thumbnail on your page using your preferred display method. Alternatively, use
            <inlineCode>thumbnail_*_html_tag</inlineCode>. String.
        </td>
    </tr>
    <tr>
        <td>thumbnail_*_html_tag
        </td>
        <td>HTML &lt;img&gt; tag that you can use to display the thumbnail of the requested size, where where * is
            the thumbnail size in pixels. This is a convenience for displaying the thumbnail and references the
            <inlineCode>thumbnail_*_url</inlineCode>. String.
        </td>
    </tr>
    <tr>
        <td>width
        </td>
        <td>Width in pixels of the full-sized original asset. Integer.
        </td>
    </tr>
    <tr>
        <td>height
        </td>
        <td>Height in pixels of the full-sized original asset. Integer.
        </td>
    </tr>
    <tr>
        <td>is_licensed
        </td>
        <td>The Adobe Stock licensing state for the asset. String. Values and meaning:<ul>
                <li><inlineCode>Standard</inlineCode>: License for the full-resolution asset</li>
                <li><inlineCode>Extended</inlineCode>: Extended license</li>
                <li><inlineCode>Video_HD</inlineCode>: Video HD license</li>
                <li><inlineCode>Video_4K</inlineCode>: Video 4K license</li>
                <li><inlineCode>Standard_M</inlineCode>: License for a medium-size asset approximately 1600x1200 pixels</li>
                <li><inlineCode>""</inlineCode> <em>(empty string)</em>: No license applies</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>comp_url
        </td>
        <td>URL to the watermarked version of the asset. String.
        </td>
    </tr>
    <tr>
        <td>comp_width
        </td>
        <td>Width in pixels of the asset's complementary (unlicensed) image. Integer.
        </td>
    </tr>
    <tr>
        <td>comp_height
        </td>
        <td>Height in pixels of the asset's complementary (unlicensed) image. Integer.
        </td>
    </tr>
    <tr>
        <td>category
        </td>
        <td>JSON structure with information about the category assigned to the asset.
            <inlineCode>&#34;category&#34;: &#123; &#34;id&#34;: 0000,&#34;name&#34;:&#34;...&#34; &#125;</inlineCode>
            <p>For example:</p>
            <inlineCode>&#34;category&#34;: &#123; &#34;id&#34;: 47, &#34;name&#34;: &#34;Dogs&#34;&#125;</inlineCode>
        </td>
    </tr>
    <tr>
        <td>category{<em>id</em>}
        </td>
        <td>Identifier for the category assigned to the asset. Integer.
        </td>
    </tr>
    <tr>
        <td>category{<em>name</em>}
        </td>
        <td>Localized name of the asset's category. String.
        </td>
    </tr>
    <tr>
        <td>keywords
        </td>
        <td>List of localized keywords for the asset. Array.
        </td>
    </tr>
    <tr>
        <td>media_type_id
        </td>
        <td>Type of the asset. Integer.
            <ul>
                <li><inlineCode>1</inlineCode>: Photos</li>
                <li><inlineCode>2</inlineCode>: Illustrations</li>
                <li><inlineCode>3</inlineCode>: Vectors</li>
                <li><inlineCode>4</inlineCode>: Videos</li>
                <li><inlineCode>6</inlineCode>: 3D</li>
                <li><inlineCode>7</inlineCode>: Templates</li>
                <li><inlineCode>8</inlineCode>: Premium</li>
                <li><inlineCode>9</inlineCode>: Audio</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>vector_type
        </td>
        <td>If the asset is a vector, this indicates whether it is an SVG or an AI/EPS asset. String.
            Values and meanings:
            <ul>
                <li><inlineCode>svg</inlineCode>: SVG file</li>
                <li><inlineCode>zip</inlineCode>: AI/EPS file</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>content-type
        </td>
        <td>Mime type of the asset's content. String. For example: 
            <inlineCode>"content_type": "image/jpeg"</inlineCode>
        </td>
    </tr>
    <tr>
        <td>framerate
        </td>
        <td>Frame rate for the asset if it is a video. Float.
        </td>
    </tr>
    <tr>
        <td>duration
        </td>
        <td>Duration in milliseconds of the asset if it is a video. Integer.
        </td>
    </tr>
    <tr>
        <td>comps
        </td>
        <td>JSON object that contains one or more of the following properties for complementary assets if
            applicable: Standard, Video_HD, or Video_4K. The properties contain width, height, comp URL. See
            <a href="#example-returned-comps-values"> Example returned comps values</a>.
        </td>
    </tr>
    <tr>
        <td>details_url
        </td>
        <td>URL to the Adobe Stock details page for the asset. If you pass the Authorization header with the call,
            Adobe Stock generates an SSO jump URL. String.
        </td>
    </tr>
    <tr>
        <td>3d_type_id
        </td>
        <td>The ID of the 3D type, if the return asset is 3D. Values and meanings:
            <ul>
                <li>1 - Models</li>
                <li>2 - Lights</li>
                <li>3 - Materials</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>template_type_id
        </td>
        <td>The ID of the template type, if the returned asset is a template. Integer. Values and meanings:
            <ul>
                <li><inlineCode>1</inlineCode>: PSDT</li>
                <li><inlineCode>2</inlineCode>: AIT</li>
                <li><inlineCode>3</inlineCode>: INDT</li>
                <li><inlineCode>4</inlineCode>: PPRO Motion Graphics Template</li>
                <li><inlineCode>5</inlineCode>: AE Motion Graphics Template</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>marketing_text
        </td>
        <td>Marketing text for the template in <a href="http://daringfireball.net/projects/markdown/">Markdown format</a>, if the found asset is a template. String.
        </td>
    </tr>
    <tr>
        <td>description
        </td>
        <td>Description text for the template in <a href="http://daringfireball.net/projects/markdown/">Markdown format</a>, if the found asset is a template. String.
        </td>
    </tr>
    <tr>
        <td>size_bytes
        </td>
        <td>Size of the template file in bytes, if the found asset is a template. Integer.
        </td>
    </tr>
    <tr>
        <td>premium_level_id
        </td>
        <td>Asset's premium (pricing) level. Integer.
            <ul>
                <li><inlineCode>0</inlineCode>: Core/standard</li>
                <li><inlineCode>1</inlineCode>: Free</li>
                <li><inlineCode>2</inlineCode>: Premium level 1</li>
                <li><inlineCode>3</inlineCode>: Premium level 2</li>
                <li><inlineCode>4</inlineCode>: Premium level 3</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>is_loop
        </td>
        <td>True if the asset is a looping video or audio clip. Boolean.
        </td>
    </tr>
    <tr>
        <td>is_transparent
        </td>
        <td>True for PNG assets that have transparency. Boolean.
        </td>
    </tr>
    <tr>
        <td>is_gentech
        </td>
        <td>True if asset was generated by AI. Boolean.
        </td>
    </tr>
    <tr>
        <td>icon_option
        </td>
        <td>icon type (icon_sheet, single_icon or null)
        </td>
    </tr>
    </tbody>
</table>

<a id="example-returned-comps-values"></a>

## Example returned comps values

Image:

```json
  "comps": {
    "Standard": {
      "url": "https://stock.adobe.io/Rest/Libraries/Watermarked/Download/76203302/1",
      "width": 1000,
      "height": 248
    }
  }
```

Vector:

```json
"comps": {
    "Standard": {
      "url": "https://stock.adobe.io/Rest/Libraries/Watermarked/Download/47788193/1",
      "width": 770,
      "height": 1000
    }
  }
```

Video that is available in 4K or HD:

```json
  "comps": {
    "Video_HD": {
      "url": "https://stock.adobe.io/Rest/Libraries/Watermarked/Download/106945684/3",
      "width": 1920,
      "height": 1080
    },
    "Video_4K": {
      "url": "https://stock.adobe.io/Rest/Libraries/Watermarked/Download/106945684/4",
      "width": 3840,
      "height": 2160
    }
  }
```

Video that is in HD only:

```json
  "comps": {
    "Video_HD": {
      "url": "https://stock.adobe.io/Rest/Libraries/Watermarked/Download/109410569/3",
      "width": 1920,
      "height": 1080
    }
  }
```
