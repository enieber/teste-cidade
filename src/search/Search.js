import React, { Component } from 'react'
import './Search.css';
import { getAllState } from './apiSearch';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listState: [],
      error: '',
    }
  }

  async componentWillMount() {
    const allState = await getAllState();
    this.setState({
      listState: allState.data,
      error: allState.error,
    })
  }

  render() {
    return (
      <form
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
            placeholder="Pesquise por nome"
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
          <select name="estado">
            <option
              value=""
              selected>Selecione um estado
            </option>
            {this.state.listState.map((state) => {
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
          <button
            type="submit"
          >
          Buscar
          </button>
        </div>
      </form>
    );
  }
}
