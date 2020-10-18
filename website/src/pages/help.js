import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import DarkModeImage from '../components/dark_mode_image.js'

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
            <br/>
            <div class="row">
              <div class="col col--4">
                <img src={useBaseUrl('/img/meetup.png')} class="social-logo"/>
                <p>
                  <span>On se retrouve régulièrement </span>
                  <a
                    href="https://www.meetup.com/fr-FR/Women-On-Rails/"
                    target="_blank"
                    rel="noreferrer noopener">
                    en ligne 
                  </a>
                  <span> pour coder, partager nos expériences dans la tech ou s'entraider sur nos projets.</span>
                </p>
              </div>
              <div class="col col--4">
                <img src={useBaseUrl('/img/twitter.png')} class="social-logo"/>
                <p>
                  <span>Sur notre </span>
                  <a
                    href="https://twitter.com/womenonrails"
                    target="_blank"
                    rel="noreferrer noopener">
                    compte Twitter
                  </a>
                  <span>  on partage des infos sur Ruby et Rails, des comptes de femmes qui codent, des offres d'emplois...</span>
                </p>
              </div>
              <div class="col col--4">
                <DarkModeImage imgsrcdark="/img/slack_dark.png" imgsrclight="/img/slack.png" customclass="social-logo" />
                <p>
                  <span>On a un Slack aussi, envoie-nous un mail pour qu'on puisse t'ajouter.</span><br/>
                  <DarkModeImage imgsrcdark="/img/email_dark.png" imgsrclight="/img/email.png" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
