import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from '@site/src/css/newsletter.module.css';
import Blockquote from '@site/src/components/blockquote.js';
import NewsletterCard from '@site/src/components/newsletter_card';

const MyPage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="hero">
        <div className="container">
          <div className="row" >
            <div className="col col--6">
              <img
                alt='Boîte aux lettres avec du courrier dedans'
                src={useBaseUrl('img/newsletter/inbox.png')}
                className= { styles.newsletterImage }
              />
            </div>
            <div className="col col--6 text--center">
              <h1 className="hero__title">La newsletter de Women On Rails</h1>
              <p className="hero__subtitle">Reste à jour de l'actualité du secteur avec les infos essentielles décodées</p>
              <div>
                <iframe 
                  src='https://womenonrails.substack.com/embed'
                  frameborder='0'
                  scrolling='no'
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className={ 'container container--centered' + ' ' + styles.bgGreen + ' ' + styles.roundedCorner }>
          <div>
            <h2 className="hero__title--middle text--center pt-1">- Pour chaque édition -</h2>
            <div className="row">
              <div className="col col--4">
                <div className={styles.emoji + ' ' + styles.gem}></div><h3>Du Ruby et du Rails</h3>
                <p>Avec Ruby 3 et Rails 6, il y a de nouvelles perspectives pour ce framework, reste au courant des dernières évolutions</p>
              </div>
              <div className="col col--4">
                <div className={styles.emoji + ' ' + styles.web}></div><h3>L'actualité web</h3>
                <p>Une ouverture sur des sujets techs généraux, que ce soit les outils ou les pratiques qui ont fait parler d'eux</p>
              </div>
              <div className="col col--4">
                <div className={styles.emoji + ' ' + styles.seeding}></div><h3>De l'inclusivité</h3>
                <p>Si tu penses que chacun à sa place dans la tech et qu'il faut faire bouger les choses pour avoir plus de diversités</p>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className={styles.emoji + ' ' + styles.monocle}></div><h3>De la sélection</h3>
                <p>Fini une liste interminable de tutos, de liens vidéos, à la place quelques lectures clés</p>
              </div>
              <div className="col col--4">
                <div className={styles.emoji + ' ' + styles.sparkles}></div><h3>De l'inspiration</h3>
                <p>Des ressources soigneusement sélectionnées pour aller plus loin</p>
              </div>
              <div className="col col--4">
                <div className={styles.emoji + ' ' + styles.timer}></div><h3>De l'efficacité</h3>
                <p>Tout ça dans un temps de lecture moyen de 5 minutes</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container container--centered">
          <h2 className="hero__title--middle">Lire les précédentes newsletters</h2>
          <div className="row">
            <div className="col col--4">
              <NewsletterCard
                title="💎 RubyConf 2020, Rails 6.1 RC1, serverless vs Rails, du pixel (pas) perfect, un problème et We Can Code"
                date="17 novembre 2020"
                href="https://womenonrails.substack.com/p/-rubyconf-2020-rails-61-rc1-serverless"
              />
            </div>
            <div className="col col--4">
              <NewsletterCard
                title="👻 Post-mortem, Hacktoberfest, Women Make, l'avenir des SPAs et des jeux"
                date="3 novembre 2020"
                href="https://womenonrails.substack.com/p/post-mortem-hacktoberfest-women-make-spa-games"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container container--centered">
          <h2 className="hero__title--middle">On en parle</h2>
          <Blockquote
            text="J'ai beaucoup aimé ce premier opus de la newsletter de WoR ! Le ton est pas impersonnel comme dans la plupart des autres newsletters, ça se lit bien. Les inserts sous chaque section la rendent encore plus humaine/perso."
            author="Lucien, étudiant à 42"
            href='https://twitter.com/Crysicia'
            handle="@Crysicia"
          />
          <div className="mt-4"/>
          <Blockquote
            text="Je viens de recevoir la première newsletter de @womenonrails ! Super travail 👏👏👏Je conseille pour les débutantes, un bon moyen de se tenir au courant de ce qui se passe dans la communauté Ruby et Rails. En français !"
            author="Little Cheung"
            href='https://twitter.com/Ynote_hk'
            handle="@Ynote_hk"
          />
          <div className="mt-4">
            <iframe 
              src='https://womenonrails.substack.com/embed'
              frameborder='0'
              scrolling='no'
            >
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
