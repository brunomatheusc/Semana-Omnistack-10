import React, { useState, useEffect } from 'react';

import './styles.css';

export default function DevForm({ onSubmit }) {
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

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({ github_username, techs, latitude, longitude });
 
        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="input-block">
                <label htmlFor="">Usuário do Github</label>
                <input type="text" value={github_username} onChange={e => setGithubUsername(e.target.value)} name="github_username" id="github_username" required />
            </div>

            <div className="input-block">
                <label htmlFor="">Tecnologias</label>
                <input type="text" value={techs} onChange={e => setTechs(e.target.value)} name="techs" id="techs" required />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="">Latitude</label>
                    <input type="number" value={latitude} onChange={e => setLatitude(e.target.value)} name="latitude" id="latitude" required />
                </div>

                <div className="input-block">
                    <label htmlFor="">Longitude</label>
                    <input type="number" value={longitude} onChange={e => setLongitude(e.target.value)} name="longitude" id="longitude" required />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    );
}
