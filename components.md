# Les Components

## Qu'est-ce qu'un component (ou composant en français) ?

Un `component` est un morceau de code réutilisable et indépendant, utilisé principalement en ReactJS. Il va nous servir à afficher des éléments tels que des `cards` ou `avatar` avec tout le `markup` nécessaire sans avoir à l'écrire.
On utilise la syntaxe `JSX`, qui ressemble un peu à Javascript mais avec quelques différences.

Plus d'infos sur les composants de React sur la doc officielle : [Components and props](https://fr.reactjs.org/docs/components-and-props.html)

Docusaurus (le framework faisant tourner ce site) est réalisé en React et de ce fait nous pouvons utiliser des composants dans les fichiers ressources `.mdx`.

## Les components de base de Docusaurus

* `<Head/>`
* `<Link/>`
* `<Redirect/>`
* `<BrowserOnly/>`

Pour leur usage, tu pourras trouver de la documentation ici : [https://v2.docusaurus.io/docs/docusaurus-core#components](https://v2.docusaurus.io/docs/docusaurus-core#components)

## Liste des components ajoutés

Nous avons ajoutés des components au site au fur et à mesure de nos besoins, ils se trouvent dans le dossier `website/src/components`

* `<Avatar/>` : [website/src/components/avatar.js](website/src/components/avatar.js)
* `<BlogCard/>` : [website/src/components/blog_card.js](website/src/components/blog_card.js)
* `<DarkModeImage/>` : [website/src/components/dark_mode_image.js](website/src/components/dark_mode_image.js)
* `<HorizontalCard/>` : [website/src/components/horizontal_card.js](website/src/components/horizontal_card.js)
* `<Timeline/>` et `<TimelineStep/>` : [website/src/components/timeline.js](website/src/components/timeline.js)

## Comment les utiliser

Pour te servir d'un component, il faut:
- que le fichier où tu veux l'importer soit au format `.mdx` (il peut être bien sûr au format `.js` si c'est une page autre que ressource)
- importer le component voulu en haut de ton fichier, comme ça: `import TonComponent from '@site/src/components/ton_component.js';`
- lui passer les attributs nécessaires

<details>
  <summary>
    Avatar
  </summary>

**Où le trouver**

[website/src/components/avatar.js](website/src/components/avatar.js)

**Description**

Utilisé sur la page [S'entraîner aux tests](https://women-on-rails.github.io/ressources/docs/s-entrainer-aux-tests) : 

![Component Avatar](website/src/static/img/doc_components/component_avatar.png)

**Example d'utilisation**

Importation en haut du fichier `.mdx` : `import Avatar from '@site/src/components/avatar.js';`

```jsx
<Avatar 
  src='/img/find_a_job/katas/deliver_ee.png'
  alt='Logo Deliver.ee'
  href='https://github.com/deliver-ee/challenges'
  title='Deliver.ee'
/>
```
</details><br/>

<details>
  <summary>
    BlogCard
  </summary>

**Où le trouver**

[website/src/components/blog_card.js](website/src/components/blog_card.js)

**Description**

Utilisé sur la [page d'accueil du blog](https://women-on-rails.github.io/ressources/blog) : 

![Component BlogCard](website/src/static/img/doc_components/component_blog_card.png)

**Example d'utilisation**

Importation en haut du fichier : `import BlogCard from '@site/src/components/blog_card.js';`

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

</details><br/>

