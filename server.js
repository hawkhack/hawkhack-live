const { port, token, botToken } = require("./config/config");
const fs = require("fs");
const request = require("request");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/", (req, res) => res.status(200).send("OH YEAH"));

app.get("/api/schedule", (req, res) => {
  var _schedule = require("./schedule");
  var data = {
    schedule: _schedule
  };
  res.status(200).json(data);
});

app.get("/api/announcements", (_req, _res) => {
  var log = [];
  var history = {};

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
    history = {
      status: 200,
      log: log
    };
    return _res.status(200).json(history);
  });
});

const APP_PORT = 5000;

app.listen(APP_PORT, () => {
  console.log(`Server is listening on ${APP_PORT}`);
});
