import React, { Component } from 'react';
import apiCities from './apiCities';
import './Cities.css';

export default class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      error: '',
    }
  }
  async componentWillMount() {
    const allCities = await apiCities();
    console.log(allCities);
    this.setState({
      cities: allCities.data,
      error: allCities.error,
    })
  }

  render() {
    return (
      <div
        className="Cities"
      >
        <table
          className="Cities-table"
        >
          <tr>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Pontuação</th>
          </tr>
          {this.state.cities.map((city) => {
            return (
              <tr>
                <td>{city.Estado}</td>
                <td>{city.Nome}</td>
                <td>
                  <button
                    onClick={() => alert('Pontuação '+city.id)}
                  > Ver pontos </button>
                </td>
              </tr>
            )
          })}          
        </table>
      </div>
    )
  }
}
