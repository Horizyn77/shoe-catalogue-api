# Shoe Catalogue API

URL		 | HTTP VERB  | Description
---------|------------|------
`/api/shoes` | `GET` | Get a list of all shoes
`/api/shoes/brand/:brandname` | `GET` | Filter shoes by brand
`/api/shoes/size/:size`| `GET` | Filter shoes by size
`/api/shoes/colour/:colour`	| `GET` | Filter shoes by colour
`/api/shoes/brand/:brandname/size/:size` | `GET` | Filter shoes by brand and size
`/api/shoes/brand/:brandname/colour/:colour` | `GET` | Filter shoes by brand and colour
`/api/shoes/colour/:colour/size/:size` | `GET` | Filter shoes by colour and size
`/api/shoes/brand/:brandname/colour/:colour/size/:size`	| `GET` | Filter shoes by brand, colour and size
`/api/shoes/sold/:id` | `POST` | Update shoe stock of shoe
`/api/shoes` | `POST` | Add a new shoe to the database

## Table of contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)

## Overview 📝<a name="overview"></a>

The Shoe Catalogue API is an api with a list of shoes that can be returned, filtered, added to, and the stock of a shoe updated

## Features 🌟<a name="features"></a>

### Get a list of all shoes

Make a GET request to this url, which returns a list of shoes
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes
```

### Get a list of filtered shoes by brand, size, colour or a combination of those

Make a GET request to the following urls, which returns a filtered list of shoes

Filter shoes by brand
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/brand/:brandname
```
Filter shoes by size
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/size/:size`
```
Filter shoes by colour
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/colour/:colour
```
Filter shoes by brand and size
```
https://shoe-catalogue-api-au25.onrender.com//api/shoes/brand/:brandname/size/:size
```
Filter shoes by brand and colour
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/brand/:brandname/colour/:colour
```
Filter shoes by colour and size
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/colour/:colour/size/:size
```
Filter shoes by brand, size and colour 
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/brand/:brandname/colour/:colour/size/:size
```
### Update shoe stock of a particular shoe using the id when checking out

Make a post request to this url passing in the id of the shoe
```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/sold/:id
```

### Add a new shoe to the list of shoes

Make a post request to this url with an object containing shoe data

```
https://shoe-catalogue-api-au25.onrender.com/api/shoes/
```

Example data object:
```
{
    name: "Castles",
    brand: "CALL IT SPRING",
    colour: "Black",
    size: 7,
    price: 1199,
    in_stock: 5,
    img_src: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3385827/original.jpg"
}
```

## Technologies Used 💻<a name="technologies-used"></a>

#### Node.js/Express

Used for setting up a server and handling requests/responses

#### PostgreSQL
Used for providing database and crud functionality

#### Postman 
Used to test API endpoints

#### CORS package
Used to enable cors for the API
