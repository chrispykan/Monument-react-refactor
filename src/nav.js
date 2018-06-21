import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
    <div>
		<a className="hamburger" href=""><i className="fa fa-bars"></i></a>
		<ul>
		<li><a href="index.html#about">About</a></li>
		<li><a href="index.html#gallery">Gallery</a></li>
		<li><a href="blog.html">Blog</a></li>
		<li><a href="index.html#contact">Contact</a></li>
		</ul>
	</div>
    );
  }
}

export default Nav;
