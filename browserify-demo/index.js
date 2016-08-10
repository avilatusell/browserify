var myUtils = require('./utils.js')
var dateFormat = require('dateformat')

// module.exports.showConsole = showConsole;
// module.exports.oddEvenFormat = oddEvenFormat;
// module.exports.isNumber = isNumber;

var beatles = ["john", "paul", "george", "ringo"];
beatles.forEach (function(item,i){
	var isEven = ( (i+1)%2 === 0 );
	var formattedBeatle = myUtils.oddEvenFormat(item,isEven);
	myUtils.showConsole(formattedBeatle);
})


var now = new Date();

myUtils.showConsole( dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT") )
// Saturday, June 9th, 2007, 5:46:21 PM

// You can use one of several named masks
myUtils.showConsole( dateFormat(now, "isoDateTime") );
// 2007-06-09T17:46:21

// ...Or add your own
dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
myUtils.showConsole( dateFormat(now, "hammerTime") );
// 17:46! Can't touch this!

// When using the standalone dateFormat function,
// you can also provide the date as a string
myUtils.showConsole( dateFormat("Jun 9 2007", "fullDate") );
// Saturday, June 9, 2007

// Note that if you don't include the mask argument,
// dateFormat.masks.default is used
myUtils.showConsole( dateFormat(now) );
// Sat Jun 09 2007 17:46:21

// And if you don't include the date argument,
// the current date and time is used
myUtils.showConsole( dateFormat() );
// Sat Jun 09 2007 17:46:22
