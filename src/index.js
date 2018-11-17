import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Main from "./component/main";
import searchAlbum from "./reducers/searchAlbum_reducer";
import searchArtist from "./reducers/searchArtist_reducer";

const store = createStore(
    combineReducers({ 
        searchArtist,
        searchAlbum,
     }),
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
  document.getElementById("root")
);
