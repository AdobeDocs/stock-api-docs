\<!--
Include file with API responses for Search and Files API
--\>

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

| **Parameter**        | **Description** |
|----------------------|-----------------|
| nb_results           | Total number of found assets in the search result. Integer. |
| id                   | Asset's unique identifier. Integer. |
| title                | Asset's title. String. |
| creator_id           | Unique identifier for the asset's creator. Integer. |
| creator_name         | Asset creator's name. String. |
| country_name         | Country in which the asset's creator lives. String. |
| thumbnail_url        | URL for the default-sized asset thumbnail. You can use this to display the thumbnail on your page using your preferred display method. Alternatively, use `thumbnail_html_tag`. String. |
| thumbnail_html_tag   | HTML \<img\> tag that you can use to display the default asset thumbnail. This is a convenience for displaying the thumbnail and references the `thumbnail_url`. String. Example: `"thumbnail_html_tag": "<img src='https://thumbnail-url' alt='German Shepherd Dog Sticking Head Out Driving Car Window' />"` |
| thumbnail_width      | Thumbnail's width in pixels. Integer. |
| thumbnail_height     | Thumbnail's height in pixels. Integer. |
| thumbnail_*_width    | Width for the thumbnail of the requested size, where * is the thumbnail size in pixels. Float. For example: `"thumbnail_160_width": 200` |
| thumbnail_*_height   | Height for the thumbnail of the requested size, where * is the thumbnail size in pixels. Integer. |
| thumbnail_*_url      | URL for the requested thumbnail size, where * is the thumbnail size in pixels. You can use this to display the thumbnail on your page using your preferred display method. Alternatively, use `thumbnail_*_html_tag`. String. |
| thumbnail_*_html_tag | HTML \<img\> tag that you can use to display the thumbnail of the requested size, where * is the thumbnail size in pixels. This is a convenience for displaying the thumbnail and references the `thumbnail_*_url`. String. |
| width                | Width in pixels of the full-sized original asset. Integer. |
| height               | Height in pixels of the full-sized original asset. Integer. |
| is_licensed          | The Adobe Stock licensing state for the asset. String. Values and meaning: * `Standard`: License for the full-resolution asset * `Extended`: Extended license * `Video_HD`: Video HD license * `Video_4K`: Video 4K license * `Standard_M`: License for a medium-size asset approximately 1600x1200 pixels * `""` *(empty string)*: No license applies |
| comp_url             | URL to the watermarked version of the asset. String. |
| comp_width           | Width in pixels of the asset's complementary (unlicensed) image. Integer. |
| comp_height          | Height in pixels of the asset's complementary (unlicensed) image. Integer. |
| category             | JSON structure with information about the category assigned to the asset. `"category": { "id": 0000,"name":"..." }` For example: `"category": { "id": 47, "name": "Dogs"}` |
| category\{*id*\}     | Identifier for the category assigned to the asset. Integer. |
| category\{*name*\}   | Localized name of the asset's category. String. |
| keywords             | List of localized keywords for the asset. Array. |
| media_type_id        | Type of the asset. Integer. * `1`: Photos * `2`: Illustrations * `3`: Vectors * `4`: Videos * `6`: 3D * `7`: Templates * `8`: Premium * `9`: Audio |
| vector_type          | If the asset is a vector, this indicates whether it is an SVG or an AI/EPS asset. String. Values and meanings: * `svg`: SVG file * `zip`: AI/EPS file |
| content-type         | Mime type of the asset's content. String. For example: `"content_type": "image/jpeg"` |
| framerate            | Frame rate for the asset if it is a video. Float. |
| duration             | Duration in milliseconds of the asset if it is a video. Integer. |
| comps                | JSON object that contains one or more of the following properties for complementary assets if applicable: Standard, Video_HD, or Video_4K. The properties contain width, height, comp URL. See [Example returned comps values](#example-returned-comps-values). |
| details_url          | URL to the Adobe Stock details page for the asset. If you pass the Authorization header with the call, Adobe Stock generates an SSO jump URL. String. |
| 3d_type_id           | The ID of the 3D type, if the return asset is 3D. Values and meanings: * 1 - Models * 2 - Lights * 3 - Materials |
| template_type_id     | The ID of the template type, if the returned asset is a template. Integer. Values and meanings: * `1`: PSDT * `2`: AIT * `3`: INDT * `4`: PPRO Motion Graphics Template * `5`: AE Motion Graphics Template |
| marketing_text       | Marketing text for the template in [Markdown format](http://daringfireball.net/projects/markdown/), if the found asset is a template. String. |
| description          | Description text for the template in [Markdown format](http://daringfireball.net/projects/markdown/), if the found asset is a template. String. |
| size_bytes           | Size of the template file in bytes, if the found asset is a template. Integer. |
| premium_level_id     | Asset's premium (pricing) level. Integer. * `0`: Core/standard * `1`: Free * `2`: Premium level 1 * `3`: Premium level 2 * `4`: Premium level 3 |
| is_loop              | True if the asset is a looping video or audio clip. Boolean. |
| is_transparent       | True for PNG assets that have transparency. Boolean. |
| is_gentech           | True if asset was generated by AI. Boolean. |
| icon_option          | icon type (icon_sheet, single_icon or null) |

\<a id="example-returned-comps-values"\>\</a\>

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
