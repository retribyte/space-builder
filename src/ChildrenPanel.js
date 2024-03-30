import React from 'react';

function ChildrenPanel(props) {
    const galaxy = props.data;
    return (
        <section id="children-panel" className="col-md-2 px-0 text-light">
            <div id="children-panel-content" className="collapse-horizontal">
                <h1>Astronomical Objects</h1>
                <nav className="container text-start">
                        {
                            galaxy.systems.map((system) => (
                                <ul className="star">
                                    <li key={system.name} className={`${props.selected && props.selected.name === system.name ? 'selected' : ''}`} onClick={() => {props.setSelected(system.name)}}>{system.name}</li>
                                    <ul className="planet">
                                        {system.planets.map((planet) => (
                                        <React.Fragment>
                                            <li key={planet.name} className={`${props.selected && props.selected.name === planet.name ? 'selected' : ''}`} onClick={() => {props.setSelected(planet.name)}}>{planet.name}</li>
                                            {planet.moons && planet.moons.length > 0 && (
                                            <ul className="moon">
                                                {planet.moons.map((moon) => (
                                                <li key={moon.name} className={`${props.selected && props.selected.name === moon.name ? 'selected' : ''}`} onClick={() => {props.setSelected(moon.name)}}>{moon.name}</li>
                                                ))}
                                            </ul>
                                            )}
                                        </React.Fragment>
                                        ))}
                                    </ul>
                                </ul>
                            ))
                        }
                </nav>
                <button className="btn btn-danger selectable" onClick={() => {props.setSelected(null)}}>Deselect</button>
            </div>
        </section>
    );
}

export default ChildrenPanel;
