import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { get_Artist} from '../actions/searchArtist_action'
import { get_Album } from '../actions/searchAlbum_action'

class Album_logic extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchAlbum != this.props.searchAlbum) {

      this.setState({
        data: nextProps.searchAlbum.data,
        error: nextProps.searchAlbum.error,
        isFetching: nextProps.searchAlbum.isFetching,
      })

      this.props.updateDataAlbum(nextProps.searchAlbum.data);
      this.props.updateErrorAlbum(nextProps.searchAlbum.error);
      this.props.updateIsFetchingAlbum(nextProps.searchAlbum.isFetching);

    }
  }

  render() {

    const newProps = Object.assign({}, { ...this.props }, {
      data: this.props.dataAlbum,
      error: this.props.errorAlbum,
      isFetching: this.props.isFetchingAlbum,
    });
    const Album_ui = React.cloneElement(this.props.Album_ui, newProps);
    return Album_ui;

  }
}

const mapStateToProps = state => {
  return {
    searchArtist: state.searchArtist,
    searchAlbum: state.searchAlbum,
  };
};

const mapDispatchToProps = {
  get_Artist: get_Artist,
  get_Album: get_Album,
};

Album_logic =  withRouter(connect(
      mapStateToProps, 
      mapDispatchToProps
    )(Album_logic))

export default Album_logic;