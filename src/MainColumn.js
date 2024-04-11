import React, { useState } from 'react';
import SystemCanvas from './SystemCanvas';
import placeholder from './assets/images/bad-solar-system-diagram.avif';

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
            <div className='scale-slider'>
                <label for="globalScale">Scale</label>
                <input type="range" id="globalScale" name="globalScale" min="0.1" max="2" defaultValue="1" step="0.1"
                    onChange={(event) => setGlobalScale(event.target.value)} 
                />
                <p>{globalScale}</p>
            </div>
            <SystemCanvas system={props.data} selected={props.selected} scale={globalScale} />
        </main>
    );
}

export default MainColumn;
