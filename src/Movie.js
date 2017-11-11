import React, { Component } from 'react'
import './Movie.css';

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h1> This is Movie Component</h1>
        <MoviePoster/>
      </div>
    )
  }
}

class MoviePoster extends Component {
    render() {
        return (
            <div>
               <h2>This is Poster Component!</h2> 
            </div>
        );
    }
}
