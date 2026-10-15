# Test Douzou

Site statique sans framework ni dépendance externe. HTML et CSS composent la page ; un petit fichier JavaScript gère les cinq boutons audio, sans lecture automatique.

## Visualiser le site

Sur GitHub, choisissez **Code → Download ZIP**, décompressez l’archive, puis double-cliquez sur `index.html`. La page s’ouvre dans votre navigateur. Gardez `style.css`, `script.js` et le dossier `audio` à côté du fichier HTML.

## Personnaliser

- `index.html` : texte de présentation et titres provisoires des cinq pistes.
- `style.css` : couleurs, typographie et adaptation au téléphone.
- `audio/README.md` : instructions pour ajouter les sons et les activer dans `script.js`.

Aucun enregistrement n’est fourni pour le moment. Chaque bouton affiche un message d’attente tant que sa piste n’est pas configurée. L’illustration géométrique est décorative et ne représente pas une œuvre d’Olivier Douzou.

## Envoyer les modifications sur GitHub

Dans votre dépôt GitHub, choisissez **Add file → Upload files**. Déposez `index.html`, `style.css`, `script.js`, `README.md` et le dossier `audio` à la racine du dépôt, sans dossier supplémentaire autour. Ajoutez une description et cliquez sur **Commit changes**. Pour changer un texte ensuite, ouvrez le fichier sur GitHub, cliquez sur le crayon et enregistrez avec **Commit changes**.

Si vous utilisez Git dans un terminal, depuis le dossier du dépôt :

```sh
git add index.html style.css script.js README.md audio
git commit -m "Créer le site Test Douzou"
git push origin HEAD:main
```

Si Git indique que la branche distante a changé, récupérez et examinez les changements avant de réessayer ; ne forcez pas l’envoi.

## Publier avec GitHub Pages

1. Envoyez les fichiers sur la branche `main`.
2. Dans le dépôt, ouvrez **Settings → Pages**.
3. Dans **Build and deployment**, choisissez **Deploy from a branch**.
4. Sélectionnez **main** puis **/ (root)** et cliquez sur **Save**.
5. Attendez la fin du déploiement : l’adresse publique apparaît sur cette même page.

Les modifications envoyées ensuite sur `main` seront publiées automatiquement. Tous les chemins sont relatifs pour fonctionner avec GitHub Pages. Selon la visibilité du dépôt et votre abonnement GitHub, Pages peut nécessiter un dépôt public.
