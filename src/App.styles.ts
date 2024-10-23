import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: #FEFEFE; /* White background */
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    color: #111827; /* Rich black for text */
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #111827; /* Rich black text */
  }

  .score {
    color: #001F3F; /* Navy blue for score text */
    font-size: 2rem;
    margin: 20px 0;
  }

  h1 {
    font-family: 'Fascinate Inline', sans-serif;
    color: #001F3F; /* Navy blue for the quiz title */
    font-weight: 700;
    text-align: center;
    font-size: 70px;
    margin: 20px;
    text-shadow: 2px 2px #C5CCD3; /* Slight gray shadow */
  }

  .start, .next {
    cursor: pointer;
    background: #001F3F; /* Navy blue button */
    border: 2px solid #111827; /* Rich black border */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #FFFFFF; /* White text */
  }

  .start {
    max-width: 200px;
  }

  .answer-button {
    background-color: #3A6D8C; /* Initial answer button color */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 5px 0;
    transition: background-color 0.3s;

    &:hover {
      background-color: #6A9AB0; /* Lighter color on hover */
    }

    &.selected {
      background-color: #001F3F; /* Lighter navy blue when selected */
    }
  }
`;
