'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	componentDidMount: function () {
		Highcharts.setOptions({colors: ['rgb(166,206,227)','rgb(31,120,180)','rgb(178,223,138)','rgb(51,160,44)','rgb(251,154,153)','rgb(227,26,28)','rgb(253,191,111)','rgb(255,127,0)','rgb(202,178,214)','rgb(106,61,154)']});
		$('#socket_chart').highcharts({
			chart: {
					type: 'line',
					zoomType: 'y'
			},
			title: {
					text: '100 message(s) per socket (lower is better)'
			},
			subtitle: {
					text: 'Windows_NT win32 x64 6.2.9200'
			},
			xAxis: {
					title: {
						text:'Number of sockets'
					}
			},
			yAxis: {
					title: {
							text: 'Time(seconds)'
					}
			},
			series: [{"name":"engine.io","lineWidth":1,"data":[[1,0.13813304901123047],[25000,70.02608704566956],[50000,150.56325221061707],[75000,230.6990249156952],[100000,638.6028079986572]]},{"name":"faye","lineWidth":1,"data":[[1,0.1582961082458496],[25000,85.06349301338196],[50000,174.80246591567993],[75000,263.1010580062866],[100000,341.3560268878937]]},{"name":"primus_engine.io","lineWidth":1,"data":[[1,0.4798250198364258],[25000,110.09547400474548],[50000,224.97953605651855],[75000,747.2488839626312],[100000,1150.7764830589294]]},{"name":"primus_faye","lineWidth":1,"data":[[1,0.19319486618041992],[25000,123.71367907524109],[50000,257.75497579574585],[75000,386.2208249568939],[100000,520.1780779361725]]},{"name":"primus_socket.io","lineWidth":1,"data":[[1,0.2504088878631592],[25000,129.39305591583252],[50000,260.2693819999695],[75000,393.2368199825287],[100000,527.048045873642]]},{"name":"primus_sockjs","lineWidth":1,"data":[[1,0.2426900863647461],[25000,159.10842990875244],[50000,319.87158393859863],[75000,464.3382980823517],[100000,626.6034281253815]]},{"name":"primus_websockets","lineWidth":1,"data":[[1,0.19027018547058105],[25000,115.14632296562195],[50000,239.5975968837738],[75000,365.8227951526642],[100000,458.8659658432007]]},{"name":"socket.io","lineWidth":1,"data":[[1,0.18517804145812988],[25000,126.34303998947144],[50000,273.6571707725525],[75000,379.33140993118286],[100000,504.6554729938507]]},{"name":"sockjs","lineWidth":1,"data":[[1,0.10114693641662598],[25000,115.79992985725403],[50000,233.08337688446045],[75000,347.3627841472626],[100000,460.3710479736328]]},{"name":"ws","lineWidth":1,"data":[[1,0.14113497734069824],[25000,94.77279496192932],[50000,171.8866720199585],[75000,271.96254801750183],[100000,356.60363507270813]]}]
	 	});

		$('#primus_http_chart').highcharts({
			chart: {
					type: 'line',
					zoomType: 'y'
			},
			title: {
					text: 'Response time with two concurrent users (lower is better)'
			},
			subtitle: {
					text: 'Windows_NT win32 x64 6.2.9200'
			},
			xAxis: {
					title: {
						text:'Number of requests'
					}
			},
			yAxis: {
					title: {
							text: 'Time(seconds)'
					}
			},
			series: [{"name":"Express HTTP","lineWidth":1,"data":[[100,280],[500,2700],[1000,4900]]},{"name":"Primus WS","lineWidth":1,"data":[[100,250],[500,400],[1000,507]]}]
	 	});
	},
	render: function () {
		return (
			<div className="container">
				<h2>Websocket technologies benchmarks</h2>
				<p>We have created a node realtime engine benchmarking tool called <a href="https://github.com/FREEZX/SockBench">SockBench</a> which generated the following graph.<br/>
				A writeup about our methods and conclusions is available in this <a href="https://www.dropbox.com/s/6dgnftmjcjf2g5o/bare_conf.pdf">scientific paper</a>.</p>
				<div id="socket_chart">
				</div>
				<p>The paper shows that primus is the best choice due to great performance, considering it offers effortless switching of realtime engines and it implements best practices for all supported engines.</p>
				<p>Nuke.js uses the websockets transformer by default, because it is the fastest transformer available, and does not require sticky sessions on the load balancer.</p>

				<h2>Primus vs HTTP</h2>
				<p>This benchmark measures the needed time to make HTTP requests and Primus requests. We took advantage of primus and kept the connection open for all requests. <br/>
				This highlights the biggest drawback of HTTP, which is that it's not reusing existing connections, but instead makes new connections for every request.</p>
				<div id="primus_http_chart">
				</div>
			</div>
		);
	}
});

module.exports = Home;