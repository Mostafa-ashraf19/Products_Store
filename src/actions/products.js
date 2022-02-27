import {hideLoading, showLoading} from 'react-redux-loading-bar'
import {formatNewProduct} from '../utils/helprs'

import {_saveProduct, RemoveProducts} from '../utils/_DATA'


export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'

// Action Creators
export function _addProduct(product) {
  return {
    type: ADD_PRODUCT, product,
  }
}

function removeProducts(products,dispatch) {
  products.forEach((product)=>{
    dispatch(_removeProduct(product.sku,product.id));
  });
}
export function _removeProduct(sku,id) {
  return {
    type: REMOVE_PRODUCT, sku,id
  }
}

export function _getProucts(products) {
  return {
    type: GET_PRODUCTS, products
  }
}

// Async Action Creators.
export function asyncHandleDeleteProducts(products) {
  return (dispatch) => {
    dispatch(showLoading());
  
    let targets = products.map((product)=> `${product.sku}&${product.type}`)
    RemoveProducts(targets).then((ev) => {
      
        removeProducts(products,dispatch);
        dispatch(hideLoading());
      }).catch((e)=> {
        console.log('error. ', e)
      })
  }
}

export function asyncHandleNewProduct(product) {
  return (dispatch) => {

    dispatch(showLoading());
    _saveProduct(product)
        .then(({data}) => {
          dispatch(_addProduct(formatNewProduct(data.product)));
        })
        .then(() => {
          dispatch(hideLoading());
        })
  }
}