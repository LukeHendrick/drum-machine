import React, { Component } from 'react';

class Pad extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: this.props.drum.key,
      active: 'default'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    if (e.key === this.state.key) {
      this.handleClick(e)
      this.setState({
        active: 'active'
      })
    }
  }
  handleClick(e) {
    var sound = this.props.drum.sound
    var key = this.props.drum.name
    sound.volume = this.props.vol
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
    <button className='padBtn' href='#' onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
      <div className={'drumPad active'}><p className='padTxt'>{this.props.children}</p></div>
  </button>
  )
}



}




export default Pad;
