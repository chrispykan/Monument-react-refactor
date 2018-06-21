import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/blog.css';
import './css/style.css';
import Header from './header.js';
import Nav from './nav.js';


class App extends Component {
  render() {
    return (
      <div className="blog-page">
      <Header />
      <Nav/>
      </div>
    );
  }
}

export default App;
