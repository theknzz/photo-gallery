import React from 'react'
import styled from "@emotion/styled";


const Spin = styled.div`
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #051c33;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1.5s linear infinite;
  margin-left: auto;
  margin-right: auto;
  
  @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
    
      100% {
        transform: rotate(360deg);
      }
  }
`

const Loader = () => {
    return (
        <Spin />
    );
}

export default Loader;