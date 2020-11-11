# Les Components

## Qu'est-ce qu'un component ?

Un `component` est un morceau de code réutilisable et indépendant, utilisé principalement en `ReactJS`. Il va nous servir à afficher des éléments tels que des `cards` ou `avatar` avec tout le `markup` nécessaire sans avoir à l'écrire.
On utilise la syntaxe `JSX`, très semblable à `javascript` ([Introduction à JSX](https://fr.reactjs.org/docs/introducing-jsx.html)).

Plus d'infos sur les composants de React sur la doc officielle : [Components and props](https://fr.reactjs.org/docs/components-and-props.html)

Docusaurus (le framework faisant tourner ce site) est réalisé en React et de ce fait nous pouvons utiliser des composants dans les fichiers ressources `.mdx` et bien sûr `js`.

Pour en savoir plus sur le format `.mdx`, tu peux te référer à la [doc](https://v2.docusaurus.io/docs/markdown-features/#embedding-react-components-with-mdx).

## Les components de base de Docusaurus

* `<Head/>`
* `<Link/>`
* `<Redirect/>`
* `<BrowserOnly/>`

Pour leur usage, tu pourras trouver de la documentation ici (le component [link](https://v2.docusaurus.io/docs/docusaurus-core/#link) sera le plus utile) : [https://v2.docusaurus.io/docs/docusaurus-core#components](https://v2.docusaurus.io/docs/docusaurus-core#components)

## Liste des components ajoutés

Nous avons ajouté des components au site au fur et à mesure de nos besoins, ils se trouvent dans le dossier `website/src/components`

* `<Avatar/>` : [website/src/components/avatar.js](website/src/components/avatar.js)
* `<BlogCard/>` : [website/src/components/blog_card.js](website/src/components/blog_card.js)
* `<DarkModeImage/>` : [website/src/components/dark_mode_image.js](website/src/components/dark_mode_image.js)
* `<HorizontalCard/>` : [website/src/components/horizontal_card.js](website/src/components/horizontal_card.js)
* `<Timeline/>` et `<TimelineStep/>` : [website/src/components/timeline.js](website/src/components/timeline.js) et [website/src/components/timeline_step.js](website/src/components/timeline_step.js)

## Comment les utiliser

Pour te servir d'un component, il faut:
- que le fichier où tu veux l'importer soit au format `.mdx` (il peut être bien sûr au format `.js` si c'est une page autre que ressource)
- importer le component voulu en haut de ton fichier, comme ça: `import TonComponent from '@site/src/components/ton_component.js';`
- lui passer les attributs nécessaires

<details>
  <summary>
    Avatar
  </summary>

<br/>

**Chemin d'accès** : [website/src/components/avatar.js](website/src/components/avatar.js)

**Description** : utilisé sur la page [S'entraîner aux tests](https://women-on-rails.github.io/ressources/docs/s-entrainer-aux-tests), il permet d'afficher une petite card avec un logo, un titre, et un lien : 

![Component Avatar](website/static/img/doc_components/component_avatar.png)

**Utilisation**

1. Importation en haut du fichier : `import Avatar from '@site/src/components/avatar.js';`
2. Exemple :

```jsx
<Avatar 
  src='/img/find_a_job/katas/deliver_ee.png'
  alt='Logo Deliver.ee'
  href='https://github.com/deliver-ee/challenges'
  title='Deliver.ee'
/>
```
</details>

<details>
  <summary>
    BlogCard
  </summary>

<br/>

**Chemin d'accès** : [website/src/components/blog_card.js](website/src/components/blog_card.js)

**Description** : utilisé sur la [page d'accueil du blog](https://women-on-rails.github.io/ressources/blog), il permet d'afficher une carte comprenant diverses informations : 

![Component BlogCard](website/static/img/doc_components/component_blog_card.png)

**Utilisation**

1. Importation en haut du fichier : `import BlogCard from '@site/src/components/blog_card.js';`
2. Exemple :

```jsx
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
/></BlogCard>
```
</details>

<details>
  <summary>
    DarkModeImage
  </summary>

<br/>

**Chemin d'accès** : [website/src/components/dark_mode_image.js](website/src/components/dark_mode_image.js)

**Description** : utilisé sur la page [À propos](https://women-on-rails.github.io/ressources/help), il permet d'utiliser une image différente pour le mode dark (ou inversement) si l'image est trop peu lisible dans ce mode, il te faudra donc 2 images : 

![Component DarkModeImage](website/static/img/doc_components/component_dark_mode_image.png)

**Utilisation**

1. Importation en haut du fichier : `import DarkModeImage from '@site/src/components/dark_mode_image.js';`
2. Exemple :

```jsx
<DarkModeImage 
  imgsrcdark="/img/slack_dark.png"
  imgsrclight="/img/slack.png"
  customclass="social-logo"
/>
```
</details>

<details>
  <summary>
    HorizontalCard
  </summary>

<br/>

**Chemin d'accès** : [website/src/components/horizontal_card.js](website/src/components/horizontal_card.js)

**Description** : utilisé sur la page [S'entraîner aux tests](https://women-on-rails.github.io/ressources/docs/s-entrainer-aux-tests), il permet d'afficher une carte horizontale comprenant une image, un lien, et une petite description: 

![Component HorizontalCard](website/static/img/doc_components/component_horizontal_card.png)

**Utilisation**

1. Importation en haut du fichier : `import HorizontalCard from '@site/src/components/horizontal_card.js';`
2. Exemple :

```jsx
  <HorizontalCard
    src='/img/find_a_job/katas/codewars.jpeg'
    alt='Logo Codewars'
    href='https://www.codewars.com/'
    title='Codewars'
    description="Sûrement le plus connu, tu peux aussi retrouver d'autres développeur.se.s que tu connais pour faire monter un peu la compétition. Chaque kata a un espace de discussion où tu peux commenter, aider ou être aidé.e."
  />
```
</details>

<details>
  <summary>
    Timeline et TimelineStep
  </summary>

<br/>

**Chemin d'accès** : [website/src/components/timeline.js](website/src/components/timeline.js) et [website/src/components/timeline_step.js](website/src/components/timeline_step.js)


**Description** : ces deux components sont à utiliser ensemble, on peut les voir sur la page [Le processus d'embauche](https://women-on-rails.github.io/ressources/docs/le-processus-d-embauche), il permettent de présenter une marche à suivre ou un processus avec des étapes : 

![Component HorizontalCard](website/static/img/doc_components/components_timeline.png)

**Utilisation**

1. Il te faudra importer 2 fichiers :
```jsx
import Timeline from '@site/src/components/timeline.js';
import TimelineStep from '@site/src/components/timeline_step.js';
```
2. Exemple :
Ici tu ne vas remplir que le titre dans les attributs du component `TimelineStep`, le contenu des étapes est à remplir entre les balises `<TimelineStep>` et `</TimelineStep>`, tu pourras ainsi inclure des liens ou tout d'autres éléments html. La numérotation se fait automatiquement grâce au CSS inclus dans la feuille de style [timeline](website/src/css/timeline.module.css).

```jsx
<Timeline>
  <TimelineStep title="L'entretien">
    Qu'il soit téléphonique, en visio-conférence ou face à face, c'est la première étape, l'occasion de faire connaissance avec le premier interlocuteur de la société. Au delà du bien connu "Racontez moi votre parcours", on pourra aussi te poser des <Link to="questions-techniques">questions techniques</Link>.
  </TimelineStep>

  <TimelineStep title="Le ou les tests techniques">
    La première étape passée, il faudra certainement faire un ou plusieurs tests techniques, mais pas de panique ! On a quelques ressources pour t'aider dans cette tâche qui est une magnifique occasion de s'améliorer et d'avoir des retours de ce qu'attendent les entreprises&nbsp;: <br />
    ➡️ <Link to="les-types-de-tests-techniques">Les différents types de tests techniques</Link><br />
    ➡️ <Link to="s-entrainer-aux-tests">S'entraîner aux tests</Link>
  </TimelineStep>
</Timeline>
```
</details>
