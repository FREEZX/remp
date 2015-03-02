'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="col-md-3 nuke_symbol">☢</div>
            <div className="col-md-9">
              <h1>Nuke.js</h1>
              <p>Nuke is an extremely fast and performant node.js full-stack web framework, made with realtime in mind.<br />
              It combines the fastest and most powerful technologies to deliver explosive raw performance where you need it!</p>
              <blockquote>
                <p>"Creating and using nuke.js every day is a blast!"</p>
                <footer>Kristijan Trajkovski, creator of nuke.js</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container">
          <h1>What?</h1>
          <p>Traditional HTTP is not a very fast way to do things. Each time you make a request, a connection is opened, headers are sent,
          session data is retrieved, a response is sent back and the connection is closed. </p>
          <p>What if you need to do this many times? Precious bandwidth and time is lost to do all of these steps again and again and again.</p>
          <p>Our framework aims to reduce this by using socket technologies, which keep the connection open. This removes the overhead for opening and closing of the connection,
          and removes the need to retrieve session data for subsequent requests, as they all operate on the same connection. </p>
          <h1>How?</h1>
          <p>
            We are have <a href="http://primus.io">primus</a>, <a href="http://expressjs.com/">express</a>, <a href="http://facebook.github.io/react/">react</a>, <a href="http://www.mongodb.org/">mongodb</a> and <a href="http://redis.io/">redis</a> in our stack.<br/>
            <Link to="benchmarks">Benchmarks</Link> have proven these technologies provide the best raw performance, and provide a great feature set.
          </p>
          <h1>Swag</h1>
          <p>
            Keep this logo on your site to prove you're awesome. <br/>
            <img src="/img/logo.png" />
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Home;