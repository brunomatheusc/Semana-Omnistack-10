import styled from 'styled-components';

export const Container = styled.li`
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    padding: 20px;  

    a {
        color: #8e4dff;
        font-size: 14px;
        text-decoration: none;
    }

    a:hover {
        color: #5a2ea6;
    }    
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 50%;
`;

export const UserInfo = styled.div`
    margin-left: 10px;
`;

export const Name = styled.strong`
    display: block;
    font-size: 16px;
    color: #333;
`;

export const Techs = styled.span`
    font-size: 13px;
    color: #999;
    margin-top: 2px;
`;

export const Bio = styled.p`
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
`;
