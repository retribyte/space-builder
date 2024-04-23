import React, { useState } from 'react';
import SystemCanvas from './SystemCanvas';
import placeholder from './assets/images/bad-solar-system-diagram.avif';
import ScaleSlider from './ScaleSlider';

function MainColumn(props) {
    const [globalScale, setGlobalScale] = useState(1);
    function handleChange(number) {
        setGlobalScale(number);
    }

    return (
        <main className="col px-0 h-100" id="main-column">
            <>
                {/* <p style={{width: "60%", color: 'white'}}>{JSON.stringify(props.data)}</p> */}
                {/* <p style={{minHeight: "1em", color: 'white'}}>{JSON.stringify(props.selectedObject)}</p> */}
            </>
            {/* <img className="image" src={placeholder} alt="Placeholder diagram of the Solar System" /> */}
            <ScaleSlider scale={globalScale} setScale={handleChange} />
            <SystemCanvas system={props.data} selected={props.selected} scale={globalScale} />
        </main>
    );
}

export default MainColumn;
