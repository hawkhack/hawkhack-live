import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

class Announcements extends Component {
  render() {
    return this.props.messages.map(message => <ListItem key={message.client_msg_id} message={message} />);
  }
}

// PropTypes
Announcements.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Announcements;
