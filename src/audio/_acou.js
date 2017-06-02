import kick_acou from './kick-acou.wav';
import clap_acou from './clap-acou.wav';
import ride_acou from './ride-acou.wav';
import hihat_acou from './hihat-acou.wav';
import crash_acou from './crash-acou.wav';
import perc_acou from './perc-acou.wav';
import snare_acou from './snare-acou.wav';
import tom_acou from './tom-acou.wav';
import open_acou from './openhat-acou.wav';

var _acou = ['Acoustic', [
  {'name': 'Tom',
   'sound': new Audio(tom_acou),
   'key': '7'},
  {'name': 'Perc',
   'sound': new Audio(perc_acou),
   'key': '8'},
  {'name': 'Ride',
   'sound': new Audio(ride_acou),
   'key': '9'},
  {'name': 'ClosedHH',
   'sound': new Audio(hihat_acou),
   'key': '4'},
  {'name': 'OpenHH',
   'sound': new Audio(open_acou),
   'key': '5'},
  {'name': 'Crash',
   'sound': new Audio(crash_acou),
   'key': '6'},
  {'name': 'Kick',
   'sound': new Audio(kick_acou),
   'key': '1'},
  {'name': 'Snare',
   'sound': new Audio(snare_acou),
   'key': '2'},
  {'name': 'Clap',
   'sound': new Audio(clap_acou),
   'key': '3'},
]
]

export default _acou;
