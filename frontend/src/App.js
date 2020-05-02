import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import api from './service/api';

import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';

function App() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            try {
                const response = await api.get('/devs');

                setDevs(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        loadDevs();
    }, []);

    async function handleAddDev(data) {
        try {
            const response = await api.post(`/devs`, { data });

            setDevs([...devs, response.data]);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                
                <DevForm onSubmit={ handleAddDev } />
            </aside>
            
            <main>
                <ul>
                { devs.map(dev => (<DevItem key={ dev._id } dev={ dev } />))}
                </ul>
            </main>
        </div>
    );
}

export default App;
