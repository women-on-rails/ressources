import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from '@site/src/css/newsletter.module.css';
import Blockquote from '@site/src/components/blockquote.js';

const MyPage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      permalink='/'
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className='hero'>
        <div className='container'>
          <div className='row' >
            <div className='col col--6'>
              <img
                alt='Boîte aux lettres avec du courrier dedans'
                src={useBaseUrl('img/newsletter/inbox.png')}
                className= { styles.newsletterImage }
              />
            </div>
            <div className='col col--6 text--center'>
              <h1 className='hero__title'>La newsletter de Women On Rails</h1>
              <p className='hero__subtitle'>Reste à jour de l'actualité du secteur avec les infos essentielles décodées</p>
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

      <div className='hero'>
        <div className={ 'container container--centered' + ' ' + styles.bgGreen + ' ' + styles.roundedCorner }>
          <div>
            <h2 className='hero__title--middle text--center pt-1'>- Pour chaque édition -</h2>
            <div className='row'>
              <div className='col col--4'>
                <div className={styles.emoji + ' ' + styles.gem}></div><h3>Du Ruby et du Rails</h3>
                <p>Reste au courant des améliorations apportées au framework Rails et retrouve des tips Ruby</p>
              </div>
              <div className='col col--4'>
                <div className={styles.emoji + ' ' + styles.web}></div><h3>L'actualité web</h3>
                <p>Une ouverture sur des sujets techs généraux, que ce soit les outils ou les pratiques qui ont fait parler d'eux</p>
              </div>
              <div className='col col--4'>
                <div className={styles.emoji + ' ' + styles.seeding}></div><h3>De l'inclusivité</h3>
                <p>On valorise la diversité et la représentation de différents profils</p>
              </div>
            </div>
            <div className='row'>
              <div className='col col--4'>
                <div className={styles.emoji + ' ' + styles.monocle}></div><h3>De la sélection</h3>
                <p>Fini une liste interminable de tutos ou de liens vidéos, à la place quelques lectures clés</p>
              </div>
              <div className='col col--4'>
                <div className={styles.emoji + ' ' + styles.sparkles}></div><h3>De l'inspiration</h3>
                <p>On partage des projets stylés qui nous rappellent pourquoi on aime coder</p>
              </div>
              <div className='col col--4'>
                <div className={styles.emoji + ' ' + styles.timer}></div><h3>De l'efficacité</h3>
                <p>Tout ça dans un temps de lecture moyen de 5 minutes</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className='hero'>
        <div className='container container--centered'>
        <a href="https://womenonrails.substack.com/archive" target="_blank" rel="noopener noreferrer" class={styles.learnMore}>
          Lire les précédentes newsletters
        </a>
          <br/><br/>
          <br/><br/>
          <iframe
            src='https://womenonrails.substack.com/embed'
            frameborder='0'
            scrolling='no'
          >
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
