import React, { Component } from 'react';
import { listblog } from '../shared/data';
import Header from './Headercomponent';
import PageNav from './PageNav';
import Blog from './Blogcomponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: listblog,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Header/>
        <Blog dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <PageNav/>
      </div>
    );
  }
}

export default Main;