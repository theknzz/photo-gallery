import React from 'react';
import PhotoContextProvider from "./context/PhotoContext";
import Gallery from "./components/Gallery";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
          <PhotoContextProvider>
            <Gallery/>
          </PhotoContextProvider>
  );
}

export default App;
