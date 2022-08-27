import React from "react";
import { withStyles } from "@mui/styles";
import classNames from "classnames";
import { useActiveAnimation } from "../../../../hooks";

import styles from "./style";

const AnimatedLetter = ({
  classes,
  letter,
  animation,
  animateLetter,
  timeout,
}) => {
  const [activeAnimation, setActiveAnimation] = useActiveAnimation(timeout);

  return (
    <span
      role={"presentation"}
      onMouseEnter={() => animateLetter && setActiveAnimation(true)}
      className={classNames(activeAnimation && animation, classes.letter)}>
      {letter}
    </span>
  );
};

export default withStyles(styles)(AnimatedLetter);
