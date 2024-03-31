import React from 'react';

function MainColumn(props) {
    return (
        <main className="col px-0 h-100" id="main-column">
            <div className="closebtn left"><a href="javascript:void(0)">&equiv;</a></div>
            <div className="button-left side-button"><button id="create" type="button" className="btn btn-outline-primary">Create</button></div>
            <img className="image" src="./assets/images/bad-solar-system-diagram.avif" alt="Placeholder diagram of the Solar System" />
            <div style={{display: "flex", flexDirection: "column"}}>
                <p style={{width: "100%", color: 'white'}}>{JSON.stringify(props.data)}</p>
                <p style={{minHeight: "1em", color: 'white'}}>{JSON.stringify(props.selectedObject)}</p>
            </div>
            <div className="button-right side-button"><button id="save" type="button" className="btn btn-outline-danger">Save</button></div>
            <div className="closebtn right"><a href="javascript:void(0)">&equiv;</a></div>
        </main>
    );
}

export default MainColumn;
