import React, { Component } from "react";
import PropTypes from "prop-types";

export class ListItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    const { text } = this.props.message;
    return (
      <div style={this.getStyle()}>
        <p>{text}</p>
      </div>
    );
  }
}

// PropTypes
ListItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default ListItem;
