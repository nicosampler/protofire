// @vendors
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import styled from 'styled-components/macro';
// @components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import logo from './logo.svg';

const StyledContainer = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'content'
    'footer';

  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;

  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Header />
        <Main />
        <Footer />
      </StyledContainer>
    </>
  );
}

export default App;

/*<img src={logo} className="App-logo" alt="logo" />
           <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */
