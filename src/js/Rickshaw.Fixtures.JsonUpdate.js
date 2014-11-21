Rickshaw.namespace('Rickshaw.Fixtures.Json.Update');

Rickshaw.Fixtures.Json.Update = function(timeInterval) {
    var addData;
    var time;
    var value;
    var index = 0;
    this.addData = function(data,url) {
	d3.json(url, function(error, parsed) {
	    index = 0;
     	    data.forEach( function(series) {	    
		series.length = 0;
		parsed.data[0].intervals.row.forEach(function(d) {
		    time = Math.floor(d.t);
		    value = d.v[index];
		    series.push( {x: time, y: value} );
		});
		index++;
	    });
    	});
    };
};

