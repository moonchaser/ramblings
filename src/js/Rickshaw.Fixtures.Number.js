Rickshaw.namespace('Rickshaw.Fixtures.Number');

Rickshaw.Fixtures.Number.formatKMBT = function(y) {
	var abs_y = Math.abs(y);
	if (abs_y >= 1000000000000)   { return y / 1000000000000 + "T" }
	else if (abs_y >= 1000000000) { return y / 1000000000 + "B" }
	else if (abs_y >= 1000000)    { return y / 1000000 + "M" }
	else if (abs_y >= 1000)       { return y / 1000 + "K" }
	else if (abs_y < 1 && y > 0)  { return y.toFixed(2) }
	else if (abs_y === 0)         { return '' }
	else                      { return y }
};

Rickshaw.Fixtures.Number.formatBase1024KMGTP = function(y) {
    var abs_y = Math.abs(y);
    if (abs_y >= 1125899906842624)  { return Math.floor(y / 1125899906842624) + "P" }
    else if (abs_y >= 1099511627776){ return Math.floor(y / 1099511627776) + "T" }
    else if (abs_y >= 1073741824)   { return Math.floor(y / 1073741824) + "G" }
    else if (abs_y >= 1048576)      { return Math.floor(y / 1048576) + "M" }
    else if (abs_y >= 1024)         { return Math.floor(y / 1024) + "K" }
    else if (abs_y < 1 && y > 0)    { return Math.floor(y).toFixed(2) }
    else if (abs_y === 0)           { return '' }
    else                        { return y }
};

// bandwidth
Rickshaw.Fixtures.Number.BWformatBase1024KMGTP = function(y) {
    var abs_y = Math.abs(y);
    if (abs_y >= 1125899906842624)  { return Math.floor(y / 1125899906842624) + "Pbps" }
    else if (abs_y >= 1099511627776){ return Math.floor(y / 1099511627776) + "Tbps" }
    else if (abs_y >= 1073741824)   { return Math.floor(y / 1073741824) + "Gbps" }
    else if (abs_y >= 1048576)      { return Math.floor(y / 1048576) + "Mbps" }
    else if (abs_y >= 1024)         { return Math.floor(y / 1024) + "Kbps" }
    else if (abs_y < 1 && y > 0)    { return Math.floor(y).toFixed(2) }
    else if (abs_y === 0)           { return '' }
    else                        { return y }
};
