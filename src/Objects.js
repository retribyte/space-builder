import React from 'react';
import './assets/css/style.css';

function Objects(props) {

    return (
        <section id="children-panel" className="col-md-2 h-100 px-0 text-light">
        <div id="children-panel-content" className="collapse-horizontal">
        <h1>Astronomical Objects</h1>
        <nav className="container text-start">
            <ul className="star">
                <li>Sol</li>
                    <ul className="planet">
                        <li>Mercury</li>
                        <li>Venus</li>
                        <li>Earth</li>
                            <ul className="moon"><li>Luna</li></ul>
                        <li>Mars</li>
                        <li>Jupiter</li>
                        <li>Saturn</li>
                        <li>Uranus</li>
                        <li>Neptune</li>
                    </ul>
            </ul>
        </nav>
    </div>
    </section>
    );
}

export default Objects;