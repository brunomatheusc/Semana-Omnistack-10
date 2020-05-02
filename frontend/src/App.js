import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './service/api';

function App() {
    const[github_username, setGithubUsername] = useState('');    
    const[techs, setTechs] = useState('');    
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
        }, (err) => {
            console.log(err);
        });
    }, []);

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

    async function handleAddDev(e) {
        e.preventDefault();

        try {
            const response = await api.post(`/devs`, {
                github_username, techs, latitude, longitude
            });

            setDevs([...devs, response.data]);

            setGithubUsername('');
            setTechs('');
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                
                <form onSubmit={ handleAddDev }>
                    <div className="input-block">
                        <label htmlFor="">Usuário do Github</label>
                        <input type="text" value={ github_username } onChange={ e => setGithubUsername(e.target.value) } name="github_username" id="github_username" required/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="">Tecnologias</label>
                        <input type="text" value={ techs } onChange={ e => setTechs(e.target.value) } name="techs" id="techs" required/>
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="">Latitude</label>
                            <input type="number" value={ latitude } onChange={ e => setLatitude(e.target.value) } name="latitude" id="latitude" required/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="">Longitude</label>
                            <input type="number" value={ longitude } onChange={ e => setLongitude(e.target.value) } name="longitude" id="longitude" required/>
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>
            
            <main>
                <ul>
                { devs.map(dev => (
                    <li className="dev-item" key={ dev._id }>
                        <header>
                            <img src={ dev.avatar_url } alt={ dev.name }/>

                            <div className="user-info">
                                <strong>{ dev.name }</strong>
                                <span>{ dev.techs.join(', ') }</span>
                            </div>
                        </header>

                        <p>{ dev.bio }</p>
                        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil</a>
                    </li>
                ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
