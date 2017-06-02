import React, { Component } from 'react';
import Pad from './Pad.js';
import Display from './Display.js'
import Button from 'react-bootstrap/lib/Button'
import _808 from '../audio/_808'
import _acou from '../audio/_acou'


class Machine extends Component {
  constructor(props) {
    super(props);

    this.state= {
      drum: 'Drum Machine',
      kit: [_808[0], _808[1]]
    };
    this.updateDrum = this.updateDrum.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.kit[0] === '808') {
    this.setState({
      kit: [_acou[0], _acou[1]]
    })
  } else {
    this.setState({
      kit: [_808[0], _808[1]]
    })
  }
  }

  updateDrum(value) {
    this.setState({
      drum: value
    })
  }

  render() {

    var drums = this.state.kit[1]
    return (
      <div className='box'>
        <ul  className='drumRow'>
          {drums.map((drum, index) =>
          <Pad updateDrum={this.updateDrum} key={drum.key} drum={drum}>{drum.key}</Pad>
          )
          }
        </ul>
        <ul className='controlRow'>
          <Display>{this.state.drum}</Display>
        <Button onClick={this.handleClick}>{this.state.kit[0]}</Button>
        </ul>
      </div>
    )
  }
}



export default Machine;
