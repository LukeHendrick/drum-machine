import kick_808 from './kick-808.wav';
import clap_808 from './clap-808.wav';
import cowbell_808 from './cowbell-808.wav';
import hihat_808 from './hihat-808.wav';
import crash_808 from './crash-808.wav';
import perc_808 from './perc-808.wav';
import snare_808 from './snare-808.wav';
import tom_808 from './tom-808.wav';
import open_808 from './openhat-808.wav';

var _808 = ['808', [
  {'name': 'Tom',
   'sound': new Audio(tom_808),
   'key': '7'},
  {'name': 'Perc',
   'sound': new Audio(perc_808),
   'key': '8'},
  {'name': 'Cowbell',
   'sound': new Audio(cowbell_808),
   'key': '9'},
  {'name': 'ClosedHH',
   'sound': new Audio(hihat_808),
   'key': '4'},
  {'name': 'OpenHH',
   'sound': new Audio(open_808),
   'key': '5'},
  {'name': 'Crash',
   'sound': new Audio(crash_808),
   'key': '6'},
  {'name': 'Kick',
   'sound': new Audio(kick_808),
   'key': '1'},
  {'name': 'Snare',
   'sound': new Audio(snare_808),
   'key': '2'},
  {'name': 'Clap',
   'sound': new Audio(clap_808),
   'key': '3'},
]
]


export default _808;
