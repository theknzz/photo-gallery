import React, {Fragment, useRef, useState} from 'react'
import Header from "./Header";
import Searcher from "./Searcher";
import Results from "./Results";
import {HashRouter, Switch, Route} from "react-router-dom";

const Gallery = (props) => {

    const [search, setSearch] = useState('');
    const previousQuery = useRef(search);

    const handleSearchChange = (search) => {
        setSearch(search);
    }

    return (
        <Fragment>
            <Header />
            <Searcher onSearch={handleSearchChange}/>
            <Results query={search} previousQuery={previousQuery}/>
        </Fragment>
    );
}

export default Gallery;