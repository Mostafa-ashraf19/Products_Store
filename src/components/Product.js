import React, {Component} from 'react'
import {connect} from 'react-redux';

class Product extends Component {
  handleDelete = (e, sku, id) => {
    const checked = e.target.checked;
    this.setState({checked: checked},
       ()=> this.props.handleChecked(sku,id,checked));
  };
  state = {
    checked: false,
  };

  formatProductSpecs = (product) => {
    switch (product.type) {
      case 'DVD':
        return `Size: ${product.typeSpecs}MB`;
      case 'BOOK':
        return `Weight: ${product.typeSpecs}KG`;
      case 'Furniture':
        const {H, W, L} = product.typeSpecs;
        return `Dimension: ${H}x${W}x${L}`;
      default:
        return '';  
    }
  };

  render() {
    const {product} = this.props;
    const {checked} = this.state
    return (
        <div className = 'product'>

        <input className='delete-checkbox' type = 'checkbox' checked = {checked} onChange =
         {
           (e) => this.handleDelete(e, product.sku, product.id)
         } />
                
        <div className='content'>
        <h3>{product.sku}</h3>
        <h4>{product.name}</h4>
        <p>{`${product.price} $`}</p>
        <p><span>{this.formatProductSpecs(product)}</span></p>
        </div>
            </div>)
  }
}

function mapStateToProps(state, propsPassed) {
  const product = state.products[propsPassed.id];
  return {
    product,
  }
}

export default connect(mapStateToProps)(Product)