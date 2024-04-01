import React from 'react';
import placeholder from './assets/images/bad-solar-system-diagram.avif';

function MainColumn(props) {
    return (
        <main className="col px-0 h-100" id="main-column">
            <>
                <p style={{width: "60%", color: 'white'}}>{JSON.stringify(props.data)}</p>
                <p style={{minHeight: "1em", color: 'white'}}>{JSON.stringify(props.selectedObject)}</p>
            </>
            <img className="image" src={placeholder} alt="Placeholder diagram of the Solar System" />
        </main>
    );
}

export default MainColumn;
