import React from 'react';
import Styling from './Styling'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Styling>
            <div className='Header'>
            <div className='Name'>
                <h1>Lambda Eats</h1>
            </div>
            <div className='Nav'>
                <Link to='/'>
                  Home
                </Link>
                <Link id = 'order-pizza' to='/Pizza'>
                  Order
                </Link>
            </div>
            </div>
            <div className='TextContainer'>
                <div className='TextTitle'>
                <h2> Welcome to Lambda Eats! We serve the best meat lovers pizza around. </h2>
                </div>
                <div className='TextParagraph'>
                <p>Click the order button to get started!</p>
                </div>
            </div>
           
        </Styling>
    );
  };
  export default HomePage;