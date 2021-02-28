import React from 'react'
import './product.css'

function Product(props) {

    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller} </small></p>
                <p>$ {price} </p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className="cardBtn"> <i class="fas fa-cart-arrow-down"></i> add to cart</button>
            </div>
        </div>
    )
}

export default Product
