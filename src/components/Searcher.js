import React, { useState } from 'react'
import styled from "@emotion/styled";


const Container = styled.div`
    > form {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    > form > button {
        font-size: 1.2rem;
        border: none;
        background-color: white;
        border: 2px solid #ddd;
        border-left: none;
    }
    > form > button: disabled {
        opacity: 25%;
    }
    .input {
        width: 40%;
        padding: 15px;
        font-size: 0.7rem;
        border: 2px solid #ddd;
        border-right: none;
    }
    .input: focus {
        outline: none;
    }
    @media (max-width: 768px) {
        .input {
            width: 60%;
            padding: 15px;
            font-size: 0.7rem;
        }
    }
`


const Searcher = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.onSearch(input);
        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input className={'input'} onChange={handleChange} value={input} placeholder={'Insert your photo keyword...'} type={'text'} />
                <button disabled={input===''}>🔎</button>
            </form>
        </Container>
    );
}

export default Searcher;
