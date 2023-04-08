import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2 className={cart.length > 0 ? 'bbs' : 'red'}>Order summary: {cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'green' : 'blue' }`}>Something</p>
            {message}
            {cart.length >2 ? <span>Aro kinun</span> : <span>chotolok</span>}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() =>handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }
            {
                cart.length === 2 && <p>Double hoyega</p>
            }
            {
                cart.length === 3 || <p>Thinta to hoyni</p>
            }
        </div>
    );
};

export default Cart;

// conditional rendering
// 1. use if else to set a variable that will contain an element, 
// 2. ternary: condition ? 'for true' : 'flase'
// 3. Logical &&: (if the condition is true then the next thing will be displayed)
// 4. Logical || (if the condition is false then the next thing will be displayed)

/*
* CONDITIONAL CSS Class
*/ 