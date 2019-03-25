import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const scheduleStyles = {
  time: {
    fontSize: "40px",
    color: "#fff"
  },
  listItem: {
    fontSize: "50px",
    color: "#5dfdff"
  }
}

const Schedule = ({...props}) => {
  const { messages, classes } = props
  var msg=[];

  messages.forEach(item => {
    if(item.time >= new Date(new Date().getTime() - 10*60000))
    msg.push(item)
  })
  return (
    <List>
      { msg.slice(0, 7).map((msg, key) => (
        <ListItem key={key}>
          <ListItemText 
            primary={
              <Typography component="span" style={{fontSize:"50px", color: "#5dfdff"}}>
                {msg.text && msg.text.replace(/(:[^:\s]*:)|(<[^>\s]*>)/g, '').trim()}
              </Typography>
            } 
            secondary={
              <Typography className={classes.time}>
                {msg.time.toLocaleTimeString()}
              </Typography>
            }
          />
        </ListItem>
      )) }
    </List>
  );
}


export default withStyles(scheduleStyles)(Schedule);
