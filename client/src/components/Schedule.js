import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

class Schedule extends Component {
  render() {
    return this.props.messages.map(message => <ListItem key={message.id} message={message} />);
  }
}

// PropTypes
Schedule.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Schedule;
