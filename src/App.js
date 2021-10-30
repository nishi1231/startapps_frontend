import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import PageTop from "./PageTop";
import PageDetail from "./PageDetail";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/PageTop' component={PageTop}/>
        <Route extact path={'/PageDetail/:id'} component={PageDetail}/>
      </Router>
    </div>
  );
}

export default App;