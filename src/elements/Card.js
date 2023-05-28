import React from "react";

import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);
  return (
    <Fade buttom delay={props.delayInMS}>
      <div className={className.join(" ")}>
        <div
          //   menampilkan has-shadow dengan tinery progmatical
          className={`tiles-item-inner ${props.hasShadow ? "has-shadow" : ""}`}
        >
          {props.children}
        </div>
      </div>
    </Fade>
  );
}

Card.propTypes = {
  delayInMS: propTypes.number,
  hasShadow: propTypes.bool,
  className: propTypes.string,
};
