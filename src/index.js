import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyDUP8UZWhjhwHJXzLPEZEXFDkdMxIIXrBo';

// Create new componet. This componet should produce some HTML
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}


//Take component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector(".container"))
