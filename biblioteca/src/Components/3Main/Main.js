import React, { Component } from 'react';
import BookShelf from './bookShelf/BookShelf';
import CatBar from './bookShelf/CatBar'

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <CatBar />
      </div>
    );
  }
}

export default Main;