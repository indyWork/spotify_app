
import React from "react";

import Login_logic from "./login_logic";
import {Search_logic} from "./search_logic";
import Album_logic from "./album_logic";

import Login_ui from "./login_ui";
import {Search_ui, Artist_ui} from "./search_ui";
import Album_ui from "./album_ui";


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Login_logic
          {...this.props}
          Login_ui={<Login_ui />}
        />
    );
  }
}



class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pathID: "/search"
      };
    }
  
    render() {
      return (
          <Search_logic
            {...this.props}
            Search_ui={<Search_ui />}
            Artist_ui={<Artist_ui />}
          />
      );
    }
}


class Album extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pathID: "/album"
      };
    }
  
    render() {
      return (
          <Album_logic
           {...this.props}
            Album_ui={<Album_ui />}
          />
      );
    }
}
  
  
  export {
      Login,
      Search,
      Album
  };
