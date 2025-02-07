import React, { useState } from 'react';
import SystemCanvas from 'components/Canvas/SystemCanvas';
import placeholder from 'assets/images/bad-solar-system-diagram.avif';
import ScaleSlider from 'components/Canvas/ScaleSlider';
import CreateTutorial from 'src/CreateTutorial';

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
            { 
                Object.keys(props.data) != 0
                    ? <SystemCanvas system={props.data} selected={props.selected} scale={globalScale} />
                    : <CreateTutorial toggle={props.toggle} buttons={['Create']} />
            }
        </main>
    );
}

export default MainColumn;
