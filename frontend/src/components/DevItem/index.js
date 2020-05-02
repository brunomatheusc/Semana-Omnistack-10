import React from 'react';
import { Link } from 'react-router-dom';

// import './styles.css';

import { Container, Header, Avatar, UserInfo, Name, Techs, Bio } from './styles';

export default function DevItem({ dev }) {
    return (
        <Container className="dev-item">
            <Header>
                <Avatar src={dev.avatar_url} alt={dev.name} />

                <UserInfo>
                    <Name>{dev.name}</Name>
                    <Techs>{dev.techs.join(', ')}</Techs>
                </UserInfo>
            </Header>

            <Bio>{dev.bio}</Bio>
            <Link to={`https://github.com/${dev.github_username}`}>Acessar perfil</Link>
        </Container>
    );
}
