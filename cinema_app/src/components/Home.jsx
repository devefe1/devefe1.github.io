import React from 'react';
// import Footer from './Footer';
import Picture from '../assets/picture.jpg';

const Home = () => {
    return ( 
        <div className = "Img">
        <img className = "movieImg" src={Picture}  alt="fireSpot"/>
        <div className = "about">
            <li className= "aboutHead">ABOUT</li>
           
            {/* <img className = "lineImg" src={Line}  alt="fireSpot"/> */}
            <li> <br/>We help you find the best movies to watch
              <br/>
              while you eat, drink & relax in the comfort of your Home.
            </li>
          </div>
    
     </div> 
     );
}
 
export default Home;