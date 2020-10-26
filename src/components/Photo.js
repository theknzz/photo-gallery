import React from 'react'
import styled from "@emotion/styled";

const Card = styled.div`
    margin: 10px;
    width: 290px;
`

const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
        width: 100%;
        border-radius: 5px;
        height: auto;
    }
    > img:hover {
        transform: scale(1.25);
        transition transform 1.0s;;
    }
    height:100%;
    background-color: white;
`


const Photo = ({ url, pageURL }) => {
    return (
        <Card>
            <Image>
                <img on src={url}/>
            </Image>
        </Card>
    );
}

export default Photo