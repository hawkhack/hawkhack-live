import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ListGroup, ListGroupItem, ListGroupItemText, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Announcements from "./components/Announcements";
import Schedule from "./components/Schedule";
// import uuid from "uuid";
import request from "request";

import "./App.css";

class App extends Component {
  state = {
    announcements: [],
    schedule: []
  };

  refresh = () => (
    this.setState({
        start: 0
    }, () => {
      request({
        uri: "http://hawkhack.io/api/announcements",
        method: "GET",
        json: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
    }, (error, response, body) => {
      if(error) throw error;
      console.log(response);
      if (body.statusCode === 200) {
      this.setState({
          annoucements: body.body,
          schedule:[{id:1, text: "hello"}, {id:2, text: "world"}]
      });
    }
    });
    })
)

  componentWillMount() {
    this.setState({ announcements: [], schedule: [] })
        this.refresh();
        setInterval(this.refresh, 5000);
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
