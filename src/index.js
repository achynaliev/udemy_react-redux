import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyABUyZR4DDOLYZQ4Qh7FpQcxgUvwxM2W7c';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));

// AIzaSyABUyZR4DDOLYZQ4Qh7FpQcxgUvwxM2W7c