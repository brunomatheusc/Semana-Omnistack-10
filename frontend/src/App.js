import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
    const[github_username, setGithubUsername] = useState('');    
    const[techs, setTechs] = useState('');    
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
        }, (err) => {
            console.log(err);
        });
    }, []);

    async function handleAddDev(e) {
        e.preventDefault();

        try {
            // const response = 
        } catch (error) {
            
        }
    }
    
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                
                <form action="">
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
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/7659227?s=460&u=c1539b73d0dedc8b5b5e40ccf91c1125d82c4f2b&v=4" alt="Bruno Matheus"/>

                            <div className="user-info">
                                <strong>Bruno Matheus</strong>
                                <span>React, Node.js, PHP</span>
                            </div>
                        </header>

                        <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias</p>
                        <a href="https://github.com/brunomatheusc">Acessar perfil</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/7659227?s=460&u=c1539b73d0dedc8b5b5e40ccf91c1125d82c4f2b&v=4" alt="Bruno Matheus"/>

                            <div className="user-info">
                                <strong>Bruno Matheus</strong>
                                <span>React, Node.js, PHP</span>
                            </div>
                        </header>

                        <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias</p>
                        <a href="https://github.com/brunomatheusc">Acessar perfil</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/7659227?s=460&u=c1539b73d0dedc8b5b5e40ccf91c1125d82c4f2b&v=4" alt="Bruno Matheus"/>

                            <div className="user-info">
                                <strong>Bruno Matheus</strong>
                                <span>React, Node.js, PHP</span>
                            </div>
                        </header>

                        <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias</p>
                        <a href="https://github.com/brunomatheusc">Acessar perfil</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/7659227?s=460&u=c1539b73d0dedc8b5b5e40ccf91c1125d82c4f2b&v=4" alt="Bruno Matheus"/>

                            <div className="user-info">
                                <strong>Bruno Matheus</strong>
                                <span>React, Node.js, PHP</span>
                            </div>
                        </header>

                        <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias</p>
                        <a href="https://github.com/brunomatheusc">Acessar perfil</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
