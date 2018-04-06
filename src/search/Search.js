import React, { Component } from 'react'
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearch: '',
      stateSearch: {},
    }
    
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCity(event) {
    this.setState({citySearch: event.target.value});
  }
  
  handleChangeState(event) {
    this.setState({stateSearch: event.target.value});
  }



  handleSubmit(event) {
    event.preventDefault();
    this.props.searchCities(this.state);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="Search"
      >
        <div
          className="Search-item"
        >
          <label
            for="cidade"
            className="Search-item-label"
          >
            Cidade:
          </label>
          <input
            name="cidade"
            type="text"
            placeholder="Pesquise por cidade"
            value={this.state.citySearch}
	          onChange={this.handleChangeCity}
            required
            autofocus
          />
        </div>
        <div
          className="Search-item"
        >
          <label
            for="estado"
            className="Search-item-label"
          >
            Estado:
          </label>
          <select
            name="estado"
            onChange={this.handleChangeState}
          >
            <option
              value=""
              selected>Selecione um estado
            </option>
            {this.props.listState.map((state) => {
              return (
                <option
                  value={state.nome}
                >
                {state.uf}
                </option>
              )
            })}
          </select>          
        </div>
        <div
          className="Search-button"
        >
          <button>
          Buscar
          </button>
        </div>
      </form>
    );
  }
}
