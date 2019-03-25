import React from "react";
import { List, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Announcements = (props) => {
  const { announcements } = props
  return (
    <List style={{maxWidth: "1000px",fontSize: "50px"}}>
      { announcements.reverse().slice(0, 7).map((announcement, key) => (
        <ListItem key={key}>
          <ListItemText disableTypography primary={<Typography style={{fontSize:"50px", color: "#5dfdff"}}>{announcement.text && announcement.text.replace(/(:[^:\s]*:)|(<[^>\s]*>)/g, '').trim()}</Typography>}  
            secondary={
              <Typography style={{fontSize:"40px", color: "#fff"}}>
                {new Date(announcement.ts * 1000).toLocaleTimeString()}
              </Typography>
          }/>
        </ListItem>
      )) }
    </List>
  );
}

export default (Announcements);
