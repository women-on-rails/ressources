import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from '@site/src/css/newsletter.module.css';

const MyPage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="hero">
        <div className="container text--center">
          <div className={`row ${styles.bannerNewsletter}`} >
            <div className="col col--6">
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
            <div className="col col--6">
              <img
                alt='Boîte aux lettres avec du courrier dedans'
                src={useBaseUrl('img/newsletter/inbox.png')}
                className= { styles.newsletterImage }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container container--centered">
          <div>
            <h2 className="hero__title--middle">Ce que tu obtiens avec la newsletter</h2>
            <ul className={ styles.newsletterList }>
              <li>Une édition bimensuelle les mardis directement dans ta boîte mail</li>
              <li>Les dernières infos sur Ruby et Rails</li>
              <li>L’actualité web autour du langage et du framework</li>
              <li>Des ressources soigneusement sélectionnées pour aller plus loin</li>
              <li>Une dose d’inspiration</li>
              <li>Des nouvelles de notre réseau</li>
              <li>Tout ça dans un temps de lecture moyen de 5 minutes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hero ">
        <div className="container container--centered">
          <div class="row">
            <div class="col col-4 pt-1">
              <h2 className="hero__title--middle">Retrouve l'actualité essentielle</h2>
              <p className="m-0">Le web, on adore parce que les possibilités sont infinies.
                Il y a toujours quelques choses de nouveau à découvrir, à tester ou à apprendre.
              </p>
              <p className="m-0">
                Mais où suivre tout ça ?
                Twitter est un flux continu d'infos, il y a des milliers d'articles et de tutos à lire, les tutos vidéos durent 1 heure.
              </p>
              <p className="m-0"><b>Dans cette newsletter, l'info est déjà traitée et condensée.</b></p>
            </div>
            <div class="col col-4 pt-1">
              <h2 className="hero__title--middle">Ressors informé·e de ta lecture</h2>
              <p className="m-0">
                Cette newsletter, c'est pour te donner les outils pour progresser, améliorer ton code et tes pratiques.
                Elle est là aussi pour t'inspirer avec des projets qui donnent des idées pour te lancer et développer les tiens.
              </p>
              <p className="m-0">
                Le but ce n'est pas que tu dises: "oh la la trop de choses à voir", mais que tu aies <b>les ressources nécessaires pour creuser les sujets qui t'intéressent</b>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container container--centered">
          <h2 className="hero__title--middle">On en parle</h2>
          <blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Je viens de recevoir la première newsletter de <a href="https://twitter.com/womenonrails?ref_src=twsrc%5Etfw">@womenonrails</a> ! Super travail 👏👏👏Je conseille pour les débutantes, un bon moyen de se tenir au courant de ce qui se passe dans la communauté Ruby et Rails. En français !</p>&mdash; Little Cheung (<a href='https://twitter.com/Ynote_hk'>@Ynote_hk</a>)<p><a href="https://twitter.com/Ynote_hk/status/1323910274848563205?ref_src=twsrc%5Etfw">Voir le tweet</a></p></blockquote>
          <blockquote><p>J'ai beaucoup aimé ce premier opus de la newsletter de WoR ! Le ton est pas impersonnel comme dans la plupart des autres newsletters, ça se lit bien. Les inserts sous chaque section la rendent encore plus humaine/perso.</p>&mdash; Lucien, étudiant à 42 (<a href='https://twitter.com/Crysicia'>@Crysicia</a>)</blockquote>
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
    </Layout>
  );
};

export default MyPage;
