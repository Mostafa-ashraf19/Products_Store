import {getInitialProducts} from '../utils/_DATA'
import {hideLoading, showLoading} from 'react-redux-loading-bar'

import {_getProucts} from './products'

export function asyncGetProducts() {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialProducts().then(({products}) => {
      dispatch(_getProucts(products))
      dispatch(hideLoading());
    });
  }
}