import React, { PureComponent } from 'react';
import './Cities.css';

export default class Cities extends PureComponent {
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
          {this.props.cities.map((city) => {
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
