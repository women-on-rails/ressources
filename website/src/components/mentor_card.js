import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const MentorCard = ({ firstname, jobTitle, company, img, languages }) => (
  <div class="mentor-card card">
    <div class="mentor-card-header">
      <img class="mentor-picture" src={useBaseUrl(img)}></img>
      <div class="mentor-text">
        <h2>{firstname}</h2>
        <h3>{jobTitle}</h3>
        <h3>{company}</h3>
      </div>
    </div>
  </div>
);

const MentorsList = () => {
  const mentors = [
    {
      firstname: "Juliette",
      jobTitle: "Développeuse back-end",
      company: "@CapSens",
      img: "/img/mentoring/juliette.jpeg",
      languages: ["Ruby on Rails", "React"],
    },
    {
      firstname: "Ségolène",
      jobTitle: "Développeuse fullstack",
      company: "@Doctolib",
      img: "/img/mentoring/segolene.jpg",
      languages: ["Ruby on Rails", "React", "CSS"],
    },
  ];

  return (
    <div class="mentors-list-wrapper">
      {mentors.map((mentor) => (
        <MentorCard
          firstname={mentor.firstname}
          jobTitle={mentor.jobTitle}
          company={mentor.company}
          img={mentor.img}
          languages={mentor.languages}
        />
      ))}
    </div>
  );
};

export default MentorsList;
