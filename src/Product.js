import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import Rating from './Rating'
import './Product.css'

class Product extends Component {
  render () {
    return (
      <div>
        {this.props.data.description}
        <Media>
          <img
            width={240}
            height={180}
            className='mr-3'
            src={this.props.data.imageFile}
            alt='wireless in action'
          />
          <Media.Body>
            <p className='Product-name'>{this.props.data.productName} - {this.props.data.releasedDate}</p>
            <Rating rating={this.props.data.rating} numericRating={this.props.data.numericRating} />
          </Media.Body>
        </Media>
      </div>
    )
  }
}

export default Product
