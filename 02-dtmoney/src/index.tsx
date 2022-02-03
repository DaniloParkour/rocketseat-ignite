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

  //Load a initial data on table transactions do database
  //Transactions is the table that is the plural name of model
  seeds(server) {
    server.db.loadData({
      //OBS: Is a Table name (model in plural)
      transactions: [
        {
          id: 1, //ever has id numeric and autoincrement
          title: "Freelance Website",
          type: "deposit",
          category: "Development",
          amount: 6000,
          createdAt: new Date("2021-10-02 09:00:00")
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdrawn",
          category: "Casa",
          amount: 800,
          createdAt: new Date("2021-10-12 09:32:12")
        }
      ]
    });
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
