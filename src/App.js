import React from 'react';
import Header from './components/Header'
import Searcher from "./components/Searcher";
import Results from "./components/Results";

function App() {
  return (
      <>
        <Header />
        <Searcher />
        <Results />
      </>
  );
}

export default App;
