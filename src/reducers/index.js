import {loadingBarReducer} from 'react-redux-loading-bar'

import {combineReducers} from 'redux'

import products from './products'

export default combineReducers({products, loadingBar: loadingBarReducer});