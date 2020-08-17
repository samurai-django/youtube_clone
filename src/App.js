import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <div className="app">
          <Router>
            <Header />

              <Switch>
                  <Route path="/search">
                      <h1>search page</h1>
                  </Route>
                  <Route path="/">
                      <div className="App">

                          {/*  Sidebar  */}
                          <Sidebar />

                          {/*  contents */}
                          <Contents />
                      </div>
                  </Route>
              </Switch>
          </Router>


      </div>
  );
}

export default App;
