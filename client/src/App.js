import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Announcements from "./components/Announcements";
import Schedule from "./components/Schedule";
// import uuid from "uuid";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    announcements: [],
    schedule: []
  };

  componentDidMount() {
    axios
      .get("https://slack.com/api/groups.history", {
        params: {
          token: process.env.SLACK_TOKEN,
          channel: process.env.ANN_CHANNEL
        }
      })
      .then(res => {
        // console.log(res.data.messages[1].client_msg_id);
        // var ann = res.data.messages;
        var ann = [{ id: 1, text: "ann1" }, { id: 2, text: "ann2" }];
        var sch = [{ id: 1, text: "sch1" }, { id: 2, text: "sch2" }];
        this.setState({ announcements: ann, schedule: sch });
      });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <Announcements messages={this.state.announcements} />
                  <Schedule messages={this.state.schedule} />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
