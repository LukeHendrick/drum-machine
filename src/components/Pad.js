import React, { Component } from 'react';

class Pad extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: this.props.drum.key
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    if (e.key === this.state.key) {
      this.handleClick(e)
    }
  }
  handleClick(e) {
    var sound = this.props.drum.sound
    var key = this.props.drum.name
    sound.pause();
    sound.currentTime = 0
    sound.play();
    this.props.updateDrum(key);
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleKeyPress, false);
  }
  render() {
  return (
    <button className='btn' href='#' onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
      <div className='drumPad'></div>
  </button>
  )
}



}




export default Pad;
