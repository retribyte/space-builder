import React from 'react';

function CreateTutorial(props) {
    const buttons = props.buttons;
    return (
        <div className='text-light' style={{width: "100%", height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Welcome, space architect!</h1>
            <p>
                {(navigator.maxTouchPoints || 'ontouchstart' in document.documentElement) ? 'Tap' : 'Click'} on the&nbsp;
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>
                        <span style={{color: `rgb(var(--${button.toLowerCase()}-color))`, fontWeight: 'bold', cursor: 'pointer'}} 
                            onClick={props.toggle}>
                                {button} button
                        </span>
                        {index !== buttons.length - 1 && ' or the '}
                    </React.Fragment>
                ))}
                &nbsp;to start building.
            </p>
        </div>
    );
}

export default CreateTutorial;