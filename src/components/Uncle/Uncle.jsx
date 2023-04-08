import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext, RingContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const ring = useContext(RingContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000 tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin hasFriend={true}>Sabil</Cousin>
                
            </section>
        </div>
    );
};

export default Uncle;