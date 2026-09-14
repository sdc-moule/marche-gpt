# Sentier — journal GPS de marche

PWA personnelle de suivi d’activité : GPS en direct, tableau de bord hebdomadaire, objectif de distance modifiable, distance, durée, allure, dénivelé positif, auto-pause, historique local, export GPX et replay 3D.

## Fonctions

- Suivi GPS haute précision avec filtrage et lissage des points.
- Pause automatique après 10 secondes sans déplacement ; reprise automatique dès qu’un déplacement est détecté.
- Tableau de bord personnel : dernière activité, distance mensuelle et objectif hebdomadaire modifiable.
- Bouton « Démarrer le GPS » immédiatement visible sur l’écran de suivi.
- Sécurité d’arrêt : le bouton de fin est réduit et doit être maintenu 3 secondes ; le relâcher annule la demande.
- Pause manuelle et auto-pause à l’arrêt.
- Distance, durée nette, allure et dénivelé positif.
- Alertes sonores et vibration à chaque kilomètre.
- Historique et statistiques sur les six dernières semaines.
- Export GPX avec horodatage et altitude.
- Carte détaillée et replay 3D avec relief.

## Confidentialité

Les marches, réglages et statistiques sont enregistrés dans le navigateur du téléphone, via `localStorage`. Ils ne sont pas envoyés vers GitHub. L’export GPX reste manuel.

## Publication avec GitHub Pages

1. Créer un dépôt GitHub public, par exemple `sentier-marche`.
2. Ajouter tous les fichiers de ce dossier à la racine du dépôt, sans les renommer.
3. Dans GitHub : **Settings** → **Pages**.
4. Choisir **Deploy from a branch**, puis `main` et le dossier `/(root)`.
5. Enregistrer et attendre la publication.

L’adresse de l’application sera de la forme :

```text
https://VOTRE-IDENTIFIANT.github.io/sentier-marche/marche-tracker.html
```

## Installation sur Android

1. Ouvrir l’adresse HTTPS ci-dessus dans Chrome Android.
2. Autoriser la **localisation précise**.
3. Ouvrir le menu Chrome ⋮ puis choisir **Installer l’application** ou **Ajouter à l’écran d’accueil**.
4. Lancer ensuite Sentier depuis l’icône créée.

> Ne pas ouvrir `marche-tracker.html` directement depuis le gestionnaire de fichiers du téléphone. Le GPS et l’installation PWA nécessitent HTTPS.

## Fichiers à conserver ensemble

```text
marche-tracker.html
sentier-manifest.webmanifest
sentier-service-worker.js
sentier-icon.svg
sentier-icon-maskable.svg
sentier-icon-192.png
sentier-icon-512.png
sentier-icon-maskable-512.png
README.md
```

## Limites

- Les fonds de carte et le relief 3D nécessitent une connexion lors de leur première consultation.
- Certains téléphones limitent le GPS en arrière-plan pour économiser la batterie. Pour une sortie longue, éviter de restreindre la batterie de Chrome ou de l’application installée.
