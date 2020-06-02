import React from 'react';
import { Link} from 'react-router-dom';
  
 const Nav = () => {
     return (
               <div className="navBar">
              <ul>
                   <Link id='footer-links' to='/movies' className="cart"> <li>Movies</li></Link>

                 <Link id='footer-links' to='/signup' className="cart"> <li>Sign Up</li></Link>
                 
                 <Link id='footer-links' to='/Login' className="cart"> <li>Login</li></Link>
                 
                 <Link id='footer-links' to='/cart'  className="cart"> <li>Cart</li>  </Link> 
                
              </ul>
        
            </div> 
    
      );
 }
  
 export default Nav;