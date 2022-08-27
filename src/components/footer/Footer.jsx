import React from "react";
import { withStyles } from "@mui/styles";

import styles from "./style";

const Footer = ({ classes }) => (
  <footer className={classes.container}>
    Built by &nbsp;&nbsp;
    <a href="https://www.sagarsanjeev.com">Sagar Sanjeev</a>
  </footer>
);

export default withStyles(styles)(Footer);
