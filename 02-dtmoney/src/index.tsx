import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer } from 'miragejs';

//Create server FakeAPI
createServer({
  routes() {
    this.namespace = 'api'; //All routes after "/api" is for MirageJS

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Selled Item',
          createdAt: new Date()
        }
      ]
    });

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
