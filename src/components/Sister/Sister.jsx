import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const ring = useContext(RingContext);
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <p><small>Ring: {ring}</small></p>
            <p><small>GrandPa money: {money}</small></p>
        </div>
    );
};

export default Sister;