import React, { Component, Fragment } from "react";
import Announcements from "./components/Announcements";
import Schedule from "./components/Schedule";
import { Grid } from '@material-ui/core'


class App extends Component {
  state = {
    announcements: [],
    schedule:[{id:1, text: "hello"}, {id:2, text: "world"}]
  };

  refresh = () => {
    fetch("http://localhost:5000/api/announcements")
      .then(response => response.json())
      .then(result => {
        this.setState({
          announcements: result.log
        })
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.refresh()
    setInterval(this.refresh, 5000)
  }

  render() {
    return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Announcements announcements={this.state.announcements} />
          </Grid>
          <Grid item>
            <Schedule messages={this.state.schedule} />
          </Grid>
        </Grid>
    );
  }
}


export default App;
