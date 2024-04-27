import React from "react";

function LandmarkCreate({ handleData }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const description = document.getElementById('decription-input').value;
        // const xPosition = document.getElementById('x-input').value;
        // const yPosition = document.getElementById('y-input').value;

        const formData = {
            name: name,
            description,
        };

        console.log('Pulling hand grenade...')
        handleData(formData);
    }

    return (
        <form id="createForm" className='landmark-form' onSubmit={handleSubmit}>
            <div id="objectDetails">
                <div className='label-holder'>
                    <label htmlFor="name-input">Name: </label>
                    <label htmlFor="decription-input">Description: </label>
                </div>
                <div id="inputContainer">
                    <input type="text" id="name-input" className="form-control" placeholder="Earth" />
                    <textarea type="text" id="decription-input" className="form-control" 
                        placeholder="The description of this landmark." rows="4" cols="50" />
                </div>
                {/* <div id="inputContainer">
                    <label htmlFor="x-input">x position: </label>
                    <input type="number" id="x-input" className="form-control" placeholder="165" />
                </div>
                <div id="inputContainer">
                    <label htmlFor="y-input">y position: </label>
                    <input type="number" id="y-input" className="form-control" placeholder="718" />
                </div> */}
            </div>
            <hr />
            <button id="confirmButton" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default LandmarkCreate;