import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const MentorCard = ({
  firstname,
  jobTitle,
  img,
  languages,
  description,
  links,
}) => (
  <div class="mentor-card card">
    <div class="mentor-card-header">
      <img class="mentor-picture" src={useBaseUrl(img)}></img>
      <div class="mentor-text">
        <h2>{firstname}</h2>
        <h3>{jobTitle}</h3>
        <div class="mentor-links">
          {links.map((link) => (
            <a class="mentor-link" href={link.url}>
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div class="mentor-description">
      <p>{description}</p>
    </div>
  </div>
);

const MentorsList = () => {
  const mentors = [
    {
      firstname: "Juliette",
      jobTitle: "Développeuse back-end @CapSens",
      img: "/img/mentoring/juliette.jpeg",
      languages: ["Ruby on Rails", "React"],
      description:
        "Originellement formée à l'IEP de Grenoble, j'ai travaillé deux ans et demi en tant que chargée de mission dans le secteur culturel. \
        J'ai réalisé ma reconversion à l'automne 2018 grâce au bootcamp The Hacking Project. Je me suis rendu compte en m'immergeant dans l'univers du code et des start-ups que j'adorais ça, la solidarité entre dév, le pair-programming, le travail d'équipe et proposer des solutions techniques à des besoins métier ou clients.\
        Mon côté analytique me fait apprécier le back-end, en plus de Ruby on Rails je suis curieuse du langage Elixir. J'ai aussi une grande affinité pour le front-end: l'UX / l'UI, l'accessibilité, le SEO.",
      links: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/in/juliette-audema-46270a82/",
        },
      ],
    },
    {
      firstname: "Ségolène",
      jobTitle: "Développeuse fullstack @Doctolib",
      img: "/img/mentoring/segolene.jpg",
      languages: ["Ruby on Rails", "React", "CSS"],
      description:
        "J'ai d'abord fait des études de droit, puis de management, avant de rejoindre une start-up comme Product Owner. Ça a été mon 1er pas dans la Tech !\
        A ce poste, je devais rédiger le cahier des charges du site, m'assurer du bon déroulement des développements avec les développeurs, ... et on ne parlait clairement pas la même langue !\
        J'ai quitté ce poste pour me former en développement web via le bootcamp The Hacking Project en janvier 2018. Comme j'ai adoré, j'ai voulu continuer et j'ai passé le concours pour 42.\
        Je suis rentrée à 42 en novembre 2018, où je me suis spécialisée en développement web, puis j'ai rejoint Doctolib comme développeuse fullstack.",
      links: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/in/segolene-alquier/",
        },
        { type: "twitter", url: "https://twitter.com/SegoleneAlquier" },
      ],
    },
  ];

  return (
    <div class="mentors-list-wrapper">
      {mentors.map((mentor) => (
        <MentorCard
          firstname={mentor.firstname}
          jobTitle={mentor.jobTitle}
          img={mentor.img}
          languages={mentor.languages}
          description={mentor.description}
          links={mentor.links}
        />
      ))}
    </div>
  );
};

export default MentorsList;
