import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import styles from "./style";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { Row, Col } from "reactstrap";

function ProjectCard({ classes, cardInfo }) {
  const [isFlipped, setisFlipped] = useState(false);
  const toggle = () => setisFlipped(!isFlipped);

  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 320,
          marginLeft: "20px",
          marginBottom: "8px",
        }}>
        <CardContent sx={{ height: 280 }}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
              <CardMedia
                component="img"
                alt={cardInfo.name}
                height="140"
                image={cardInfo.image}
              />
              <Typography gutterBottom variant="h5" component="div">
                {cardInfo.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardInfo.shortDescription}
              </Typography>
            </div>
            <div>
              <Row>
                <Col>{cardInfo.description}</Col>
              </Row>{" "}
              <br />
              <Row>
                <Col>
                  <b>Technologies Used</b>
                </Col>
                <Col>{cardInfo.techStack.join(", ")}</Col>
              </Row>
            </div>
          </ReactCardFlip>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toggle}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <div style={{ height: "10px" }}></div>
    </>
  );
}

export default withStyles(styles)(ProjectCard);
