Rickshaw.namespace('Rickshaw.Fixtures.Update');

Rickshaw.Fixtures.Update = function(timeInterval) {
    var addData;
    var time;
    var value;
    this.addData = function(data) {
	var index = 0;
     	data.forEach( function(series) {
	    d3.tsv("graph.tsv", function(points) {
		series.length = 0;
		index++;
		points.forEach(function(d) {
		    time = Math.floor(d.time);
		    if (index == 1) {
			value = Math.floor(d.value1);
		    }
		    else if (index == 2) {
			value = Math.floor(d.value2);
		    }
		    series.push( {x: time, y: value} );
		});
	    });
    	} );
    };

    this.removeData = function(data) {
	data.forEach( function(series) {
	    series.shift();
	} );
    };
};

