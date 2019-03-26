import React, { Component } from "react";
import Announcements from "./components/Announcements";
import Schedule from "./components/Schedule";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const appStyles = {
  gridItem: {
    paddingRight: "100px",
    paddingLeft: "100px"
  }
};

class App extends Component {
  state = {
    announcements: [],
    schedule: []
  };

  refresh = () => {
    fetch("http://localhost:5000/api/livedata")
      .then(response => response.json())
      .then(result => {
        this.setState({
          announcements: result.log,
          schedule: result.schedule
        });
      })
      .catch(err => console.log(err));
    console.log(this.state.schedule);
  };

  componentDidMount() {
    this.refresh();
    setInterval(this.refresh, 5000);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" justify="center">
        <Grid item className={classes.gridItem} xs={6}>
          <Announcements announcements={this.state.announcements} />
        </Grid>
        <Grid item className={classes.gridItem} xs={6}>
          <Schedule messages={this.state.schedule} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(appStyles)(App);
