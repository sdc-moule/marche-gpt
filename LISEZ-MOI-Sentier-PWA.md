# Sentier — installation PWA

## Version journal d’activité

La page d’accueil présente la progression de la semaine, la dernière activité et la distance du mois. L’objectif hebdomadaire est modifiable depuis **Modifier l’objectif**. Le bouton **Démarrer le GPS** est directement visible dans l’onglet **Suivi**.

Pour terminer une sortie, maintenez le petit bouton **Maintenir 3 s** sans le relâcher. Un relâchement, une sortie du bouton ou un changement d’écran annule la fermeture.

La pause est entièrement automatique : après 10 secondes sans déplacement, le temps net s’arrête ; le suivi reprend automatiquement dès que vous vous remettez à marcher.

## Pourquoi le GPS ne fonctionnait pas

Le fichier `marche-tracker.html` ne doit plus être ouvert directement depuis le gestionnaire de fichiers (`file://`). La géolocalisation et l’installation PWA exigent une adresse sécurisée en **HTTPS**.

## Mise en ligne nécessaire

Déposez ensemble, sans les renommer, ces quatre fichiers dans le même dossier d’un hébergement HTTPS :

- `marche-tracker.html`
- `sentier-manifest.webmanifest`
- `sentier-service-worker.js`
- les fichiers `sentier-icon*` (SVG et PNG)

Puis ouvrez dans Chrome sur le téléphone l’adresse HTTPS de `marche-tracker.html`.

## Installation sur Android

1. Ouvrez l’adresse HTTPS dans Chrome.
2. Autorisez la **localisation précise** lorsque Chrome la demande.
3. Ouvrez le menu ⋮ de Chrome, puis choisissez **Installer l’application** ou **Ajouter à l’écran d’accueil**.
4. Ouvrez ensuite **Sentier** depuis l’icône créée. Au premier démarrage, accordez l’autorisation de localisation à l’application.

## Limites normales

- Le suivi GPS doit être réalisé avec l’écran allumé ou avec l’autorisation de batterie non restreinte pour Chrome/Sentier.
- La carte et le relief 3D nécessitent une connexion lors de la première consultation. Les données de marche restent locales à l’appareil.
