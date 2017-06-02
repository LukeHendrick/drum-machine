import React, { Component } from 'react';
import Pad from './Pad.js';
import Display from './Display.js';
import Button from 'react-bootstrap/lib/Button';
import _808 from '../audio/_808';
import _acou from '../audio/_acou';
import _empty from '../audio/Empty';


class Machine extends Component {
  constructor(props) {
    super(props);

    this.state= {
      drum: 'Drum Machine',
      kit: [_empty[0], _empty[1]],
      vol: 0,
      power: false
    };
    this.updateDrum = this.updateDrum.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVolChange = this.handleVolChange.bind(this);
    this.powerChange = this.powerChange.bind(this)
  }

  powerChange(e) {
    if (!this.state.power) {
      this.setState({
        power: true,
        kit: [_808[0], _808[1]],
        vol: 1,
      })
    } else {
      this.setState({
        drum: 'Drum Machine',
        kit: [_empty[0], _empty[1]],
        power: false
      })
    }
  }

  handleVolChange(e) {
    this.setState({
      vol: e.target.value
    })
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
          <Pad updateDrum={this.updateDrum} key={drum.key} drum={drum} vol={this.state.vol}>{drum.key}</Pad>
          )
          }
        </ul>
        <ul className='controlRow'>
          <Display>{this.state.drum}</Display>
          <label className='labelCenter'>Volume: {Math.floor(this.state.vol * 100)}</label><input className='volSlider' max='1' min='0' step='.01' type='range' onChange={this.handleVolChange} value={this.state.vol}/>
          <Button onClick={this.handleClick}>{this.state.kit[0]}</Button>
          <label className='powerLabel'>{(this.state.power) ? <p className='onTxt'>ON</p> : <p className='offTxt'>OFF</p>}</label>
          <input onChange={this.powerChange} className='powerSlider' max='1' min='0' step='1' type='range'/>
        </ul>
      </div>
    )
  }
}



export default Machine;
