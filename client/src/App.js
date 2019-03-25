import React, { Component } from "react";
import Announcements from "./components/Announcements";
import Schedule from "./components/Schedule";
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

const appStyles = {
  gridItem: {
    paddingRight: "100px",
    paddingLeft: "100px"
  }
}


class App extends Component {
  state = {
    announcements: [],
    schedule:[{
      text:"Check In",
      time: new Date(2019, 2, 30, 9)
    },
    {
      text:"Opening Ceremony",
      time: new Date(2019, 2, 30, 10)
    },
    {
      text:"Hacking Begins",
      time: new Date(2019, 2, 30, 11)
    },
    {
      text:"Lunch",
      time: new Date(2019, 2, 30, 12)
    },
    {
      text:"Dinner",
      time: new Date(2019, 2, 30, 19)
    },
    {
      text:"Midnight Snack",
      time: new Date(2019, 2, 31, 0)
    },
    {
      text:"Breakfast",
      time: new Date(2019, 2, 31, 9)
    },
    {
      text:"Hacking Ends",
      time: new Date(2019, 2, 31, 11)
    },
    {
      text:"Lunch",
      time: new Date(2019, 2, 31, 12)
    },
    {
      text:"Closing Ceremony",
      time: new Date(2019, 2, 31, 15)
    }]
  };

  refresh = () => {
    fetch("http://localhost:5000/api/announcements")
      .then(response => response.json())
      .then(result => {
        this.setState({
          announcements: result.log
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.refresh()
    setInterval(this.refresh, 5000)
  }

  render() {
    const { classes } = this.props
    return (
        <Grid
          container
          direction="row"
          justify="center"
        >
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
