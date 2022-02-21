import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ProductsList from './ProductsList'
import { Link} from 'react-router-dom';
import {asyncHandleDeleteProducts} from '../actions/products'
import LoadingBar from 'react-redux-loading-bar'

class Gallery extends Component {
state = {
    skus: [],
    ids: []
}
handleChecked  = (sku,id,checked) => {
this.setState((currentstate)=>{
    let {skus,ids} = currentstate;
    if(checked) {
        skus.push(sku)
        ids.push(id)
    }
    else{
        skus =  skus.filter((s) => s!==sku)
        ids = ids.filter((i) => i !== id)
    }
    console.log('skus new is: ', skus)
    console.log('ids new is: ', ids)

    return {skus,ids}
});

}
handleDeleteclick = (e) => {
    const {skus,ids} = this.state
    const {dispatch} = this.props
    dispatch(asyncHandleDeleteProducts(skus,ids));
}
render() {
    const {skus} = this.state
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
                        <Link to='/add-product' >
                            <button className='btn add-btn'>ADDz</button> 
                        </Link>
                            <button 
                            id='delete-product-btn'
                            className='btn del-btn' 
                            disabled = {skus.length === 0} 
                            onClick={this.handleDeleteclick}>MASS DELETE</button>
                        
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