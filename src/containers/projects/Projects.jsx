/* eslint-disable no-unused-vars */
import React from "react";
import { Animated, ProjectCard } from "../../components";
import { Row, Col } from "reactstrap";
import { Typography, Fade } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import p7 from "../../images/p7.png";

function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projectData = [
    {
      name: "Enterprise NLP",
      image: p1,
      shortDescription:
        "Extracting Information from Documents and Assign Accordingly",
      description:
        "Extracting Information from Multiple Types of Documents, News, and OCR, then extracting relevant information from them and                   classifying the document using Natural Language Processing & Deep Learning and by using unique algorithm, combination of a                   traversal technique to put the extracted information into perspective.",
      techStack: [
        "NLP Open-Source Libraries & Toolkit",
        "D3",
        "Flask",
        "Python",
        "SQL",
        "AWS",
      ],
    },
    {
      name: "Regulatory 360 Directive",
      image: p2,
      shortDescription:
        "An Application that Scans Documents and Extracts Action Items",
      description:
        "Extracting information using Natural Language Processing & Deep Learning from the different regulations e.g. (GDPR, MIFID2 and so on) and then extracting the context, and then assignment of the directive to the proper dept. of the organization",
      techStack: [
        "NLP Open-Source Libraries & Toolkit",
        "D3",
        "Flask",
        "Python",
        "SQL",
        "GCP",
      ],
    },
    {
      name: "AI Onboarding Checks",
      image: p3,
      shortDescription:
        "AI Based Adverse Media Checks for Onboarding new Clients",
      description:
        "Extracting information using Natural Language Processing & Deep Learning from the different internal and external sources and then using it to create a knowledge graph and using it to find red flags for Onboarding Checks",
      techStack: [
        "NLP Open-Source Libraries & Toolkit",
        "Core NLP",
        "D3",
        "Flask",
        "Python",
        "SQL",
      ],
    },
    {
      name: "ATM Anti-Skimming",
      image: p4,
      shortDescription: "An POC for Anti-Skimming Protection in ATM's.",
      description:
        "Created a POC system that allows to withdraw money from ATM after confirming Account Holders Identity.",
      techStack: ["OpenCV", "Python"],
    },
    {
      name: "IOT Automobiles",
      image: p5,
      shortDescription: "Automation in Automobiles using Internet of Things.",
      description:
        "The project included the concept of getting advanced features in Medium Range Cars using variety of IOT Sensors.",
      techStack: ["Embedded System", "Oracle11g", "WEB (Front-end, Back-end)"],
    },
    {
      name: "Document Classfier",
      image: p6,
      shortDescription:
        "Handwriting Recognition and Documents Parsing & Classification",
      description:
        "The project included the concept of Handwritten Documents sent to HR/ Interview Teams and then Documents such as CV, ID Proofs Parsing, and Classification into Categories.",
      techStack: ["NLP Open-Source Libraries & Toolkit", "OpenCV", "Python"],
    },
    {
      name: "Data Anamoly Finder",
      image: p7,
      shortDescription:
        "A system that finds anamoly in the current input data that is being provided to it.",
      description:
        "This project was based on combination of 3 Algorithms in which the main goal is to keep the system safe from bad data and remove the anomalies from the data and Visualization of the data along with CURD Operations",
      techStack: [
        "NLP Open-Source Libraries & Toolkit",
        "D3",
        "Python",
        "Flask",
        "Three.js",
      ],
    },
  ];

  return (
    <>
      <Fade in timeout={1000}>
        <Typography
          variant="h4"
          color="textPrimary"
          style={{ fontWeight: "bold" }}>
          <Animated>Projects</Animated>
        </Typography>
      </Fade>
      <br />
      <Row className="p-0">
        <Carousel responsive={responsive} showDots={true}>
          {projectData.map((data, i) => {
            return (
              <Col className="p-0" key={i}>
                <ProjectCard key={i} isDark={false} cardInfo={data} />
              </Col>
            );
          })}
        </Carousel>
      </Row>
    </>
  );
}
export default Projects;
