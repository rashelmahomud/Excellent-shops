import React from 'react';
import './Tshart.css';

const Tshart = ({handelAddToCart,tShart}) => {

    
    const {name, picture,balance} = tShart;
    return (
        <div className='tSharts'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>price: ${balance}</h4>
            <button onClick={ () => handelAddToCart(tShart)}>Add To Cart</button>
            
         
        </div>
        
    );
};

export default Tshart;