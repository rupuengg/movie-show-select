/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    console.log("R - Child - Constructor", props);
  }

  // componentWillMount() {
  //   this.setState({
  //     name: this.props.name
  //   });
  //   console.log("R - Child - ComponentWillMount");
  // }

  // componentDidMount() {
  //   this.setState({
  //     name: "ComponentDidMount"
  //   });
  //   console.log("R - Child - ComponentDidMount");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   this.setState({
  //     name: "componentWillReceiveProps"
  //   });
  //   console.log("Rr - Child - componentWillReceiveProps", nextProps, nextState);
  // }

  // shouldComponentUpdate(prevProps, nextProps) {
  //   console.log("Rr - Child - shouldComponentUpdate", prevProps, nextProps);
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log("Rr - Child - componentWillUpdate");
  // }

  // componentDidUpdate() {
  //   console.log("Rr - Child - componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("Rr - Child - componentWillUnmount");
  // }

  render() {
    console.log("Child - Render");
    const { movie } = this.props;
    return (
      <div className="col-sm-4 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Lights" />
          <h5 className="text-light card-title">{movie.Title}</h5>
          <div className="caption">
            <p>{movie.title} - {movie.Year}</p>
          </div>
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>Movie Detail</Link>
        </div>
      </div>

    );
  }
}

export default Movie;