import React from 'react';

function Popup({selected, closePopup}) {
 let addtoCart=()=> {
        console.log("testing")
        const addCart = {
            method :"POST",
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                productName : selected.Title,
                productPrice : 10})
            }
            fetch('/cart',addCart)
        }
    
    return (
        <section className = "popup">
            <div className = "content">
             <button className="addToCart" onClick={addtoCart()}>Add to Cart + $10</button>
                <h2>{selected.Title} <span> ({selected.Year})</span></h2>
                
                <p className="rating"> Rating: {selected.imdbRating}</p>
                <div className = "plot">
                    <img src= {selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}


export default Popup;
