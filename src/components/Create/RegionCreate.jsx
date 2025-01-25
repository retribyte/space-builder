import React from "react";

function RegionCreate({ handleData }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const bounds = "This data does not exist yet.";

        const formData = {
            bounds: bounds
        };

        console.log('Pulling hand grenade...')
        handleData(formData);
    }

    return (
        <form id="createForm" className='region-form' onSubmit={handleSubmit}>
            <button id="drawToggle" className="btn btn-primary">Draw</button>
        </form>
    );
}

export default RegionCreate;