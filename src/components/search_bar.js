import React, { Component } from 'react';


//This is a fuctional component
// const SearchBarFC = () => {
//   return <input />;
// };

//This is an ES6 class based component.

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
      );
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
