import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  
    main {
        margin-left: 30px;
    }

    main {
        flex: 1;
    }

    main ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;
    }

    @media(max-width: 650px) {
        main {
            width: 100%;
        }
        
        main ul {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width: 1000px) {
        flex-direction: column;

        aside {
            width: 100%;
        }
        
        main {
            margin-left: 0;
            margin-top: 30px;
        }
    }
`;

export const Aside = styled.aside`
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    padding: 30px 20px;
`;

export const Title = styled.strong`
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
`;