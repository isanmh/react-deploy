import React from "react";

import propTypes from "prop-types";

export default function Button(props) {
  //   const className = ["button button-wide-mobile button-primary button-sm"];
  const className = ["button"];
  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");
  if (props.isBlock) className.push("button-block");

  //   return <button className={`button ${props.className}`}>Button</button>;
  return <button className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
  //   className: propTypes.string,
  isPrimary: propTypes.bool,
  isWideMobile: propTypes.bool,
  isSmall: propTypes.bool,
  isBlock: propTypes.bool,
};
