import {hideLoading, showLoading} from 'react-redux-loading-bar'

import {_saveProduct, RemoveProducts} from '../utils/_DATA'
import {formatNewProduct, prepare_product} from '../utils/helprs'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'

// Action Creators
export function _addProduct(product) {
  return {
    type: ADD_PRODUCT, product,
  }
}

function removeProducts(ids, dispatch) {
  ids.forEach((id) => {
    dispatch(_removeProduct(id));
  });
} 

export function _removeProduct(id) {
  return {
    type: REMOVE_PRODUCT, id
  }
}

export function _getProucts(products) {
  return {
    type: GET_PRODUCTS, products
  }
}

// Async Action Creators.
export function asyncHandleDeleteProducts(skus,ids) {
  return (dispatch) => {
    dispatch(showLoading());
    RemoveProducts(skus)
        .then((ev) => {
          console.log('ev', ev.data);
          removeProducts(ids, dispatch);
          dispatch(hideLoading());
        })
        .catch((e) => {console.log('error. ', e)})
  }
}

export function asyncHandleNewProduct(product) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveProduct(prepare_product(product))
        .then(({data}) => {
          if(data.status !== 400) {
            dispatch(_addProduct(formatNewProduct(data.product)));
          }
        })
        .then(() => {
          dispatch(hideLoading());
        })
  }
}