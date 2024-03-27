import React from 'react';
import Navbar from './Navbar';
import CreatePanel from './CreatePanel';
import ChildrenPanel from './ChildrenPanel';
import MainColumn from './MainColumn';
import InfoPanel from './InfoPanel';

function App() {
    return (
        <div id="root-container" className="container-fluid">
            <Navbar />
            <div className="row align-items-start text-center"> 
                <CreatePanel />
                <ChildrenPanel />
                <MainColumn />
                <InfoPanel />
            </div>
        </div>
    );
}

export default App;
