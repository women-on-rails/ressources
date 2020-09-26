/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Ce site rassemble des [ressources pour t'aider tout au long de ta carrière](${docUrl(
        'doc1.html',
      )}).`,
      title: 'Consulter les ressources',
    },
    {
      content: `On se retrouve [en ligne](https://www.meetup.com/fr-FR/Women-On-Rails/) une fois par mois, ` +
      "pour coder, partager nos expériences dans la tech ou s'entraider sur nos projets.",
      title: 'Rejoindre notre meet-up',
    },
    {
      content: `Sur [notre compte twitter](https://twitter.com/womenonrails), on partage des infos sur Ruby et Rails, ` +
      "des comptes de femmes qui codent, des offres d'emplois...",
      title: 'Nous suivre sur Twitter',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Qui sommes-nous ?</h1>
          </header>
          <p>Women On Rails est un groupe féministe, LGBT-friendly et à majorité féminine qui a pour but de découvrir, s’entraider et pratiquer régulièrement les rudiments informatiques et particulièrement le langage Ruby et son framework Rails.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
