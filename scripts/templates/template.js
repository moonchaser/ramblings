Rickshaw.namespace('{name}');

{name} = function (args) {
    this.render = function() {

        var seriesData = [];
	{seriesinit}
	var jsonupdate = new Rickshaw.Fixtures.Json.Update();
	var palette = new Rickshaw.Color.Palette( { scheme: 'colorwheel' } );

	var graph = new Rickshaw.Graph( {
	    element: document.querySelector('#graph{name}'),
	    width: 1080,
	    height: 300,
	    renderer: 'line',
	    stroke: true,
	    preserve: false,
	    series: [{series},
	    ]
	} );

	graph.render();

	// var preview = new Rickshaw.Graph.RangeSlider( {
	//     graph: graph,
	//     element: document.querySelector('#preview{name}')
	// } );

	var hoverDetail = new Rickshaw.Graph.HoverDetail( {
	    graph: graph,
	    xFormatter: function(x) {
		return new Date(x * 1000).toString();
	    }
	} );

	var legend = new Rickshaw.Graph.Legend( {
	    graph: graph,
	    element: document.querySelector('#legend{name}')
	} );

	var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
	    graph: graph,
	    legend: legend
	} );

	var order = new Rickshaw.Graph.Behavior.Series.Order( {
	    graph: graph,
	    legend: legend
	} );

	var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight( {
	    graph: graph,
	    legend: legend
	} );

	var ticksTreatment = 'glow';

	var xAxis = new Rickshaw.Graph.Axis.Time( {
	    graph: graph,
	    ticksTreatment: ticksTreatment,
	    timeFixture: new Rickshaw.Fixtures.Time.Local()
	} );

	xAxis.render();

	var yAxis = new Rickshaw.Graph.Axis.Y( {
	    graph: graph,
	    tickFormat: Rickshaw.Fixtures.Number.formatKBMT,
	    ticksTreatment: ticksTreatment
	} );

	yAxis.render();

	setInterval( function() {
	    jsonupdate.addData(seriesData,"{url}");
	    graph.update();
	}, 3000 );
	return;
    }
}
