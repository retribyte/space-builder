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
                                <ul className="star" key={system.name}>
                                    <li>{system.name}</li>
                                    <ul className="planet">
                                        {system.planets.map((planet) => (
                                        <React.Fragment key={planet.name}>
                                            <li>{planet.name}</li>
                                            {planet.moons && planet.moons.length > 0 && (
                                            <ul className="moon">
                                                {planet.moons.map((moon) => (
                                                <li key={moon.name}>{moon.name}</li>
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
            </div>
        </section>
    );
}

export default ChildrenPanel;
