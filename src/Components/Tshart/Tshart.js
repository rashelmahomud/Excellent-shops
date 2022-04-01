import React from 'react';
import './Tshart.css';

const Tshart = (props) => {

    const {name, picture,balance} = props.tShart;
    return (
        <div className='tSharts'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>price: ${balance}</h4>
            <button>Add To Cart</button>
            
           
        </div>
        
    );
};

export default Tshart;