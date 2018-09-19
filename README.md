# udaSearchBox

Search React component of Urban Data Analytics. It gets the latitude and altitude from :
- Addresses (with Algolia Places)
- Cadastre (with its own API (UDA API))

You can send the coordinates to other UDA's components or external components.

# Getting Started with Uda Search Box

## Prerrequisites

If you want to use udaSearchBox you need to have an user and a password from pulse, the urban data analytic's tool.

# Props from UDA

The props you can configurate are the following ones:

| Prop | type | description |
| ------ | ------ | ------ |
| placeholderPlaces | text (Required) | The text that you want to see in the placeholder of places |
| placeholderCadastre | text (Required) | The text that you want to see in the placeholder of cadastre |
| placesOn & cadastreOn| boolean (Required) | Set the "presence" of the search bar. If it's true, the user will be able to use it If it's false it won't be shown on the web. They can both be true or set only one If both are false, the "places" bar will be display |
| onSubmit | null (Required) | Callback who works with lat (latitude) and lng (longitude). It starts when you click the button search or press the enter key in Cadastre or when you click yhe suggestion or press enter key in places |
| configPlaces | object (Required) | Object with Algolias Places's props. |
| configCadastre | object (Required) | Object with Cadastre props. We'll shot it after configPlaces's table |

- configPlaces props --> You can also find it in the official documentation of algolia places: 
https://community.algolia.com/places/documentation.html 
the component don't use (at least in this moment): container, type, aroundLatLngViaIP, useDeviceLocation, computeQueryParams, clientOptions, autocompleteOptions, insideBoundingBox, and insidePolygon.
- configCadastreprops --> in the object you can find:

| Prop | type | description |
| ------ | ------ | ------ |
| onChange | boolean (Required) | Callback who works with lat (latitude) and lng (longitude). It works when you select a value of autocomplete list of algolia |

# Interesting Data

- UdaSearch box is made with inline Styling, however, to modify default styles from algolia we've had to use CSS3 as spreadsheet. 
- Cadastre has associated a search button, it will give you the coordinates. However, Places hasn't that button, and will submit the info to get the coordinates by pressing the enter key.
- Call to UDA api was made with axios

### Tech

Uda Data Box uses a number of open source projects to work properly:
* [ ReactJS ]
* [ ReactDOM ]
* [ Algolia Places ]
* [ Axios ]

# Authors
- **Esther Pato** - https://github.com/estherpato 
- **Valeria Roldán** - https://github.com/valromo
- **Loreto Vaquero** - https://github.com/VaqueroFontenla
- **Laura Vargas** - https://github.com/lauraVzarco# Uda Search Box
