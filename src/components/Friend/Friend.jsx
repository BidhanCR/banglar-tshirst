import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Friend = ({ring}) => {
    const neclace = useContext(RingContext);
    return (
        <div>
            <h3>Friend</h3>
            {neclace && <p><small>Ring: {neclace}</small></p>}
        </div>
    );
};

export default Friend;