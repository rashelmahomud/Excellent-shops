import { useState } from 'react';
import useTshart from '../../hooks/useTshart';
import Carts from '../Carts/Carts';
import Tshart from '../Tshart/Tshart';
import './Home.css';

const Home = () => {
  
    const [tSharts, setTSharts] = useTshart();
    const [carts, setCarts] = useState([]);

    const handelAddToCart = (selectItems) => {
        const exsist = carts.find(cart => cart.id === selectItems.id);
        if(!exsist) {
            const newCart = [...carts,selectItems];
            setCarts(newCart); 

        } else{
            alert('already added Items')
        }
       
    }

    const handelRemoveCart = (selectRemove) =>{

        const restRemove = carts.filter(cart => cart.id !== selectRemove.id);
        setCarts(restRemove);
    }
 

    return (
        <div className='shops-container'>
              
            <div className="home-container">

        {
            tSharts.map(tShart => <Tshart
            key={tShart.id}
            tShart={tShart}
            handelAddToCart={handelAddToCart}
            ></Tshart>)
        }    
            </div>

            <div className="tshart-container">

                <Carts 
              handelRemoveCart={handelRemoveCart}
                carts={carts}>

                </Carts>
            </div>
        </div>
    );
};

export default Home;