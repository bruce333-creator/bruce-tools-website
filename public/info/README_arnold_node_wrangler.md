# ArNode — Arnold Node Wrangler

ArNode est un plugin professionnel pour Autodesk Maya conçu et développé par Enzo Freminet sous la marque EF Tools. Il automatise et accélère la création de matériaux et le look development avec Arnold (MtoA).

Grâce à son interface sombre moderne aux accents violets et à sa typographie soignée, il vous suffit de glisser-déposer vos textures pour générer instantanément un graphe de shading PBR propre, robuste et optimisé pour le rendu.

---

## Fonctionnalités Principales

- **Drag & Drop Intelligent** : Glissez-déposez vos fichiers de textures ou un dossier complet directement dans l'interface.
- **Import Manuel par Double-Clic** : Un double-clic sur la zone de dépôt ouvre directement l'explorateur de fichiers pour sélectionner vos images manuellement.
- **Détection Automatique des Canaux PBR** : Identification précise des canaux par mots-clés et suffixes (Base Color, Roughness, Metalness, Normal, Bump, Displacement/Height, Opacity/Alpha, Ambient Occlusion, Emission, SSS, Sheen, Coat).
- **Cartes de Textures Interactives** : Chaque texture détectée s'affiche sous forme de carte individuelle avec vignette 36x36, canal identifié, bouton de remplacement individuel et bouton de suppression.
- **Réseau Automatique Ambient Occlusion** : Si une map d'AO et une Base Color sont détectées ensemble, ArNode crée automatiquement un nœud multiplyDivide en mode Multiply pour fusionner l'occlusion dans la couleur sans intervention manuelle.
- **Gestion Stricte des Espaces Colorimétriques** : Configuration automatique des espaces colorimétriques dans les nœuds aiImage (sRGB pour la couleur et les teintes, Raw pour les données physiques comme la rugosité, le métal, le déplacement et les normales).
- **Normal Maps & Bump Arnold** : Connexion automatique dans aiNormalMap (avec détection DirectX pour inverser le canal vert si nécessaire) ou aiBump2d vers l'attribut normalCamera.
- **Réseau de Déplacement Idempotent** : Création et connexion sécurisée du nœud displacementShader au Shading Group associé.
- **15 Presets Physiques Arnold** : Configuration instantanée des propriétés optiques pour les matériaux courants :
  - Generic PBR, Plastic, Metal, Glass, Skin, Fabric, Rubber, Wood, Stone, Ceramic, Car Paint, Leaves, Snow, Ice, Water.
- **Mise à Jour Non-Destructive** : Sélectionnez un shader aiStandardSurface existant dans la scène pour actualiser ou compléter ses textures sans casser les connexions existantes.
- **Outils de Production Arnold Intégrés** :
  - **Setup Rendu 4K** : Configure en un clic les Render Globals de Maya et les options Arnold en 3840x2160 avec échantillonnage adaptatif haute qualité (AA=5).
  - **Conversion .tx (maketx)** : Convertit par lot vos textures au format .tx optimisé pour Arnold.
  - **Copie automatique dans sourceimages** : Option pour rapatrier vos textures dans le dossier du projet Maya actif pour garantir la portabilité de vos scènes.
  - **Organisation automatique du graphe** : Raccourci pour réarranger proprement vos nœuds dans l'Hypershade / Node Editor.

---

## Installation en 1 Clic (Drag & Drop)

L'installation est totalement autonome et ne nécessite aucune manipulation manuelle dans vos dossiers système :

1. Démarrez Autodesk Maya.
2. Prenez le fichier `Installer_ArNode.py`.
3. Glissez-déposez-le directement dans le viewport 3D de Maya (ou exécutez-le dans le Script Editor Python).
4. Le plugin s'installe automatiquement et un bouton personnalisé ArNode avec son logo officiel violet apparaît sur votre Shelf active.
5. L'interface s'ouvre immédiatement et est prête à l'emploi.

---

## Mode d'Emploi

1. Cliquez sur l'icône ArNode dans votre Shelf Maya pour ouvrir l'outil.
2. Choix du Shader :
   - Laissez l'option `— Create new —` et entrez un nom pour créer un nouveau matériau.
   - Ou sélectionnez un matériau Arnold existant dans la liste déroulante pour le mettre à jour.
3. Preset Matériau : Choisissez le preset physique de votre choix (ex: Metal, Plastic, Glass, Skin, etc.).
4. Import des Textures :
   - Glissez votre dossier ou vos images directement dans la zone de dépôt.
   - Ou double-cliquez sur la zone pour parcourir vos fichiers.
5. Vérification : La liste des textures s'affiche avec leurs vignettes et leur assignation. Vous pouvez remplacer ou retirer une map au besoin.
6. Construction : Cliquez sur Build Shader (ou Update Shader). Votre réseau de shading Arnold est instantanément généré et prêt pour le rendu.

---

## FAQ — Questions Fréquentes

### Quels formats de textures sont supportés ?
ArNode prend en charge l'ensemble des formats de production courants : PNG, JPG, JPEG, EXR, TIF, TIFF, TX et HDR.

### Comment le plugin reconnaît-il mes fichiers ?
ArNode analyse les conventions de nommage standards dans les noms de fichiers via des expressions régulières (par exemple _BaseColor, _Albedo, _Roughness, _Normal, _Disp, _Metalness, etc.).

### Les textures UDIM sont-elles supportées ?
Par sécurité pour les performances de la scène et de l'interface, les séquences de tuiles UDIM (motif 1001, 1002, etc.) sont automatiquement ignorées lors du glisser-déposer pour éviter de charger des dizaines de cartes dupliquées.

### Que fait exactement le bouton 4K Render Setup ?
Il calibre instantanément vos paramètres de rendu pour une production haute résolution :
- Résolution fixée à 3840 x 2160 (format 16:9).
- Antialiasing (Camera AA) augmenté à 5 avec activation de l'Adaptive Sampling (jusqu'à 10 échantillons).
- Échantillonnage équilibré pour Diffuse, Specular, Transmission et SSS.
- Activation de l'option autoTx et allocation de 4 Go de cache mémoire pour les textures.

### Pourquoi la taille de la fenêtre est-elle fixe ?
La fenêtre est verrouillée à une dimension ergonomique optimale (520 x 680 px). Cela garantit que la disposition reste stable et lisible, quel que soit le nombre de textures importées, grâce au conteneur de défilement intégré.

---

## Mentions Légales & Propriété Intellectuelle

- Auteur & Développeur : Enzo Freminet (EF Tools)
- Copyright : © 2026 Enzo Freminet. Tous droits réservés.
- Conditions d'utilisation : Ce logiciel est protégé par les lois sur la propriété intellectuelle. Toute revente, sous-licence, distribution non autorisée, copie, décompilation ou ingénierie inverse (reverse engineering) est strictement interdite sans accord écrit préalable d'Enzo Freminet.
- Marques déposées : Arnold® et Maya® sont des marques déposées d'Autodesk, Inc. ArNode est un plugin indépendant tiers édité par EF Tools.
