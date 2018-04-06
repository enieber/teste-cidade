import React, { Component } from 'react';

import './App.css';
import Header from '../header/Header';
import Search from '../search/Search';
import Cities from '../cities/Cities';

import {
  getAllState,
  showPoint,
} from '../search/apiSearch';
import apiCities from '../cities/apiCities';

const searchCities = (search) => {
  console.log(search);
} 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      listState: [],
      error: '',
    }
  }

  componentDidMount() {
    this._loadingListState();
    this._loadingListCities();
  }
  
  async _loadingListState() {
    const allState = await getAllState();
    this.setState({
      listState: allState.data,
      error: allState.error,
    })
  }

  async _loadingListCities() {
    const allCities = await apiCities();
    this.setState({
      cities: allCities.data,
      error: allCities.error,
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          title="Pontuação de Cidades"
        />
        <Search
          listState={this.state.listState}
          searchCities={(item) => {
            const search = {
              Nome: item.citySearch,
              Estado: item.stateSearch,
            };
            searchCities(search);
          }}
        />
        <Cities
          cities={this.state.cities}
          showPoint={(search) => showPoint(search)}
        />
      </div>
    );
  }
}

export default App;
