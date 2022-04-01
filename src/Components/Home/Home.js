import useTshart from '../../hooks/useTshart';
import Carts from '../Carts/Carts';
import Tshart from '../Tshart/Tshart';
import './Home.css';

const Home = () => {
  
    const [tSharts, setTSharts] = useTshart();

    return (
        <div className='shops-container'>
              
            <div className="home-container">

        {
            tSharts.map(tShart => <Tshart
            key={tShart.id}
            tShart={tShart}
            ></Tshart>)
        }    
            </div>

            <div className="tshart-container">

                <Carts></Carts>
            </div>
        </div>
    );
};

export default Home;