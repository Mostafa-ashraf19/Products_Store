import React, {Component} from 'react'
import {connect} from 'react-redux'
import Product from './Product'

class ProductsList extends Component {
  render() {
    const {productsIDs} = this.props;
    return (productsIDs.map((id) => <Product key={id} handleChecked={this.props.handleChecked} id = {id} />)
    )
  }
}

function mapStateToProps(state) {
  const productsIDs = Object.keys(state.products)
  return {
    productsIDs,
  }
}

export default connect(mapStateToProps)(ProductsList)