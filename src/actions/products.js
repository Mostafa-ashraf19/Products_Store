import {hideLoading, showLoading} from 'react-redux-loading-bar'

import {_saveProduct, RemoveProduct} from '../utils/_DATA'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'

// Action Creators
export function _addProduct(product) {
  return {
    type: ADD_PRODUCT, product,
  }
}

export function _removeProduct(sku) {
  return {
    type: REMOVE_PRODUCT, sku,
  }
}

export function _getProucts(products) {
  return {
    type: GET_PRODUCTS, products
  }
}

// Async Action Creators.
export function asyncHandleDeleteProduct(sku) {
  return (dispatch) => {
    dispatch(showLoading());
    RemoveProduct(sku).then((e) => {
      dispatch(_removeProduct(sku));
      dispatch(hideLoading());
    })
  }
}

export function asyncHandleNewProduct(product) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveProduct(product)
        .then((product) => {
          dispatch(_addProduct(product));
          console.log('Hi from new product', product)
        })
        .then(() => {
          dispatch(hideLoading());
        })
  }
}