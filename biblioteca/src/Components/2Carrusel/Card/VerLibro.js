import React, { Component } from 'react';
import '../Carrusel.css';

class VerLibro extends Component{
  render() {
    return (
      <div className='VerLibro' style={this.props.color}>
        <button style={this.props.color}>Ver Libro</button>
      </div>
    );
  }
}

export default VerLibro;