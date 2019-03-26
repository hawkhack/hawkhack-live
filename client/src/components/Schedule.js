import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { List, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const scheduleStyles = {
  time: {
    fontSize: "40px",
    color: "#fff"
  },
  listItem: {
    fontSize: "50px",
    color: "#5dfdff"
  },
  location: {
    color: "#63FCC0",
    fontWeight: "bold"
  }
};

const Schedule = ({ ...props }) => {
  const { messages, classes } = props;
  var msg = [];

  messages.forEach(item => {
    if (new Date(item.time) >= new Date(new Date().getTime() - 10 * 60000))
      msg.push(item);
  });
  return (
    <List>
      {msg.slice(0, 7).map((msg, key) => (
        <ListItem key={key}>
          <ListItemText
            primary={
              <Typography
                component="span"
                style={{ fontSize: "50px", color: "#5dfdff" }}
              >
                {msg.text &&
                  msg.text.replace(/(:[^:\s]*:)|(<[^>\s]*>)/g, "").trim()}
              </Typography>
            }
            secondary={
              <Typography className={classes.time}>
                {new Date(msg.time).toLocaleTimeString()}
                <span className={classes.location}>
                  {" "}
                  {msg.location ? "in " + msg.location : ""}
                </span>
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(scheduleStyles)(Schedule);
