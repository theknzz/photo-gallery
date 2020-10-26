import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        font-size: 100px;
        margin-bottom: 15px;
        font-family: 'Patrick Hand SC', cursive;
    }
    > span {
        font-size: 15px;
        margin-bottom: 50px;
    }
    @media (max-width: 768px) {
        > h1 {
            font-size: 60px;
        }
    }
`

const Header = (props) => {
    return (
        <Container>
            <h1>My Gallery</h1>
            <span>Based in Github repo <a href={'https://github.com/Yog9/SnapShot'}>link</a></span>
        </Container>
    );
}

export default Header