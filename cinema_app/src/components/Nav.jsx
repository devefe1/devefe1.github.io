import React from 'react';
import { Link } from 'react-router-dom';
  
 const Nav = () => {
     return ( 
         <div>
                 <Link id='footer-links' to='/cart' > <li> Cart </li> </Link> 
         </div>
      );
 }
  
 export default Nav;