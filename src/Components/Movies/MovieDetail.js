import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchMovie } from '../../Actions/Actions';

const MovieDetail = (props) => {
  const [id, setId] = useState(props.match.params.id);

  useEffect(() => {
    props.fetchMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {JSON.stringify(props.movie)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie
  }
}

export default connect(mapStateToProps, { fetchMovie })(MovieDetail);