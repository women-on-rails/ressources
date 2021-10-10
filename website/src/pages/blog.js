import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import BlogCard from "../components/blog_card.js";

const MyPage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="hero text--center">
        <div className="container ">
          <div className="padding-vert--md">
            <h1 className="hero__title">Nos articles</h1>
            <p className="hero__subtitle"> Découvrez nos derniers articles.</p>
            <br />
            <div class="row">
            <div class="col col--4">
                <BlogCard
                  link={
                    "https://women-on-rails.github.io/ressources/blog/2021/09/24/get-involved"
                  }
                  image={useBaseUrl("img/logo.png")}
                  imageAlt={"S'engager auprès de Women on Rails"}
                  imageTitle={"S'engager auprès de Women on Rails"}
                  title={"S'engager auprès de Women on Rails"}
                  summary={
                    "Vous souhaitez vous engager auprès de la communauté Women on Rails ? Voici quelques pistes pour nous soutenir et développer la communauté."
                  }
                  date={"24 septembre 2021"}
                  author={"Camille"}
                  tag={"INFOS"}
                ></BlogCard>
              </div>
              <div class="col col--4">
                <BlogCard
                  link={
                    "https://women-on-rails.github.io/ressources/blog/2020/10/18/update-contributing"
                  }
                  image={useBaseUrl("img/blog/article2.png")}
                  imageAlt={"Mise à jour de la doc"}
                  imageTitle={"Mise à jour de la doc"}
                  title={"Mise à jour de la doc"}
                  summary={
                    "Le site profite de l'Hacktoberfest pour avoir ses premières contributions, vous trouverez ici toutes les informations pour contribuer !"
                  }
                  date={"18 octobre 2020"}
                  author={"Juliette"}
                  tag={"OPENSOURCE"}
                ></BlogCard>
              </div>
              <div class="col col--4">
                <BlogCard
                  link={
                    "https://women-on-rails.github.io/ressources/blog/2020/10/04/hello-world"
                  }
                  image={useBaseUrl("img/blog/article1.png")}
                  imageAlt={"Hello World !"}
                  imageTitle={"Hello World !"}
                  title={"Hello World !"}
                  summary={
                    "Bienvenue sur ce site collaboratif qui regroupe les ressources pour nous aider à se former, avancer et passer des entretiens..."
                  }
                  date={"4 octobre 2020"}
                  author={"Juliette"}
                  tag={"INFOS"}
                ></BlogCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
