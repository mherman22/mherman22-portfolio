import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";


const description =
  "I'm a Full Stack Software Developer with a Digital Health leaning. I enjoy creating unique and simplistic solutions in creative ways.";

const skillsList = [
  "Database Design",
  "Backend Development",
  "Automated End to End testing",
  "Fast Healthcare Interoperability Resources (FHIR)",
  "Mobile user interfaces",
  "PC repair and Maintenance",
];

const detailOrQuote =
  "I have honed my abilities in a variety of technologies as a Full Stack Software Engineer, including Java, Spring Framework/Spring boot, Node-ExpressJS for the backend, ReactJS + Typescript for the frontend, and Flutter for mobile. In addition, I have a strong interest in QA and open-source initiatives. At OpenMRS, where I work as a QA Engineer and Backend developer leaning towards FHIR, I conduct manual, user acceptability, performance, and automated testing. I have a constant desire to expand my knowledge and develop my abilities.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
