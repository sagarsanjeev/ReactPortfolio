import React from "react";
import { Animated, ExperienceCard } from "../../components";
import { Typography, Fade } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "reactstrap";
import accenture from "../../images/accenture-logo.png";
import dell from "../../images/dell-logo.svg";
import iitb from "../../images/iit-bombay.png";
import kiit from "../../images/kiit-logo.svg";
import idea from "../../images/vi-logo.svg";

function Experience() {
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
  const experienceData = [
    {
      role: "Software Engineer 2",
      company: "Dell Technologies",
      type: "dell",
      companylogo: dell,
      date: "September 2021 – Present",
      link: "https://www.delltechnologies.com/",
      desc: "Working on a DevOps/Full Stack Engineer for an Enterprise Application that provides a LEGO based experience to the users for creating , modifying and testing the data pipelines for their application as per the Standards",
      // highlights: [
      //   "Developed a System for Validation of the CICD Pipeline during the Design Phase or Update Phase to avoid errors that informs about the missing variables or deprecated images in the CICD Job",
      //   "Migrated the Monolithic React Application in Micro Frontends for Faster Performance and Better Management",
      //   "Worked on a Utility to migrate the data from Pivotal Tracker to Jira along with attachments",
      //   "Helped Other Users w.r.t to their Gitlab CICD Pipeline Issues",
      //   "Worked on Scan Issues mentioned in Checkmarx and SonarQube scans for increasing the code quality and code security",
      //   "Conducted training sessions for the Users for talking about the process of the latest changes made to Application",
      //   "Developed APIs in Node/Python to get back the required data from the different application/database or Kubernetes Cluster",
      // ],
      highlights: ["TBD"],
      achivements: ["TBD"],
      location: "Bangalore, India",
      techStack: [
        "React",
        "TypeScript",
        "JavaScript",
        "MS-SQL",
        "Python",
        "NodeJS",
        "PCF",
        "Kubernetes",
      ],
      roles: ["Software Engineer 2 (September 2021 - Present)"],
    },
    {
      role: "Senior Software Engineer",
      company: "Accenture",
      type: "accenture",
      companylogo: accenture,
      date: "April 2018 - September 2021",
      link: "https://www.accenture.com/in-en/",
      desc: "Worked as Full Stack Developer under a Data Governance Team in RFT Space,that managed an enterprise application that scans, manages and handles metadata and data lineage of many different LOB's of the bank",
      highlights: [
        "Developed a System for Translation of Technical Data Transformations into plain English Language using NLP Concepts that saved around 350 person hours and translated around 250K Transformations.",
        "Managed Fuzzy Search Tool that was built around NLP grammar construct for querying databases using natural language without having to construct an SQL query and filters data from around 23 Million Records",
        "Managed the automation of the regulatory [FFIEC (4 Reports) and 10Q (3 Schedules)] reports and linking of the same to Metadata using NLP for Regulatory Exams",
        "Metadata Visualization using Python libraries like networkx and JavaScript libraries like D3.js",
        "Managed the implementation of Graph Algorithms to find the Centrality, Anomalies and Modularity of the Graph",
        "Applied NLP to articles scraped from the internet to extract meaningful information using Open information extraction to develop Artificial Intelligence based Search System for Adverse Media Checks (Knowledge Graph)",
        "Developed and Managed the Queue Based Reporting Module of the Application Independently",
        "Selected as the Member for Quick POC Development for Client Demos in Accenture",
        "Conducted training sessions on Python/ UNIX.",
      ],
      achivements: [
        "Awarded with ACE Award for three quarters in FY 20 Q1, Q3, Q4",
        "Adjudged as the 2nd Runner-up in Financial Services Hackathon’19 by FS Accenture for Credit Decisioning using AI",
        "Selected till Top 16 Ideas in Global Technology Innovation Contest 2019 organized by Accenture Team",
        "Selected till Top 5 Finalist in Global Technology Innovation Contest 2020 organized by Accenture Team out of 100K Submitted Records.",
      ],
      roles: [
        "Senior Software Developer Analyst (June 2021 - September 2021)",
        "Software Developer Analyst (June 2020 - May 2021)",
        "Application Development Associate (April 2018 - May 2020)",
      ],
      location: "Hyderabad, Bangalore India",
      techStack: [
        "Python",
        "Angular",
        "Flask",
        "Neo4j",
        "RDMS",
        "NLP",
        "Quartz",
        "Jenkins",
      ],
    },
    {
      role: "Intern",
      company: "I.I.T. Bombay",
      companylogo: iitb,
      type: "iit",
      date: "May 2017 - June 2017",
      link: "https://www.iitb.ac.in/",
      desc: "Worked on the Topic of Discrete Event Simulation of Computer Networks, that involved the part of simulation of the Computer Networks",
      highlights: [
        "The Main Outcome of this project is Simulation of Networks/Topologies in Virtual Enviroment before practical implementaion, So that the problems can found out and be solved in a timely manner It also simplifies the development using new technologies that facilitate the creation of a network protocols etc.",
      ],
      location: "Mumbai, India",
      techStack: ["Python", "Numpy", "Scipy"],
    },
    {
      role: "Junior Research Fellow",
      company: "DL-5 IOT LAB",
      companylogo: kiit,
      type: "kiit",
      date: "December 2016 - March 2018",
      link: "https://sagarsanjeev.com/#experience",
      desc: "Worked on the different fields such as IOT Embedded System Modules, Load Balancing, Clustering on the Servers, Analysis of the Data Collected from IOT Sensors, Adctive Directory Implementation etc.",
      highlights: [
        "Managed the Server Side of Lab including the Database, Implemented Load Balancing and Clustering on the Servers",
        "Created IOT POC's and Implemented Data Analytics over the data collected from the sensors",
      ],
      achivements: [
        "One of the IOT POC's Got 2nd Runner in the Project Innovation Contest, it was built for getting more advanced features in the Automobiles with the help of IOT Modules",
      ],
      location: "KIIT University Bhubaneswar, India",
      techStack: [
        "IOT",
        "AD-RMS",
        "Server Side Management",
        "Clustering",
        "Load Balancing",
      ],
    },
    {
      role: "Intern",
      company: "Idea Cellular Limited",
      companylogo: idea,
      type: "idea",
      date: "May 2016 - June 2016",
      link: "https://www.myvi.in/",
      desc: "Worked on the Active Directory Rights Management Service (AD-RMS), The course of work was to spread awarness about AD-RMS and train about the different methods avalible for security enhancement in the office",
      highlights: [
        "Woked on Training the Staff of the Branch office about the new implemented AD-RMS Feature and spread awareness about the diffrent encryption techniques that can be used to enhance the secuity of the data stored on the Systems",
      ],
      location: "Patna, India",
      techStack: ["Active Directory Rights Management Service (AD-RMS)"],
    },
  ];

  return (
    <>
      <Fade in timeout={1000}>
        <Typography
          variant="h4"
          color="textPrimary"
          style={{ fontWeight: "bold" }}>
          <Animated>Experience</Animated>
        </Typography>
      </Fade>
      <br />
      <Row className="p-0">
        <Carousel responsive={responsive} showDots={true}>
          {experienceData.map((data, i) => {
            return (
              <Col className="p-0" key={i}>
                <ExperienceCard key={i} isDark={false} cardInfo={data} />
              </Col>
            );
          })}
        </Carousel>
      </Row>
      <br />
    </>
  );
}
export default Experience;
