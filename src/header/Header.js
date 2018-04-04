import React, { PureComponent } from 'react'
import './Header.css';

export default class Header extends PureComponent {
  render() {
    return (
      <header
        className="App-header"
      >
        <h1
          className="App-title"
        >
        {this.props.title}
      </h1>
    </header>
    )
  }
}
