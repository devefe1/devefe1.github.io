import React, { Component } from 'react'


export default class Cart extends Component {
    state = {
    productName : "",
	productPrice : 6

}

componentDidMount

addtoCart=()=> {
    console.log("testing")
    const addCart = {
        method :"POST",
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
                <button className="addToCart" onClick={this.addtoCart}>Add to Cart + $10</button>
            </div>
        )
    }
}
