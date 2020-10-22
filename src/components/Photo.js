import React from 'react'
import styled from "@emotion/styled";

const Card = styled.div`
    margin: 10px;
`


const Photo = () => {
    return (
        <Card>
            <img src={"https://www.mobafire.com/images/champion/square/shaco.png"} />
        </Card>
    );
}

export default Photo