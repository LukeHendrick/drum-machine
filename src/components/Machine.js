import React, { Component } from 'react';
import Pad from './Pad.js';
import Display from './Display.js'
import kick from '../audio/kick-808.wav';
import clap from '../audio/clap-808.wav';
import cowbell from '../audio/cowbell-808.wav';
import hihat from '../audio/hihat-808.wav';
import crash from '../audio/crash-808.wav';
import perc from '../audio/perc-808.wav';
import snare from '../audio/snare-808.wav';
import tom from '../audio/tom-808.wav';
import open from '../audio/openhat-808.wav';

class Machine extends Component {
  constructor(props) {
    super(props);

    this.state= {
      drum: 'Drum Machine'
    };
    this.updateDrum = this.updateDrum.bind(this);
  }

  updateDrum(value) {
    this.setState({
      drum: value
    })
  }

  render() {

    var drums = [
      {'name': '808 Tom',
       'sound': new Audio(tom),
       'key': '7'},
      {'name': '808 Perc',
       'sound': new Audio(perc),
       'key': '8'},
      {'name': '808 Cowbell',
       'sound': new Audio(cowbell),
       'key': '9'},
      {'name': '808 ClosedHH',
       'sound': new Audio(hihat),
       'key': '4'},
      {'name': '808 OpenHH',
       'sound': new Audio(open),
       'key': '5'},
      {'name': '808 Crash',
       'sound': new Audio(crash),
       'key': '6'},
      {'name': '808 Kick',
       'sound': new Audio(kick),
       'key': '1'},
      {'name': '808 Snare',
       'sound': new Audio(snare),
       'key': '2'},
      {'name': '808 Clap',
       'sound': new Audio(clap),
       'key': '3'},
    ]


    return (
      <div className='box'>
        <ul  className='drumRow'>
          {drums.map((drum, index) =>
          <Pad updateDrum={this.updateDrum} key={drum.key} drum={drum} />
          )
          }
        </ul>
        <ul className='controlRow'>
            <Display>{this.state.drum}</Display>
        </ul>
      </div>
    )
  }
}



export default Machine;
