// @ts-nocheck
import React, { ReactElement } from "react";
import { withStyles } from "@mui/styles";
import { Scrollbars } from "react-custom-scrollbars";
import Fade from "@mui/material/Fade";
import classNames from "classnames";
import { Header, Footer } from "../../components";
import styles from "./style";

require("typeface-roboto");

interface Props {
  classes: any;
  children: ReactElement;
  noBackground: boolean;
}

const LayoutHeader = ({ classes, children, noBackground }: Props) => (
	<Scrollbars
		autoHide
		autoHideTimeout={1000}
		autoHideDuration={200}
		renderView={(props) => <div {...props} className={classes.scrollFix} />}
		className={classes.container}
	>
		<div
			className={classNames(
				classes.pageContainer,
				!noBackground && classes.background
			)}
		>
			<Header />
			<Fade in mountOnEnter unmountOnExit>
				<main className={classes.content}>{children}</main>
			</Fade>
			<Footer />
		</div>
	</Scrollbars>
);

export default withStyles(styles)(LayoutHeader);
