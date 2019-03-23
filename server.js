const { port, token, botToken } = require("./config/config");
const request = require("request");
const express = require("express");
const { RTMClient } = require("@slack/client");
var fs = require("fs");

const app = express();

//get backlog of announcements
log = [];

var options = {
  url: "https://slack.com/api/groups.history",
  qs: {
    token: token,
    channel: "GH7J5C9FD"
  }
};

request(options, (err, res, body) => {
  if (err) console.log(err);
  var d = new Date(0);
  var messages = JSON.parse(body).messages;
  messages.forEach(element => {
    d.setUTCSeconds(element.ts);
    if (element.type == "message") {
      log.unshift({
        text: element.text,
        time: `${d.getHours()}:${d.getMinutes()}`
      });
    }
  });
  history = {
    log: log
  };
  fs.writeFile("announcements.json", JSON.stringify(history), "utf8", err => {
    if (err) console.log(err);
    else console.log("message logged");
  });
});

//start RTM to read messages in realtime
const rtm = new RTMClient(botToken);
rtm.start();
console.log("RTM Started");

//channel id GH7J5C9FD

rtm.on("message", msg => {
  var d = new Date(0);
  d.setUTCSeconds(msg.event_ts);
  console.log(`(channel: ${msg.channel}) ${msg.user} says: ${msg.text} | Time= ${d.getHours()}:${d.getMinutes()}`);
  console.log(d.getTime());

  message = {
    text: msg.text,
    time: `${d.getHours()}:${d.getMinutes()}`
  };
  log.push(message);
  history = {
    log: log
  };
  fs.writeFile("announcements.json", JSON.stringify(history), "utf8", err => {
    if (err) console.log(err);
    else console.log("message logged");
  });
});
