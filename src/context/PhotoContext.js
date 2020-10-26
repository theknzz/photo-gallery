import React, { createContext, useState } from 'react'
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {

    const [images, setImages] = useState([ ]);
    const [loading, setLoading] = useState(true);

    const runSearch = query => {
        let url = query.trim().replace(' ', '+');
        if ( !url ) url='skate';
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${url}&image_type=photo`)
            .then( response => {
                response.json().then( res => {
                    let imgs = res.hits.map(item => {
                        return {
                            url: item.imageURL,
                            id: item.id,
                            pageURL: item.pageURL,
                        };
                    });
                    setImages(imgs);
                    setLoading(false);
                });
            })
            .catch( error => console.error('Encountered an error with fetching and parsing data', error));
    }

    return (
        <PhotoContext.Provider value={ { images, loading, runSearch, setLoading}}>
            { props.children }
        </PhotoContext.Provider>
    );
}

export default PhotoContextProvider;