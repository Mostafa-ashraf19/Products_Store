# Products Store

React and Redux web app UI that lets a user add products or massive deleting for products.

A user is can add three main products types like `DVD`, `BOOK` and  `Furniture`. The application support making massive delete for products.

The `_DATA.js` file represents a Rest connection with a backend that's written in PHP and MySQL database.

[Backend Repository](https://bitbucket.org/mostafa-ashraf19/store-test-assignment-backend/src/master/)

## Get Started

To get started:

* install all project dependencies with `npm install`
* start the app with `npm start`
* access the app on http://localhost:3000/

## Preview

1. **Main Page** 
   
   <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/Scandiweb-Fullstack-Assignment/main/screenshots/mainpage.png" alt='Main'/>
      
2. **Add Product**

   <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/Scandiweb-Fullstack-Assignment/main/screenshots/addproduct.png" alt='Add' /> 


## Data

There are two types of products stored in our database:

* DVD Product
* Book Product
* Furniture Product

### Products

Products include:

| Attribute    | Type             |
|-----------------|------------------|
| sku                | String           |
| name          | String           |
| price  | number           | 
| type | string |
| specs      | size or weigth or {width, length, heigth}         |

The code will talk to the database via 3 methods:

* `getInitialProducts()`
* `_saveProduct(product)`
* `RemoveProducts(skus)`

1) `getInitialProducts()` Method

*Description*: Get all of the existing products from the database with no paginations sorted by id.

*Return Value*: Object for all avaiable products.

2) `RemoveProducts(skus)` Method

*Description*: Remove products that's user selected.

*Return Value*: Status passed.

3) `_saveProduct(product)` Method

*Description*: Save the product to database.
*Parameters*:  product will saved
