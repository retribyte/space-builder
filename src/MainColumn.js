import React from 'react';

function MainColumn(props) {
    return (
        <main className="col px-0 h-100" id="main-column">
            <img className="image" src="./assets/images/bad-solar-system-diagram.avif" alt="Placeholder diagram of the Solar System" />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p style={{width: "60%", color: 'white'}}>{JSON.stringify(props.data)}</p>
                <p style={{minHeight: "1em", color: 'white'}}>{JSON.stringify(props.selectedObject)}</p>
            </div>
        </main>
    );
}

export default MainColumn;
