### Projet Movie-hub

Permet de rechercher des films, de voir la description de ceux-ci et également de voir la disponibilité de celui-ci sur les sites de streaming,
De plus l'utilisateur à la possibilités de créer des listes pour ajouter ses films dedans 


## API externe 

Pour la liste des films : https://developers.themoviedb.org

Pour les sites de streaming : just watch


## Avant de pouvoir lancer l'application 

Il faut créer un fichier de configuration appelé config.ts situé à la racine du projet dans un dossier "config"

Création du fichier :
```
cd ./movie-hub 
touch config/config.ts
```

Contenu du fichier de configuration :
```
export default {
    DEFAULT_MOVIE_API_URI:"api_uri",
    MOVIE_API_KEY_V3:"api_key"
}
```


## Pour lancer l'application sur le téléphone

Installation de expo-cli 

```
npm i -g expo-cli
```

Installation des dépendances 
```
npm i 
```

Lancement en mode dévelopement avec l'application expo sur le téléphone 
```
npm run start 
```