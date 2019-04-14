import React from 'react';
import ReactDOM from 'react-dom';
import { drizzleReactHooks } from 'drizzle-react';
import { Drizzle } from 'drizzle';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import drizzleOptions from './config.drizzle';
import App from './containers/App';

const drizzle = new Drizzle(drizzleOptions);

ReactDOM.render(
  <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
    <drizzleReactHooks.Initializer
      error="There was an error."
      loadingContractsAndAccounts="Loading Contracts and Accounts..."
      loadingWeb3="Loading web3..."
    >
      {/*
        Tuve que pasar drizzle a App para poder ejecutar el método Vote del contrato.
        Por algun motivo, los hooks de drizzleReactHooks no me estaban mostrando ese metodo,
        pero si los otros. Propagando drizzle pude hacer la llamada sin usar los hooks.
        Esto tiene un impacto negativo pq App se va a volver a renderizar cada vez que el objeto drizzle cambie.
      */}
      <App drizzle={drizzle} />
    </drizzleReactHooks.Initializer>
  </drizzleReactHooks.DrizzleProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
