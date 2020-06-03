import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartProducts: []
         }

         this.deletedMovies = this.deletedMovies.bind(this)
    }

    

    componentDidMount = async () => {
        try {
            const cart = await axios.get('/cart');
            this.setState({cartProducts: cart.data});
            console.log(cart.data)

       //catch errors     
        } catch (e) {
            console.log(e);
        }
    }
    
    deletedMovies = async (id) => {
        const {cartProducts} = this.state;
        try{
            const deletedCart = await axios.delete(`/cart/${id}` , cartProducts);
            let deletedProducts = [...this.state.cartProducts].filter(i => i.id !== id)
            this.setState({cartProducts: deletedProducts})
            // this.setState({cartProducts: cart.data});
            console.log(deletedCart.data)

       //catch errors     
        } catch (e) {
            console.log(e);
        }
    }

    render() { 
        return ( 
            <div>
                
                <div className="cartPage" >
                {this.state.cartProducts.map(item =>(
                    <div className="cartField"key={item.id}> 
                        <h3 className="item">{item.productName}</h3>
                        <p className="productPrice">{item.productPrice} <button className="delete" onClick={() => this.deletedMovies(item.id)}>Delete</button></p> 
                    </div>

                ))}
                     <div className="innerbuttonContainer">
               <button className="checkout_Button"> Check Out</button>
              
               </div>
                </div>

                
            </div>
         );
    }
}
 
export default Cart;