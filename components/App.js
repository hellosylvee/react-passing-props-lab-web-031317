import React, { Component } from 'react';

import Filter from './Filter'; //Getting Filter component code
import FruitBasket from './FruitBasket'; //Getting all FruitBasket component code

class App extends Component {
  constructor(){
    super()
    this.state=({
      fruit: [],
      filters: [],
      currentFilter: null
    })
  }

  // Fetching and updating filter types in the dropdown
  // Fetching and updating filtered items when type is selected

  componentWillMount(){
    this.fetchFilters(),
    this.fetchFruit()
  }

  fetchFilters() {
    fetch('/api/fruit_types') //Getting back an array of fruit types in fruit.js (['berry', 'pepo', 'pome', 'citrus', 'drupe', 'other'])
    .then(res => res.json())
    .then(filters => this.setState({filters: filters})); //Then update the state in this object
  }

  fetchFruit() {
    fetch('/api/fruit')
    .then(res => res.json())
    .then(fruit => this.setState({ items: fruit}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value); //new filter: berry
    this.setState({ selectedFilter: e.target.value });
  }

  render(){
    const list = !this.props.filter ? this.state.items : this.state.items.filter(i => i.fruit_type == this.props.filter);

    return(
      <div>
        <Filter filters={this.state.filters} />
        <FilteredFruitList filter={this.state.selectedFilter} />
      </div>
    )
  }
}

export default App

// Original Code
// const App = () => {
//   return (
//     <FruitBasket /> //returning FruitBasket component
//   );
// }
