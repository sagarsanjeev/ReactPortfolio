/* eslint-disable no-unused-vars */
import React, { useState, createRef } from "react";
import ColorThief from "colorthief";
import { withStyles } from "@mui/styles";
import styles from "./style";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { Typography, Avatar } from "@mui/material";
import { Animated } from "..";

function ExperinceCard({ classes, cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const imgRef = createRef();
  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }
  const toggle = () => setisOpen(!isOpen);

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const ExpCardBody = ({ data, title }) => {
    return (
      <>
        <div
          style={{
            fontSize: "22px",
            fontFamily: "Roboto",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "0rem",
            marginBottom: "10px",
          }}>
          <Animated>{title}</Animated>
        </div>
        <div
          style={{
            fontSize: "0.80rem",
            fontFamily: "Roboto",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "0rem",
            marginBottom: "10px",
          }}>
          <GetDescBullets descBullets={data} />
        </div>
      </>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} style={{ marginBottom: "3px" }}>
            {item}
          </li>
        ))
      : null;
  };

  return (
    <>
      <Card style={{ margin: "20px 20px" }}>
        <CardHeader style={{ background: rgb(colorArrays) }}>
          <Row>
            <Col md={3}>
              <Avatar
                style={{ height: "55px", width: "55px", background: "white" }}>
                <img
                  ref={imgRef}
                  src={cardInfo.companylogo}
                  alt="avatar"
                  style={{
                    height: "50px",
                    width: "50px",
                    objectFit: "contain",
                    padding: cardInfo.type === "idea" ? "5px" : "0px",
                  }}
                  onLoad={() => getColorArrays()}
                />
              </Avatar>
            </Col>
            <Col>
              <Row>
                <Typography
                  color="textPrimary"
                  style={{
                    fontSize: "0.88rem",
                    fontFamily: "Roboto",
                    color: "white",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "0rem",
                  }}>
                  {cardInfo.company}
                </Typography>
              </Row>
              <Row>
                <Typography
                  color="textPrimary"
                  style={{
                    fontSize: "0.88rem",
                    fontFamily: "Roboto",
                    color: "white",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: "0rem",
                  }}>
                  {cardInfo.role}
                </Typography>
              </Row>
              <Row>
                <Typography
                  color="textPrimary"
                  style={{
                    fontSize: "0.80rem",
                    fontFamily: "Roboto",
                    color: "white",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: "0rem",
                  }}>
                  {cardInfo.date}
                </Typography>
              </Row>
            </Col>
          </Row>
        </CardHeader>
        <CardBody
          style={{
            height: "170px",
            padding: "10px",
          }}>
          <Typography
            color="textPrimary"
            style={{
              fontSize: "0.88rem",
              fontFamily: "Roboto",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "0rem",
            }}>
            {cardInfo.desc}
          </Typography>
          <Button size={"sm"} onClick={toggle}>
            Trigger
          </Button>
        </CardBody>
      </Card>
      {isOpen && (
        <Modal isOpen={isOpen} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>
            <Typography
              color="textPrimary"
              style={{
                fontSize: "0.88rem",
                fontFamily: "Roboto",
                color: "black",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "0rem",
              }}>
              {cardInfo.company}
            </Typography>
            <Typography
              color="textPrimary"
              style={{
                fontSize: "0.88rem",
                fontFamily: "Roboto",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "0rem",
              }}>
              <b>Location</b>:&nbsp;
              {cardInfo.location}
            </Typography>
          </ModalHeader>
          <ModalBody className={classes.content}>
            <Scrollbars style={{ width: "100%", height: 300 }}>
              {cardInfo.highlights && (
                <ExpCardBody data={cardInfo.highlights} title="Highlights" />
              )}
              {cardInfo.achivements && (
                <ExpCardBody data={cardInfo.achivements} title="Achivements" />
              )}
              {cardInfo.roles && (
                <ExpCardBody data={cardInfo.roles} title="Roles" />
              )}
            </Scrollbars>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" size={"sm"} onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}
export default withStyles(styles)(ExperinceCard);
