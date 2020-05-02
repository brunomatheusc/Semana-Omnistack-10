import React, { useState, useEffect } from 'react';

import { Form, InputBlock, InputGroup, Input, Button, Label } from './styles';

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
        <Form onSubmit={ handleSubmit }>
            <InputBlock>
                <Label>Usuário do Github</Label>
                <Input type="text" value={github_username} onChange={e => setGithubUsername(e.target.value)} name="github_username" id="github_username" required />
            </InputBlock>

            <InputBlock>
                <Label>Tecnologias</Label>
                <Input type="text" value={techs} onChange={e => setTechs(e.target.value)} name="techs" id="techs" required />
            </InputBlock>

            <InputGroup>
                <InputBlock>
                    <Label>Latitude</Label>
                    <Input type="number" value={latitude} onChange={e => setLatitude(e.target.value)} name="latitude" id="latitude" required />
                </InputBlock>

                <InputBlock>
                    <Label>Longitude</Label>
                    <Input type="number" value={longitude} onChange={e => setLongitude(e.target.value)} name="longitude" id="longitude" required />
                </InputBlock>
            </InputGroup>

            <Button>Salvar</Button>
        </Form>
    );
}
