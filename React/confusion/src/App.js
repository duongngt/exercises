import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './component/Menucomponent';
import Main from './component/Maincomponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
