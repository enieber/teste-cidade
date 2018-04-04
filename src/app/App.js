import React, { Component } from 'react';

import './App.css';
import Header from '../header/Header';
import Search from '../search/Search';
import Cities from '../cities/Cities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Pontuação de Cidades"
        />
        <Search
          states={[{
            name: 'Maranhão', uf: 'MA'
          }]}
        />
        <Cities
          list={
            [
              {
                id: 1,
                name: 'Imperatris',
                uf: 'MA',
              }
            ]
          }
        />
      </div>
    );
  }
}

export default App;
