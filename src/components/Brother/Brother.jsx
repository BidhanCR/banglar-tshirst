import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h3>Brother</h3>
            <p>{angti}</p>
        </div>
    );
};

export default Brother;