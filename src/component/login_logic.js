import React, { Component } from "react";

 
class Login_logic extends Component {

  generateRandomString = (length) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }


  authenticate = () => {

    let client_id = '8f48be8e400344a1bc9b28815c60c524';

    let redirect_uri = 'http://localhost:3000/search/';

    let state = this.generateRandomString(16);

    let scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;

  };

  
  render() {
    const newProps = Object.assign({}, { ...this.props },{
      authenticate: this.authenticate

    });
    const Login_ui = React.cloneElement(this.props.Login_ui, newProps);
    return Login_ui;
  }
}
 

export default Login_logic;