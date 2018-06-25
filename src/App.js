import React, { Component } from 'react';
import './css/blog.css';
import './css/style.css';
import Header from './header.js';
import Nav from './nav.js';
import Main from './main.js';
import Comment from './commentForm.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="blog-page">
      <Header />
      <Nav />
      <Main />
      <Comment/>
      <Footer/>
      </div>
    );
  }
}

export default App;
