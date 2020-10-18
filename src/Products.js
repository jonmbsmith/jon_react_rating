// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Product from './Product'
import './Product.css'

class Products extends Component {
  constructor (props) {
    super(props)
    this.products = this.getProducts()
  }

  getProducts () {
    return [
      {
        imageFile: './Wired-and-Wireless-Backups-720.jpg',
        productName: 'Wired and Wireless Backups',
        releasedDate: 'October 18, 2020',
        description: 'Wireless solutions in the modern office #0',
        rating: 4,
        numericRating: 4
      },
      {
        imageFile: './Near-Field Storage Solutions-720.jpg',
        productName: 'Near Field - Storage Solutions',
        releasedDate: 'August 15, 2020',
        description: 'Wireless solutions by the modern office #1',
        rating: 2,
        numericRating: 2
      },
      {
        imageFile: './Hybrid Lily Containerization-720.jpg',
        productName: 'Lily Containerization - Development & Deployment',
        releasedDate: 'August 09, 2020',
        description: 'Wireless solutions by the modern office #2',
        rating: 4,
        numericRating: 2
      },
      {
        imageFile: './Modern-Debugging-Tools-720.jpg',
        productName: 'Debugging Tools in Action',
        releasedDate: 'August 08, 2020',
        description: 'Wireless solutions in the modern office #3',
        rating: 3,
        numericRating: 2
      },
      {
        imageFile: './Contemplating Architecture-720.jpg',
        productName: 'Code cleaning - Review stage',
        releasedDate: 'August 07, 2020',
        description: 'Wireless solutions in the modern office #4',
        rating: 4,
        numericRating: 2
      },
      {
        imageFile: './Clean-Coding-720.jpg',
        productName: 'Code cleaning - Paused',
        releasedDate: 'August 05, 2020',
        description: 'Wireless solutions in the modern office #5',
        rating: 2,
        numericRating: 2
      },
      {
        imageFile: './Go-Wireless-720.jpg',
        productName: 'Bluetooth headphones - Connecting',
        releasedDate: 'July 15, 2020',
        description: 'Wireless solutions in the modern office #6',
        rating: 3,
        numericRating: 2
      }]
  }

  render () {
    const listProducts = this.products.map((product) =>
      <Product key={product.productName} data={product} />
    )

    return (
      <div>
        <ul className='Product-list'>{listProducts}</ul>
      </div>
    )
  }
}

export default Products
