import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        font-size: 100px;
    }
    > span {
        color: lightgrey;
    }
`

const Header = (props) => {
    return (
        <Container>
            <h1>MyGalley</h1>
            <span>Based in Github repo</span>
        </Container>
    );
}

export default Header