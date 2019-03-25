import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const Schedule = ({...props}) => {
  const { messages } = props
  return messages.map(message => <ListItem key={message.id} message={message} />);
}

// PropTypes
Schedule.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Schedule;
