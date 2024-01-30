import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "As a Digital Health Full Stack Software Developer, I have a passion for Digital Health. I like to design and implement solutions that are simple, elegant and innovative..";

const skillsList = [
  "Web development",
  "Backend Development",
  "OpenMRS related development",
  "OpenCR, OpenHIE, OpenHIM, etc..",
  "Automated End to End testing",
  "HL7 / FHIR",
  "Mobile user interfaces",
  "PC repair and Maintenance",
  "OpenMRS Development",
  "Eye for Detail"
];

const detailOrQuote =
  "I have honed my abilities in a variety of technologies as a Digital Health Full Stack Software Engineer, including Java, Spring Framework/Spring boot, Node-ExpressJS for the backend, ReactJS + Typescript for the frontend, and Flutter for mobile. In addition, I have a strong interest in QA and open-source initiatives. At OpenMRS, where I work as a QA Engineer and Backend developer leaning towards FHIR, I conduct manual, user acceptability, performance, and automated testing. I have a constant desire to expand my knowledge and develop my abilities.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#00473f",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white"}}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color: "white"
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0",color:"white" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
