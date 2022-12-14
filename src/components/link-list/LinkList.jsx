import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./style";

const LinkList = ({ classes, links }) => (
  <div>
    <ul className={classes.container}>
      {links.map(({ Icon, to, newTab, text }, index) => (
        <li key={index}>
          <a
            href={to}
            target={newTab ? "_blank" : "_self"}
            rel={"noreferrer"}
            className={classes.link}>
            <Icon />
            <span className={classes.linkText}>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default withStyles(styles)(LinkList);
