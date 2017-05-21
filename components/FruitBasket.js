import React, { Component } from 'react';
import Filter from './Filter'; //Getting Filter component code
import FilteredFruitList from './FilteredFruitList.js'; //Getting FilteredFruitList component code

const FruitBasket = () => {
  return(
    <div className="fruit-basket">
    </div>
  )
}

export default FruitBasket;

// Original Code
// class FruitBasket extends Component {
//   constructor() { //Creates an instance of FruitBasket class
//     super(); //Allows you to access parent's class methods (React Component) through inheritance
//
//     this.state = { //Initializing with states of empty array and null
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange(e) {
//     console.log('new filter: ', e.target.value); //new filter: berry
//     this.setState({ selectedFilter: e.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange.bind(this)} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//         </div>
//       );
//     }
//   }
//
// Passing props of callback function to Filter on line 24
// Passing props of object to FilteredFruitList on line 25
//    Also note, the props are passed from updated state based on eventhandling on line 18
// This will show an updated state from null to filtered list on line 26
