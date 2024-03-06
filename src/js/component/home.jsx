import React, { useState } from 'react';

const TrafficLight = () => {
    const [clickedLight, setClickedLight] = useState(null);

    console.log(clickedLight);
    let redExtraClass = clickedLight === 'red' ? 'selected' : '';
    let yellowExtraClass = clickedLight === 'yellow' ? 'selected' : '';
    let greenExtraClass = clickedLight === 'green' ? 'selected' : '';

    return (
        <div className="wholeLight">
            <div id="traffictop"></div>
            <div id="container">
                <div className={`red light ${redExtraClass}`} onClick={() => setClickedLight('red')}></div>
                <div className={`yellow light ${yellowExtraClass}`} onClick={() => setClickedLight('yellow')}></div>
                <div className={`green light ${greenExtraClass}`} onClick={() => setClickedLight('green')}></div>
            </div>
        </div>
    );
};

export default TrafficLight;







