#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  if (err) console.log(err);
  
  conn.createChannel(function(err, ch) {
    var q = 'hello';
    var msg = 'Hello World!';

    ch.assertQueue(q, {durable: false});
    setInterval(() => {
      ch.sendToQueue(q, new Buffer(msg));
      console.log(" [x] Sent %s", msg);
    }, 1000)
  });
});