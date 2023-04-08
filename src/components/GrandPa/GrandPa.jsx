import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const GrandPa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0);
    
    return (
        <div className='grandpa'>
            <h3>GrandPa</h3>
            <p>has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;