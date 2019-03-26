const { port, token, botToken } = require("./config/config");
const fs = require("fs");
const request = require("request");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/", (req, res) => res.status(200).send("OH YEAH"));

app.get("/api/schedule", (req, res) => {
  delete require.cache[require.resolve('./schedule')];
  var _schedule = require("./schedule");
  var data = {
    schedule: _schedule
  };
  res.status(200).json(data);
});

app.get("/api/livedata", (_req, _res) => {
  var log = [];
  var data = {};
  delete require.cache[require.resolve('./schedule')];
  var _schedule = require("./schedule");

  var options = {
    url: "https://slack.com/api/groups.history",
    qs: {
      token: token,
      channel: "GH7J5C9FD"
    }
  };

  request(options, (err, res, body) => {
    if (err) console.log(err);
    var messages = JSON.parse(body).messages;
    messages.forEach(element => {
      if (element.type == "message") {
        log.unshift({
          text: element.text,
          ts: element.ts
        });
      }
    });
    data = {
      status: 200,
      log: log,
      schedule: _schedule
    };
    return _res.status(200).json(data);
  });
});

const APP_PORT = 5000;

app.listen(APP_PORT, () => {
  console.log(`Server is listening on ${APP_PORT}`);
});
