import React from 'react';

function MainColumn({ toggleCreatePanel, data }) {
    return (
        <main className="col px-0 h-100" id="main-column">
            <div className="closebtn left"><a href="javascript:void(0)">&equiv;</a></div>
            <img className="image" src="./assets/images/bad-solar-system-diagram.avif" alt="Placeholder diagram of the Solar System" />
            <p style={{width: "25%", color: 'white'}}>{JSON.stringify(data)}</p>
            <div className="button-right side-button"><button id="save" type="button" className="btn btn-outline-danger">Save</button></div>
            <div className="closebtn right"><a href="javascript:void(0)">&equiv;</a></div>
        </main>
    );
}

export default MainColumn;
