import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

import Home from "./container/Home/Home"

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>

    </Provider>

  );
}


export default App;
