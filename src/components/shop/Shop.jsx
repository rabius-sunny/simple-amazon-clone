import React, { useState } from 'react'
import fakedata from '../../fakeData'
import './shop.css'
import Product from '../products/Product'
import Cart from '../cart/Cart'

function Shop() {
    const first10data = fakedata.slice(0, 10)
    const [products] = useState(first10data)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        handleAddProduct={handleAddProduct}
                    />)
                }
            </div>
            <div className="cart">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop
