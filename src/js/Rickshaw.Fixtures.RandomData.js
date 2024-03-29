Rickshaw.namespace('Rickshaw.Fixtures.RandomData');

Rickshaw.Fixtures.RandomData = function(timeInterval) {
    var addData;
    
    // update every 60 seconds. JS seems to take time in ms
    timeInterval = timeInterval || 60000;

    var lastRandomValue = 0;

    var timeBase = Math.floor(new Date().getTime() / 1000);

    this.addData = function(data) {

	var randomValue = Math.random() * 10000000000 + 15 + lastRandomValue;
	var index = data[0].length;

	var counter = 1;

	data.forEach( function(series) {
	    var randomVariance = Math.random() * 20;
	    var v = randomValue / 25  + counter++ +
		(Math.cos((index * counter * 11) / 960) + 2) * 15 +
		(Math.cos(index / 7) + 2) * 7 +
		(Math.cos(index / 17) + 2) * 1;

	    series.push( { x: (index * timeInterval) + timeBase, y: v + randomVariance } );
	} );

	lastRandomValue = randomValue * 0.85;
    };

    this.removeData = function(data) {
	data.forEach( function(series) {
	    series.shift();
	} );
	timeBase += timeInterval;
    };
};

