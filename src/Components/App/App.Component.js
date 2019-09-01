import React from 'react';
// import { Provider } from 'react-redux';
// import store from '../../store';
// import './App.css';
import Navbar from '../Navbar';
import MovieList from '../Movies';
import MovieDetail from '../Movies/MovieDetail';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={MovieList} />
      <Route path="/movie/:id" component={MovieDetail} />
    </div>
  );
}

export default App;
