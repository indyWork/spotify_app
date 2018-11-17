import React, { Component } from "react";
import { connect } from 'react-redux';

import { get_Artist} from '../actions/searchArtist_action'
import { get_Album } from '../actions/searchAlbum_action'

class Artist_logic extends Component {
  constructor(props) {
    super(props);

  }

  handleSearchAlBum = id => {
    let info = {
      id: id,
      authToken: this.props.authToken,
    }
    this.props.get_Album(info);
    
    
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchArtist != this.props.searchArtist) {

      this.props.updateDataArtist(nextProps.searchArtist.data);
      this.props.updateErrorArtist(nextProps.searchArtist.error);
      this.props.updateIsFetchingArtist(nextProps.searchArtist.isFetching);
    }
    
  }

  render() {
    const newProps = Object.assign({}, { ...this.props },{
      data: this.props.dataArtist,
      error: this.props.errorArtist,
      isFetching: this.props.isFetchingArtist,
      handleSearchAlBum: this.handleSearchAlBum,

    });
    const Artist_ui = React.cloneElement(this.props.Artist_ui, newProps);
    return Artist_ui;
  }
}


class Search_logic extends Component {
  constructor(props) {
    super(props);

  }

  handleSearchMsgChange = (event) => {
    let searchText = event.target.value;

    this.props.updateSearchValue(searchText);
    
    // if(searchText != "" && !(/^ *$/.test(searchText))){
      if(searchText != "" ){
      let info = {
        q: searchText,
        type: "artist",
        authToken: this.props.authToken,
      }
     
      this.props.get_Artist(info);
      this.props.updateArtist(1);
    }
  }

  handleSearch = name => {
    let info = {
      q: name,
      type: "artist",
      authToken: this.props.authToken,
    }
    
    this.props.get_Artist(info);
    this.props.updateArtist(1);

  }

  componentDidMount = () => {
    window.addEventListener("hashchange", event => {


      let hashh = window.location.hash.substr(1);

      let hashParams = {};
      let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = hashh.substring(1);

      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
  

      if (hashParams.access_token) {
        this.props.updateToken(hashParams.access_token);
      }
      
      


    });

  }

  render() {
    const newProps = Object.assign({}, { ...this.props }, {
      handleSearchMsgChange: this.handleSearchMsgChange,
      handleSearch: this.handleSearch,
      artistCall: this.props.artist,
    });
    const Search_ui = React.cloneElement(this.props.Search_ui, newProps);
    return Search_ui;

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

Search_logic =  connect(
      mapStateToProps, 
      mapDispatchToProps
    )(Search_logic)
  


export { Search_logic, Artist_logic };