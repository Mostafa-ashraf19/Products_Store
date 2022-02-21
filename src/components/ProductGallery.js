import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ProductsList from './ProductsList'
import { Link} from 'react-router-dom';
import {asyncHandleDeleteProduct} from '../actions/products'
import LoadingBar from 'react-redux-loading-bar'

class Gallery extends Component {
state = {
    sku: '',
    id: ''
}
handleChecked  = (sku,id) => {
this.setState({sku:sku,id:id});

}
handleDeleteclick = (e) => {
    const {sku,id} = this.state
    const {dispatch} = this.props

    if (sku.length !== 0) {
        dispatch(asyncHandleDeleteProduct(sku,id));
    }
}
render() {
    const {sku} = this.state
    return (
        <Fragment>
        <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>
            {
                this.props.loadding === true? '':
                <Fragment>
                    <div className='info'>
                        <div className='slang'>Products List</div>
                        <div className='btns'>
                        <Link to='/add-product' >
                            <button className='btn add-btn'>Add</button> 
                        </Link>
                        <button 
                        id='delete-product-btn'
                        className='btn del-btn' 
                        disabled = {sku === ''} 
                        onClick={this.handleDeleteclick}>Mass Delete</button>
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
    return {
      loadding: Object.keys(state.products).length === 0 
    }
  }

export default connect(mapsStateToProps)(Gallery)