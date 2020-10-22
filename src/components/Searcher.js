import React from 'react'
import styled from "@emotion/styled";


const Container = styled.div`
    display: flex;
    justify-content: center;
    > input {
        width: 30%;
    }
`

const Searcher = (props) => {
    return (
        <Container>
            <input placeholder={'Insert your photo keyword...'} type={'text'} />
        </Container>
    );
}

export default Searcher;
