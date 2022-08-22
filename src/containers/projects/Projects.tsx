// @ts-nocheck
import React from "react";
import { Animated } from "../../components";
import { Typography, Fade } from "@mui/material";

function Projects() {
	return (
		<>
			<Fade in timeout={1000}>
				<Typography
					variant='h4'
					color='textPrimary'
					style={{ fontWeight: "bold" }}
				>
					<Animated>Projects</Animated>
				</Typography>
			</Fade>
		</>
	);
}
export default Projects;
