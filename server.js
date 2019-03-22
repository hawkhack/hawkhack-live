const {port, token}= require('./config/config');
const express = require('express');
const { RTMClient } = require('@slack/client');
var fs = require("fs");

const app = express();

const rtm = new RTMClient(token);
rtm.start();
log =[];

rtm.on('message',(msg)=>{
    var d = new Date(0);
    d.setUTCSeconds(msg.event_ts);
    console.log(`(channel: ${msg.channel}) ${msg.user} says: ${msg.text} | Time= ${d.getHours()}:${d.getMinutes()}`);

    message={
        message: msg.text,
        time: `${d.getHours()}:${d.getMinutes()}`
    };
    log.push(message);
    console.log(`message log: ${log}`);
    fs.writeFile("announcements.json", JSON.stringify(log), "utf8", err=>{
        if(err) console.log(err);
        else console.log("message logged");
    });


})
