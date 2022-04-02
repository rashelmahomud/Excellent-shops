import React from 'react';


const Carts = ({carts,handelRemoveCart}) => {

    //=================
    // Conditional randaring
    //element variable
        let commend;
    if(carts.length === 0){
        commend = <p>Pleases add at last one items</p>
    } else{
        commend = <p><small>Thanks for adding!</small></p>
    }
//=================

    return (
        <div>
            <h2>This is a Carts page: {carts.lenght}</h2>

            {
                carts.map(cart => <p>{cart.name}
                 <button onClick={ () => handelRemoveCart(cart)}> Delete</button>
                 </p>)

            }

       
            {commend}
        {carts.length <= 4 ? <p>keep adding</p> : <button>Delete</button>}

        </div>
    );
};

export default Carts;