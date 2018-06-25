import React, { Component } from 'react';
import Article from './article.js';
import Aside from './aside.js';

class Main extends Component {
  render() {
    return(
      <div class="wrap grid-wrapper">
      <Article />
      <Aside />
      </div>
    );
  }
}

export default Main;