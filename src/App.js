import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          
           
          
          <Routes>
            {/* <Route exact path="/" key="general" element={<News category="general" />} /> */}
            <Route exact path="/general"  element={<News key="general" category="general" />} />
            <Route exact path="/sports"  element={<News key="sports" category="sports" />} />
            <Route exact path="/health"  element={<News key="health" category="health" />} />
            <Route exact path="/business"  element={<News key="business" category="business" />} />
            <Route exact path="/entertainment"  element={<News key="entertainment" category="entertainment" />} />
            <Route exact path="/politics"  element={<News key="politics" category="politics" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
