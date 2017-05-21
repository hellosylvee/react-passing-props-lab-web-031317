import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  return(
    <div>
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    </div>
  )
}

Filter.defaultProps = {
  filters: null,
  handleChange: null
};

export default Filter;

// Original Code
// class Filter extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: []
//     };
//
//     this.fetchFilters = this.fetchFilters.bind(this);
//   }
//
//   componentWillMount() {
//     this.fetchFilters(); //This lifecycle hook will happen before render()
//   }
//
//   fetchFilters() {
//     fetch('/api/fruit_types') //Getting back an array of fruits in fruit.js
//     .then(res => res.json()) //Turn into json format
//     .then(filters => this.setState({filters: filters})); //Then update the state in this object
//   }
//
//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }
//
// When event occurs (selected an option), perform this callback function handleChange in FruitBasket on line 26
// Map through the fruitTypes array and display each element with index line 28-30
