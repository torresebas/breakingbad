import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";

import Phrase from './components/Phrase'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 11px 19px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  transition: background-color .8s ease;


  :hover {
  cursor: pointer;
  background-color: #CCDDE2; 

  }


`;

function App() {
  //state
  const [phrase, setPhrase] =  useState({})


  const requireToAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");

    const phrase = await api.json()

    setPhrase(phrase[0]);
  }  


  //loading phrase
  useEffect(() => {
    requireToAPI()
  },[])

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />

      <Button
        onClick={requireToAPI}
      >Get Phrase</Button>
    </Container>
  );
}

export default App;
