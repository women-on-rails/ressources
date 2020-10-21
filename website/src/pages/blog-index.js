import React from "react";
import Link from "@docusaurus/Link";
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
            <p className="hero__subtitle">
              {" "}
              Découvrez nos derniers articles.
            </p>
            <br />
            <div class="row">
              <div class="col col--4">
                <BlogCard
                  image={useBaseUrl("img/blog/article1.png")}
                  imageAlt={"Hello World !"}
                  imageTitle={"Hello World !"}
                  title={"Hello World !"}
                  summary={
                    "Bienvenue sur ce site collaboratif qui regroupe les ressources pour nous aider à se former, avancer et passer des entretiens..."
                  }
                  date={"4 octobre 2020"}
                  author={"Juliette"}
                  tag={"#TAG"}
                ></BlogCard>
              </div>
              {/* <div class="col col--4">
                <BlogCard></BlogCard>
              </div>
              <div class="col col--4">
                <BlogCard></BlogCard>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
