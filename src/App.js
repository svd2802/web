import React, { Component } from 'react';
import './App.css';
import { Menu } from './Components/Menu'
import Content from './Components/Content'
import 'bootstrap/dist/css/bootstrap.min.css'; // здесь подключать бутстрап

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="header" className="row">header</div>
        {/* меняющийся блок, ниже */}
        <div id="content-wrapper" className="row">
          <div id="side-menu" className="col-sm-3">
            <Menu />
          </div>
          <div id="content" className="col-sm-9">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
