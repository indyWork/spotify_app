import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import "../styling.css"
import { main_style } from "../styling.js";


import {
    Login,
    Search,
    Album
} from "./componentIndex";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          searchValue: "",
          authToken: "",
          artist: 0,
          dataArtist: "",
          errorArtist: false,
          isFetchingArtist: false, 
          dataAlbum: "",
          errorAlbum: false,
          isFetchingAlbum: false, 
        }
      }

      updateToken = (value) => {
          console.log("update token");
          
        this.setState({authToken: value});
      }

      updateSearchValue = (value) => {
        this.setState({searchValue: value});
      }

      updateArtist = (value) => {
        this.setState({artist: value});
      }

      updateDataArtist= (value) => {
        this.setState({dataArtist: value});
      }

      updateErrorArtist = (value) => {
        this.setState({errorArtist: value});
      }

      updateIsFetchingArtist = (value) => {
        this.setState({isFetchingArtist: value});
      }

      updateDataAlbum= (value) => {
        this.setState({dataAlbum: value});
      }

      updateErrorAlbum = (value) => {
        this.setState({errorAlbum: value});
      }

      updateIsFetchingAlbum = (value) => {
        this.setState({isFetchingAlbum: value});
      }

 

    render() {

        
        let routes = [
            {
                path: "/",
                exact: true,
                main: (match) => <Login 
                                    {...this.props}
                                />
            },
            {
                path: "/:access_token(access_token=.*)",
                exact: true,
                main: (match) => <Search {...this.props}
                                        authToken={this.state.authToken} 
                                        updateToken={this.updateToken} 
                                        searchValue={this.state.searchValue} 
                                        updateSearchValue={this.updateSearchValue} 
                                        updateSearchCall = {this.updateSearchCall}
                                        artist={this.state.artist} 
                                        updateArtist={this.updateArtist} 

                                        dataArtist={this.state.dataArtist} 
                                        updateDataArtist={this.updateDataArtist} 
                                        errorArtist={this.state.errorArtist} 
                                        updateErrorArtist={this.updateErrorArtist} 
                                        isFetchingArtist={this.state.isFetchingArtist} 
                                        updateIsFetchingArtist={this.updateIsFetchingArtist} 
                                 />
            },
            {
                path: "/album",
                exact: true,
                main: (match) => <Album {...this.props}
                                     authToken={this.state.authToken} 
                                     dataAlbum={this.state.dataAlbum} 
                                     updateDataAlbum={this.updateDataAlbum} 
                                     errorAlbum={this.state.errorAlbum} 
                                     updateErrorAlbum={this.updateErrorAlbum} 
                                     isFetchingAlbum={this.state.isFetchingAlbum} 
                                     updateIsFetchingAlbum={this.updateIsFetchingAlbum} 
                                      />
            },
        ]
        return (
            <HashRouter>
                
                <div style={main_style.container}>

                    
                    <div style={main_style.header}>
                    Spotify Artist Search
                    </div>
                    
                    <div className="col-12 col-s-12 col-xs-12" style={main_style.main}>
                    
                        {routes.map((route, index) => {

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={({ match }) => route.main(match)}
                                />
                            );
                        })}
                        
                        
                    </div>

                </div>
            </HashRouter>
        );
    }
}



export default Main;
