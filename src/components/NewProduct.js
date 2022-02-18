import React, {Component, Fragment} from 'react'
import {Link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux'
import {asyncHandleNewProduct} from '../actions/products'
import LoadingBar from 'react-redux-loading-bar'


class NewProduct extends Component {

state = {
    sku:'',
    name:'',
    price:'',
    productType:'',
    size:'',
    weight:'',
    height:'',
    width:'',
    length:'',
    toHome:false
}

handleSwitcher =
    (type) => {

        const {size,
            weight,
            height,
            width,
            length} = this.state

    switch (type) {
        case 'DVD':

        return (
                <Fragment>
                    <label>Size</label>
                    <input type = 'number' id='size' value={size} onChange={this.handleSizeChange} />
                    <h3>Please, provide size in MB.</h3>
                </Fragment>
            );

        case 'BOOK':

            return (
                <Fragment>
                    <label>Weight</label>
                    <input type = 'number' id='weight' value={weight} onChange={this.handleWeightChange}/>
                    <h3>Please, provide weight in Kg.</h3>
                </Fragment>
            );

        case 'Furniture':
        return (
            <Fragment>

                <label>Height</label>
                <input type = 'number' id='height' value={height} onChange={this.handleHeightChange} />
                
                <label>Width</label>
                <input type = 'number' id='width' value={width} onChange={this.handleWidthChange} />

                <label>Length</label>
                <input type = 'number' id='lenght' value={length} onChange={this.handleLengthChange}/>

                <h3>Please, provide dimensions.</h3>
            </Fragment>
            );
        default:
            return '';          
    }
}

handleSizeChange = (e) => {
    e.preventDefault();
    const size = e.target.value
    this.setState({size});
}

handleWeightChange = (e) => {
    e.preventDefault();
    const weight = e.target.value
    this.setState({weight});
}

handleHeightChange = (e) => {
    e.preventDefault();
    const height = e.target.value
    this.setState({height});
}

handleWidthChange = (e) => {
    e.preventDefault();
    const width = e.target.value
    this.setState({width});
}

handleLengthChange = (e) => {
    e.preventDefault();
    const length = e.target.value
    this.setState({length});
}

handleSKUChange = (e) => {
    e.preventDefault();
    const sku = e.target.value
    this.setState({sku});
}

handleNameChange = (e) => {
    e.preventDefault();
    const name = e.target.value
    this.setState({name});
}

handlePriceChange = (e) => {
    e.preventDefault();
    const price = e.target.value
    this.setState({price});
}

handleSelectchanges = (e)=>{
    const value = e.target.value;
    this.setState({productType:value},
        ()=>this.setState({
            size:'',
            weight:'',
            height:'',
            width:'',
            length:''
        }))
}

handleSubmit = (e) => {
    e.preventDefault()
    const {dispatch} = this.props
    const {
        sku,
        name,
        price,
        productType,
        size,
        weight,
        height,
        width,
        length,
    } = this.state

    // if(sku.length===0 || name.length===0||price===0||productType===''||)

    dispatch(asyncHandleNewProduct({
            sku,
            name,
            price,
            type:productType,
            size,
            weight,
            height,
            width,
            length
    }))

    this.setState(() => ({
        sku:'',
        name:'',
        price:'',
        productType:'',
        size:'',
        weight:'',
        height:'',
        width:'',
        length:'',
        toHome:sku ? true:false 
      }));

}
render() {

    const {sku,
    name,
    price,toHome} = this.state

    if(toHome){
        return <Navigate to='/'/>
    }

    return (
    <Fragment>

    <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>
    <div>
        <div className='info'>
            <div className='slang'>Products List</div>
            <div className = 'btns'>
                <button 
                className = 'btn add-btn' 
                form="product_form"
                type='submit'>SAVE</button> 
            <Link to = '/'>
            <button className ='btn del-btn' >CANCEL</button>
            </Link>
            </div>
        </div>


        <div className='new-product'>
        
        <form onSubmit={this.handleSubmit} id="product_form">
            <span className='login-input'>
            <label>SKU</label>
            <input type='text' id='sku' name='sku' value={sku} onChange={this.handleSKUChange}/>

            </span>
            
            <span className='login-input'>
            <label>Name</label>
            <input type = 'text' id='name' name='name' value={name} onChange={this.handleNameChange}/>
            </span>

            <span className='login-input'>
            <label>Price</label>
            <input type = 'number' id='price' name='price' value={price} onChange={this.handlePriceChange}/>
            </span>
            
            <span className='login-input'>
            <label>Type Switcher</label>
            <select id='productType' name='type' onChange={this.handleSelectchanges}>
                <option value='none'>Type Switcher</option>
                <option value='DVD'>DVD-disc</option>
                <option value='BOOK'>Book</option>
                <option value='Furniture'>Furniture</option>
            </select>
            </span>

            <span className='login-input'>
                {
                    this.handleSwitcher(this.state.productType)
                }
            </span>
            
        </form>
    </div>
        
    </div>
    </Fragment>
    )
    }
}

export default  connect()(NewProduct)
