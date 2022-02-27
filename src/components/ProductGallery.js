import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ProductsList from './ProductsList'
import { Link} from 'react-router-dom';
import {asyncHandleDeleteProducts} from '../actions/products'
import LoadingBar from 'react-redux-loading-bar'

class Gallery extends Component {
state = {
    products: [],
}
handleChecked  = (product,checked) => {
this.setState((currentstate)=>{
    let {products} = currentstate;
    if(checked) {
        products.push(product);
    }
    else{
        products =  products.filter((iter_product) => iter_product.sku !== product.sku)
    }
   
    console.log('products new is: ', products)

    return {products}
});

}
handleDeleteclick = (e) => {
    const {products} = this.state
    const {dispatch} = this.props
    dispatch(asyncHandleDeleteProducts(products));
}
render() {
    const {loadding}  = this.props
    return (
        <Fragment>
        <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>
            {
                loadding !== true && 
                <Fragment>
                    <div className='info'>
                        <div className='slang'>Products List</div>
                        <div className='btns'>
                            <button 
                            id='delete-product-btn'
                            className='btn del-btn'
                            onClick={this.handleDeleteclick}>MASS DELETE</button>
                            <Link to='/add-product' ><button className='btn add-btn'>ADD</button></Link>
                        </div>
                    </div>

                    <div className='gallery'>
                        <ProductsList handleChecked={this.handleChecked} />
                    </div>
                </Fragment>
        }   
        </Fragment>
    )
}
}

function mapsStateToProps(state) {
    const {loadingBar} = state;

    return {
      loadding: loadingBar.default === 1,
    //   keys_len:  Object.keys(state.products).length === 0
    }
  }

export default connect(mapsStateToProps)(Gallery)