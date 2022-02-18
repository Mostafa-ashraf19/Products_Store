import '../index.css'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {asyncGetProducts} from '../actions/shared'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NewProduct from './NewProduct'
import Gallery from './ProductGallery'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(asyncGetProducts())
  }
  render() {
    return (
      <div>
      {/* <div className = 'App'> */}

        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Gallery />} />
            <Route exact path='/add-product' element={<NewProduct />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect()(App);
