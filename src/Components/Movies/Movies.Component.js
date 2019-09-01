import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Movies extends Component {
  state = {
    name: "Parent"
  }

  // clickHandle = e => {
  //   this.setState({
  //     name: "ParentclickHandle"
  //   });
  // }

  // clickUnmountHandle = e => {
  //   this.setState({
  //     name: "1"
  //   });
  // }

  render() {
    const { movies } = this.props;
    console.log('render', movies);

    // if (this.state.name === "1") {
    //   return <div></div>;
    // }

    return (
      <div className="row">
        {movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)}
        {/* <Child name={this.state.name} />
        <button onClick={this.clickHandle}>Button</button>
        <button onClick={this.clickUnmountHandle}>Unmount</button> */}
      </div>
    )
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

function mapStoreToProps(state) {
  return {
    movies: state.movies.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Movies);
