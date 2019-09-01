/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { connect } from 'react-redux';
import './Navbar.css';
import { searchMovies, movieList } from '../../Actions/Actions';

const Navbar = (props) => {
  const changeHandle = e => {
    console.log(e.target.value);
    props.searchMovies(e.target.value);
  }

  const clickHandle = e => {
    e.preventDefault();
    props.movieList(props.searchText);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={changeHandle} />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={clickHandle}>Search</button>
        </form>
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    searchText: state.movies.search_text
  };
};

export default connect(mapStateToProps, { searchMovies, movieList })(Navbar);
