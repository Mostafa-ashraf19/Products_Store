import {hideLoading, showLoading} from 'react-redux-loading-bar'

import {getInitialProducts} from '../utils/_DATA'
import {formattingReceivedProduct} from '../utils/helprs'

import {_getProucts} from './products'

export function asyncGetProducts() {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialProducts().then((products) => {
      dispatch(_getProucts(formattingReceivedProduct(products.data.products)));
      dispatch(hideLoading());
    });
  }
}