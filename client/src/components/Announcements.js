import React, { Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const announcementStyles = {
  time: {
    fontSize: "20px",
    color: "#5dfdff"
  },
  listItem: {
    fontSize: "30px",
    color: "#5dfdff"
  }
}


const Announcements = (props) => {
  const { announcements, classes } = props
  return (
    <List>
      { announcements.reverse().slice(0, 7).map((announcement, key) => (
        <ListItem key={key}>
          <ListItemText secondary={
            <Fragment>
              <Typography component="span" className={classes.listItem}>
               {announcement.text && announcement.text.replace(/(:[^:\s]*:)|(<[^>\s]*>)/g, '').trim()}
              </Typography>
              <Typography className={classes.time}>
                {new Date(announcement.ts * 1000).toLocaleTimeString()}
              </Typography>
            </Fragment>
          }/>
        </ListItem>
      )) }
    </List>
  );
}

export default withStyles(announcementStyles)(Announcements);
