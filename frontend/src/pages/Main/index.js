import React, { useState, useEffect } from 'react';

import { Container, Aside, Title } from './styles';

import DevForm from './../../components/DevForm/index';
import DevItem from './../../components/DevItem/index';

import api from './../../service/api';

export default function Main() {
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
        <Container>
            <Aside>
                <Title>Cadastrar</Title>

                <DevForm onSubmit={handleAddDev} />
            </Aside>

            <main>
                <ul>
                    {devs.map(dev => (<DevItem key={dev._id} dev={dev} />))}
                </ul>
            </main>
        </Container>
    );
}
