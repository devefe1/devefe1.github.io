import React from 'react';
// import Footer from './Footer';
import Picture from '../assets/picture.jpg';
import Joker from '../assets/joker.jpg';

const Home = () => {
    return ( 
        <div className = "Img">
        <img className = "movieImg" src={Picture}  alt="fireSpot"/>
        <img className = "movieImgs" src={Joker}  alt="fireSpot"/>
     </div> 
     );
}
 
export default Home;