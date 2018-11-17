import React, { Component } from "react";

import { Link } from "react-router-dom";

import { TextField, Card, Button, Typography, CardMedia, CardContent } from '@material-ui/core';

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import { search_style, artist_style } from "../styling.js";

import search from './search.svg'

import { Artist_logic } from "./search_logic";

class Artist_ui extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, isFetching, error } = this.props;
    
    return (
      <React.Fragment>


        <React.Fragment>
          {
            (data != undefined &&
              data.length != 0 && data.artists.items.length != 0 &&
              isFetching == false) ?
              data.artists.items.map(item => {
                let image = "";

                if (item.images.length > 0) {
                  for (let img in item.images) {
                    if (img != undefined) {

                      image = item.images[0].url;
                    }
                  }
                }


                return (
                  <Link to="/album">
                    <Card 
                    // raised={false} elevation={0}
                      key={item.id}
                      className="col-xg-2 col-g-3 col-4 col-s-5 col-xs-9"
                      style={artist_style.card}>

                      <button
                        style={artist_style.cardButton}
                        onClick={() => this.props.handleSearchAlBum(item.id)}
                      >


                        <div className="cardAction" >
                          <CardMedia
                            component="img"
                            alt="Image not found"
                            style={artist_style.cardImg}
                            height="280px"
                            image={image}
                            title="Artist image"
                          />
                          <CardContent>
                            <Typography style={artist_style.artistName}>
                              {item.name}
                            </Typography>
                            <Typography style={artist_style.artistFollower}>
                              {item.followers.total} followers
                            </Typography>
                            <Typography style={artist_style.artistPopularity} >
                              <Rater total={5} rating={item.popularity} />
                            </Typography>
                          </CardContent>
                        </div>
                      </button>

                    </Card>
                  </Link>
                )
              })
              : (data != undefined &&
                data.length != 0 && data.artists.items.length == 0 &&
                isFetching == false) ?
                  <div style={artist_style.searchMsg}>
                    No results matching this search
                  </div>
                : null
          }
        </React.Fragment>
        <React.Fragment>
          {error ?
            (
              <div style={artist_style.searchMsg}>
                Your session is expired. Please log again to continue
              </div>
            ) : null}
        </React.Fragment>

      </React.Fragment>
    );
  }
}


class Search_ui extends Component {
  render() {

    let searchBar = {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      marginBottom: '50px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '5%',
      width: '100%'
    }
    let resultGroup = {
      display: 'block',
      marginTop: '50px',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '90%',
    }

    if (this.props.artistCall == 0) {
      resultGroup.height = '0%'
      searchBar.height = '100%'
      searchBar.marginTop = '0px'
      searchBar.marginBottom = '0px'
    }
    return (
      <div className="col-xg-12 col-g-12 col-12 col-xs-12 col-s-12 " style={search_style.searchContainer}>
        <div className="col-xg-12 col-g-12 col-12 col-xs-12 col-s-12" style={searchBar}>
          <div className="col-xg-5 col-g-5 col-5 col-s-6 col-xs-7" style={search_style.searchBox}>


            <TextField
              id="search"
              placeholder={"Search for artist..."}
              type="search"
              onChange={event => {
                this.props.handleSearchMsgChange(event);
              }}
              InputProps={{
                fullWidth: true,
                disableUnderline: true
              }}

              fullWidth={true}
              value={this.props.searchValue}
              InputProps={{ disableUnderline: true }}
              inputProps={{ style: search_style.boxText }}


            />


            <div style={search_style.boxImg}>
              <Button
                onClick={() => this.props.handleSearch(this.props.searchValue)}
              >
                <img src={search} alt="Search Button" style={search_style.imgStyle} />
              </Button>
            </div>


          </div>

        </div>
       
        <div className="col-xg-12 col-g-12 col-12 col-s-10 col-xs-12 " style={resultGroup}>

          <Artist_logic {...this.props} />
        </div>
      </div>
    );
  }
}

export { Search_ui, Artist_ui };