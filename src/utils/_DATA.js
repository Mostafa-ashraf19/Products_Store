import axios from 'axios'

// const MAIN_URL = 'http://localhost/store-test-assignment-backend'
const MAIN_URL = 'https://assignment-scandiweb-mostafaashraf.000webhostapp.com'

const GET_PRODUCTS_URL = MAIN_URL + '/apis/read.php';
const REMOVE_PRODUCT_URL = MAIN_URL + '/apis/delete.php';
const ADD_NEW_PRODUCT_URL = MAIN_URL + '/apis/create.php';


export const getInitialProducts =
    async () => {
  // await is redundant here.
  return axios.get(GET_PRODUCTS_URL);
}

export const RemoveProduct =
  //   async (sku) => {
  // return axios({
  //   method: 'DELETE',
  //   url: REMOVE_PRODUCT_URL,
  //   headers: {'Content-Type': 'application/json'},
  //   data: {sku}
  // });

  async (sku) => {
    return axios({
      method: 'GET',
      url: REMOVE_PRODUCT_URL,
      headers: {'Content-Type': 'application/json'},
      data: {sku}
    });

  // async (sku) => {
  //   return fetch(REMOVE_PRODUCT_URL,{
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({sku})
  //   })
}

export function _saveProduct(product) {

  const {sku, name, price, type, length, width, height, weight, size} = product;

  let specs = type === 'Furniture' ? `${height},${width},${length}` :
                                     type === 'DVD' ? `${size}` : `${weight}`;

  return axios({
    method: 'POST',
    url: ADD_NEW_PRODUCT_URL,
    headers: {
    'Content-Type': 'application/json',
  },
    data: {sku, name, price, type, specs}
  });
}


/*

curl -X POST -H "Content-Type: application/json" -d 
'{"sku":"mddk4", "name":"World War I", "price":20, "type": "BOOK", "specs":"45"}' 
http://localhost/store-test-assignment-backend/apis/create.php


INSERT INTO `products`(`sku`, `name`, `price`, `type`, `specs`) VALUES ("JVC166123","Word war I",55,"BOOK","20");

*/

