
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize=5
  Country="in"
  render() {
    return (
      <div>
        <Router>
      <NavBar/>
      <Routes>
          <Route exact  path="/" element={<News key="general" pagesize={this.pageSize} country={this.Country} category="general" />}/>
          <Route exact path="general" element={<News key="general1" pagesize={this.pageSize} country={this.Country} category="general" />}/>
          <Route exact path="/business" element={<News key="business" pagesize={this.pageSize} country={this.Country} category="business" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pagesize={this.pageSize} country={this.Country} category="entertainment" />}/>
          <Route exact path="/health" element={<News key="health" pagesize={this.pageSize} country={this.Country} category="health" />}/>
          <Route exact path="/science" element={<News key="science" pagesize={this.pageSize} country={this.Country} category="science" />}/>
          <Route exact path="/technology" element={<News key="technology"  pagesize={this.pageSize} country={this.Country} category="technology" />}/>
          <Route exact path="/sports" element={<News key="sports" pagesize={this.pageSize} country={this.Country} category="sports" />}/>
          
        </Routes>
      </Router>
      </div>
    )
  }
}
