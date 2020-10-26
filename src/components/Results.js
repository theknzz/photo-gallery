import React, { useContext, useEffect } from 'react'
import Photo from "./Photo";
import styled from "@emotion/styled";
import { PhotoContext } from "../context/PhotoContext";
import Loader from "./Loader";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

const Wrapper = styled.div`
    width: 80%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: 1s;
`

const Results = ( {query, previousQuery} ) => {
    // eslint-disable-next-line no-undef
    const { images, loading, runSearch } = useContext(PhotoContext);

    useEffect( () => {
        if (previousQuery !== query) {
            previousQuery.current = query;
            runSearch(query);
        }
    }, [query]);

    const imgs = images.map( img => {
        return <Photo key={img.id} url={img.url} pageURL={img.pageURL}/>;
    });

    const content = loading ? <Loader/> : imgs;

    return (
        <Container>
            <Wrapper>
                { content }
            </Wrapper>
        </Container>
    );
}

export default Results