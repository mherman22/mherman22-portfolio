import React from "react";
import image from "../images/digital.jpg";

const imageAltText = "my work place";

const projectList = [
  {
    title: "Add Support for FHIR PATCH Operations - GSoC Project 🎉",
    description:
      "OpenMRS is using the FHIR API more and more in place of the REST API. Supporting PATCH operations would allow us to support partial updates to FHIR resources without needing to send the whole resource from the client to the server.",
    url: "https://wiki.openmrs.org/display/projects/GSoC+2023+%3A+FHIR%3A+Add+support+for+FHIR+PATCH+operations",
  },
  {
    title: "openmrs-contrib-qaframework",
    description:
      "QAFramework is an OpenMRS’ behaviour driven development (BDD) quality assurance framework. BDD brings technical(developers, QA) together with business(non-technical, Business analysts) people to foster collaboration and ease problem-solving.",
    url: "https://github.com/openmrs/openmrs-contrib-qaframework/commits?author=mherman22",
  },
  {
    title: "openmrs-module-fhir2",
    description:
      "This is intended to be a replacement for the current OpenMRS FHIR module, initially using FHIR R4.",
    url: "https://github.com/openmrs/openmrs-module-fhir2/commits?author=mherman22",
  },
  {
    title: "GuestBook",
    description:
      "A simple guestbook app to learn the Grails framework in java. Grails allows to quickly create web applications; its scaffolding capabilities let you create a new project within few minutes.",
    url: "https://github.com/mherman22/guestbook",
  },
  {
    title: "KTMInv Frontend",
    description: "This is the frontend (ui) for [ktm](https://github.com/mherman22/KTMInv). It was bootstrapped with Create React App. I have not used any library in this project (yet).",
    url: "https://github.com/mherman22/KTMInv-frontend"
  },
  {
    title: "Monitor File For Changes",
    description: "The sole purpose of this tool is to monitor the file changes that occur during scanning, indexing and quality control (using capture pro). After monitoring the file, it is supposed to read the file and store the data into a database (mysql).",
    url: "https://github.com/mherman22/Monitor-Files"
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px",color: "white" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
