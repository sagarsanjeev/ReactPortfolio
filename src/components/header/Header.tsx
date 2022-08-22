// @ts-nocheck
import { Link } from "react-router-dom";
import React from "react";
import { withStyles } from "@mui/styles";
import { Avatar,  Animated , Navigation} from "../../components";

import styles from "./style";
interface Props {
  classes: any;
}

const Header = ({ classes }: Props) => (
	<header className={classes.container}>
		<Link to='/' className={classes.logo}>
			<Animated>
				<Avatar />
			</Animated>
		</Link>
		<div className={classes.navigation}>
			<Navigation/>
		</div>
	</header>
);

export default withStyles(styles)(Header);
