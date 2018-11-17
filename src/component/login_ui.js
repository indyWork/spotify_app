import React, { Component } from "react";
import spotify from './spotify.svg'

import { Button } from '@material-ui/core';

import "../styling.css"
import { login_style } from "../styling.js";

class Login_ui extends Component {
    render() {
        return (

            <div style={login_style.loginContainer}>

                <div className="col-4 col-s-5 col-xs-7" style={login_style.loginBox}>

                    <div style={login_style.boxText}>
                        Login
                    </div>

                    <div style={login_style.boxImg}>
                        <Button
                            onClick={() => this.props.authenticate()}
                        >
                            <img src={spotify} alt="Login Button" width="42" height="42" />
                        </Button>
                    </div>


                </div>
            </div>
        );
    }
}

export default Login_ui;
