import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

const MyPage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <div className="hero text--center">
        <div className="container ">
          <div className="padding-vert--md">
            <h1 className="hero__title">Qui sommes-nous ?</h1>
            <p className="hero__subtitle">Women On Rails est un groupe féministe, LGBT-friendly et à majorité féminine qui a pour but de découvrir, s’entraider et pratiquer régulièrement les rudiments informatiques et particulièrement le langage Ruby et son framework Rails.</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
