import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Routes from './routes';

function App() {
    return (
        <>  
            <GlobalStyle />
            <Routes>
                <Main />
            </Routes>
        </>
    );
}

export default App;