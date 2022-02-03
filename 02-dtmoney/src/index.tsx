import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

//Create server FakeAPI
createServer({

  //Declaring a intern miragejs database
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api'; //All routes after "/api" is for MirageJS

    this.get('/transactions', () => {
      //Return all transactions from intern mirage database
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      //schema is the database
      return schema.create('transaction', data);
    });

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
