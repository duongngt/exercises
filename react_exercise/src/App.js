import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './component/Menucomponent';
import Main from './component/Maincomponent';

import {listblog } from './shared/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: listblog
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
