import React, { Component } from 'react'



export default class Cart extends Component {
    state = {
    productName : "superman",
	productPrice : 0

}

addtoCart=()=> {
    console.log("testing")
    const addCart = {
        method :POST,
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
            productName : this.state.productName,
            productPrice : this.state.productPrice})
        }
        fetch('/cart',addCart)
    }



    render() {
        return (
            <div>
                <button className="addToCart" onClick={""}>Add to Cart</button>
            </div>
        )
    }
}
