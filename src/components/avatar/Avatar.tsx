// @ts-nocheck
import React from "react";
import avatarIcon from "../../images/website-icon.png";
import { withStyles } from "@mui/styles";
import styles from "./style";

interface Props {
  classes: any;
}

const Avatar = ({ classes }: Props) => (
	<div className={classes.container}>
		<img src={avatarIcon} className={classes.avatar} alt='avatar' />
	</div>
);

export default withStyles(styles)(Avatar);
