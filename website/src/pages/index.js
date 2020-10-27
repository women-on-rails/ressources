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
      <div className="hero h-100 text--center">
        <div className="container">
          <div className="padding-vert--md">
            <img alt="Logo Women On Rails" src={useBaseUrl('img/logo.svg')} />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">Pour préparer tes entretiens d'embauche, progresser en Ruby et son framework Rails et rejoindre une communauté bienveillante pour coder ensemble.</p>
          </div>
          <div>
            <Link
              to={useBaseUrl('/docs')}
              className="button button--lg button--outline button--primary">
              Consulter nos ressources
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
