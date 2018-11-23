import React, { Component } from 'react';
import './App.css';
import { Menu } from './Components/Menu'
import Content from './Components/Content'
import './bootstrap-4.1.1-dist/css/bootstrap.min.css'; // здесь подключать бутстрап

//D:\Web Technologies\Studiens\Web\web-omgtu\src\bootstrap-4.1.1-dist\css\bootstrap.min.css

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
