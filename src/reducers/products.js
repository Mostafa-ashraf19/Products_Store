import {ADD_PRODUCT, GET_PRODUCTS, REMOVE_PRODUCT} from '../actions/products'


export default function products(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {...state, [action.product.sku]: action.product};

    case GET_PRODUCTS:
      return {...state, ...action.products};

    case REMOVE_PRODUCT:
    //   console.log('remove reducers', state);
    //   console.log('remove reducers actions', action);
      delete state[action.sku]  
      return {
        ...state
      };
    default:
      return state;
  }
}