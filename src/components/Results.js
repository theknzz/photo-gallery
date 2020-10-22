import React from 'react'
import Photo from "./Photo";
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

const Wrapper = styled.div`
    width: 60%;
    display:flex;
    flex-wrap: wrap;

`

const Results = () => {
    return (
        <Container>
            <Wrapper>
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
            </Wrapper>
        </Container>
    );
}

export default Results