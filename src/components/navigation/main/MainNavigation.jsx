import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./style";

const MainNavigation = ({ classes, options }) => (
  <ul>
    {options.map((link, i) => (
      <li className={classes.menuContainer} key={i}>
        <Link
          to={link.to}
          className={
            window.location.pathname === link.to
              ? classes.navLinkActive
              : classes.navLink
          }
          // activeClassName={classes.navLinkActive}
        >
          <span>{link.text}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default withStyles(styles)(MainNavigation);
