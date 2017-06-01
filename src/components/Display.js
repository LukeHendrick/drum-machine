import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className='screen'>
        <p className='type-text'>{this.props.children}</p>
      </div>
    )
  }
}

export default Display;
