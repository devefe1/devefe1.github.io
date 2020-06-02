import React from 'react';
import { Link } from 'react-router-dom';
  
 const Nav = () => {
     return ( 
         <div>
             <select name="" id="">
                 <option value="">Movies</option>
                 <Link id='footer-links' to='/cart' > <li> Cart </li> </Link> 
             </select>
         </div>
      );
 }
  
 export default Nav;