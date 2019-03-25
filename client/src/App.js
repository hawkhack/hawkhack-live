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
      time: new Date(2019, 2, 25, 2,14),
      location: "SC Main Enterance"
    },
    {
      text:"Opening Ceremony",
      time: new Date(2019, 2, 30, 10),
      location: "SC Ballrooms ABC"
    },
    {
      text:"Hacking Begins",
      time: new Date(2019, 2, 30, 11),
      location: ""
    },
    {
      text:"Team Building Activity",
      time: new Date(2019, 2, 30, 11),
      location: "SC Dining Hall"
    },
    {
      text:"Lunch",
      time: new Date(2019, 2, 30, 11, 30),
      location: "SC Cafeteria"
    },
    {
      text:"Workshop 01",
      time: new Date(2019, 2, 30, 12, 30),
      location: "SC Dining"
    },
    {
      text:"Workshop 02",
      time: new Date(2019, 2, 30, 14),
      location: "SC Dining"
    },
    {
      text:"Workshop 03",
      time: new Date(2019, 2, 30, 15, 15),
      location: "SC Dining"
    },
    {
      text:"Workshop 04",
      time: new Date(2019, 2, 30, 17),
      location: "SC Dining"
    },
    {
      text:"Dinner",
      time: new Date(2019, 2, 30, 19),
      location: "SC Cafeteria"
    },
    {
      text:"Gaming Area Opens",
      time: new Date(2019, 2, 30, 20, 45),
      location: "2nd Floor"
    },
    {
      text:"Cup Stacking",
      time: new Date(2019, 2, 30, 20, 45),
      location: "N/A"
    },
    {
      text:"Nerf Guns Fights",
      time: new Date(2019, 2, 30, 22),
      location: "N/A"
    },
    {
      text:"Midnight Snack",
      time: new Date(2019, 2, 31, 0),
      location: "SC Cafeteria"
    },
    {
      text:"Slideshow Karaoke",
      time: new Date(2019, 2, 31, 1),
      location: "DSC Dining"
    },
    {
      text:"Breakfast",
      time: new Date(2019, 2, 31, 9),
      location: "SC Cafeteria"
    },
    {
      text:"Lunch",
      time: new Date(2019, 2, 31, 12),
      location: "SC Cafeteria"
    },
    {
      text:"Closing Ceremony",
      time: new Date(2019, 2, 31, 14),
      location: "SC Ballrooms"
    },
    {
      text:"HawkHack 2019 Ends",
      time: new Date(2019, 2, 31, 16),
      location: ""
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
