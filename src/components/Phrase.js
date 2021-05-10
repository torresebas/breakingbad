import React from 'react'
import styled from '@emotion/styled';

const ContainerPhrase = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 800px;

  @media(min-width: 995px){
    margin-top:10rem
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Thaoma, sans-serif;
    font-size: 1.4rem;
    font-weight: blod;
    text-align: center;
    color: #666;
    margin-top:; 2rem

  }
`

const Phrase = ( {phrase} ) => {
  // if(Object.keys(phrase).length === 0 )return null
  return (
    <ContainerPhrase>
    <h1>{phrase.quote}</h1>
    <p>{phrase.author}</p>
    </ContainerPhrase>
    );
}
 
export default Phrase;