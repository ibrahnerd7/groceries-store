import React from 'react';
import Navigation from './navigation/Navigation';
import Userprovider from './providers/Userprovider'

function App() {
    return (
        <Userprovider>
            <Navigation />
        </Userprovider>
    );
}

export default App;
