// @vendors
import React from 'react';
import GlobalStyles from '../../GlobalStyles';
import styled from 'styled-components/macro';
import { drizzleReactHooks } from 'drizzle-react';
import PropTypes from 'prop-types';
// @components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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

function App({ drizzle }) {
  const { useCacheCall } = drizzleReactHooks.useDrizzle();

  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Header />
        {/*
          la llamada a statistics, podría hacerce dentro del componente Main, cuando se quiere hacer el render
          del componente Results. AL parecer hay algun error en la lib (la versión no es estable), pq al momento de
          invocar al metodo Vote de Ballot,  se vuelve a disparar el render y algunas veces los hooks cambian el orden.
          Eso tira un warning de react pq los hooks siempre tienen que ser invocados en el mismo orden.
        */}
        <Main
          voteInfo={useCacheCall('Ballot', 'getVote')}
          statistics={useCacheCall('Ballot', 'getStatistics')}
          drizzle={drizzle}
        />
        <Footer />
      </StyledContainer>
    </>
  );
}

App.propTypes = {
  drizzle: PropTypes.object.isRequired
};

export default App;
