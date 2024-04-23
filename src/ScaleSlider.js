import { React, useState } from 'react';

const ScaleSlider = (props) => {

    const handleChange = (event) => {
        props.setScale(event.target.value);
    }

    return (
        <div className='scale-slider'>
            <label htmlFor="globalScale">Scale</label>
            <input type="range" id="globalScale" name="globalScale" min="0.1" max="2" defaultValue="1" step="0.1"
                value={props.scale} onChange={handleChange} 
            />
            <p>{props.scale}</p>
        </div>
    );
}

export default ScaleSlider;