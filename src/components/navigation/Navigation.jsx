import React from "react";
import { withStyles } from "@mui/styles";
import MainNavigation from "./main";
import options from "./content";
import styles from "./style";

const Navigation = ({ classes, width }) => {
  return (
    <div className={classes.container}>
      <MainNavigation options={options} />
    </div>
  );
};

export default withStyles(styles)(Navigation);
