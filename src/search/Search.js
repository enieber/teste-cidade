import React, { PureComponent } from 'react'
import './Search.css';

export default class Search extends PureComponent {
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
