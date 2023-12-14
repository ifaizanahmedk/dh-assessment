import React from "react";
import { Card as AntCard } from "antd";
import PropTypes from "prop-types";

const Card = (props) => {
  return <AntCard>{children}</AntCard>;
};

Card.propTypes = {};

export default Card;
