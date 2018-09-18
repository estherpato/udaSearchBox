# udaSearchBox

Search component of Urban Data Analytics. It gets the latitude and altitude from :
- Addresses (with Algolia Places)
- Cadastre (with its own API (UDA API))

You can send the coordinates to other UDA's components or external components.

# Getting Started with Uda Search Box

## Prerrequisites

If you want to use udaSearchBox you need to have an user and a password from pulse, the urban data analytic's tool.

## Install udaSearchBox

To start with udaSearchBox, first, you have to install the npm package.

```sh
$ npm install --¿Uda Search Box
```

# Props from UDA

The props you can configurate are the following ones:

| Prop | type | description |
| ------ | ------ | ------ |
| placeholderPlaces & placeholderCadastre | text | The text that you want to see in the placeholder of places/cadastre |  
| placesOn & cadastreOn| boolean | Set the "presence" of the search bar. If it's true, the user will be able to use it If it's false it won't be shown on the web They can both be true or set only one If both are false, the "places" bar will be display |
| onSubmit | null | For send the coordinates info. You can modify it later|
| configPlaces | object | Object with Algolias Places's props. e  |
| configCadastre | object | Object with Cadastre props. We'll shot it after configPlaces's table |

- configPlaces props --> You can also find it in the official documentation of algolia places: 
https://community.algolia.com/places/documentation.html 
- configCadastreprops --> in the object you can find:

| Prop | type | description |
| ------ | ------ | ------ |
| onChange | boolean | False by default |

# How to use it

**nada porque no hay npm todavía**

# Interesting Data

- UdaSearch box is made with inline Styling, however, to modify default styles from algolia we've had to use CSS3. 
- Cadastre has associated a search button, when you click on it, it will give you the coordinates. However, Places hasn't that button, and will submit the info to get the coordinates by pressing the enter key.
-Coordinates obtained by search can be sended to other uda or external components.
-Call to UDA api was made with axios.get

### Tech

Uda Data Box uses a number of open source projects to work properly:
* [ ReactJS ]
* [ Algolia Places ]
* [ Axios ]

# Authors
- **Esther Pato** - https://github.com/estherpato 
- **Valeria Roldán** - https://github.com/valromo
- **Loreto Vaquero** - https://github.com/VaqueroFontenla
- **Laura Vargas** - https://github.com/lauraVzarco# Uda Search Box