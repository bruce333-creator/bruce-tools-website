# Vanta Node

**Vanta Node** est un outil puissant pour Autodesk Maya conçu pour accélérer et automatiser la création de matériaux Arnold (`aiStandardSurface`). Finies les minutes perdues à importer vos textures une par une, à configurer les espaces colorimétriques et à relier les nodes manuellement ! 

Ce script (interface PySide/Qt) fait tout le travail pour vous via un simple *Drag & Drop*.

## Fonctionnalités Principales

- **Drag & Drop Intelligent** : Glissez-déposez vos fichiers de textures ou un dossier entier. Le script analyse les noms de fichiers pour détecter automatiquement leur rôle (Base Color, Roughness, Metalness, Normal, Displacement, etc.).
- **Import Manuel** : Un double-clic sur la zone de Drag & Drop ouvre un explorateur de fichiers classique pour sélectionner vos images manuellement.
- **Création & Connexion Automatique** : Crée le material `aiStandardSurface`, le `shadingEngine` (SG), et connecte tous les nodes de textures avec les bons espaces colorimétriques (Raw pour les datas mathématiques, sRGB pour la couleur).
- **Gestion Avancée de l'AO** : Si une *Base Color* et une *Ambient Occlusion* sont détectées, l'outil crée automatiquement un node `multiplyDivide` pour fusionner les deux avant de les connecter à la surface.
- **Aperçu Visuel (Node Preview)** : Une section rétractable et dynamique montre en temps réel un diagramme fluide du réseau de nodes qui sera généré. Elle s'agrandit intelligemment pour s'adapter au nombre de textures.
- **Presets PBR Intégrés** : Appliquez rapidement des paramètres physiques de base pour des matériaux courants (Metal, Plastic, Glass, Skin, Car Paint).
- **Configuration Rendu 4K** : Un bouton dédié `4K Render Setup` configure instantanément les paramètres Arnold pour un rendu haute qualité de production (AA=5, Adaptive Sampling, 3840x2160, etc.).

## Installation

L'installation est extrêmement simple, conçue pour ne prendre qu'une seconde :

1. Ouvrez **Autodesk Maya**.
2. Prenez le fichier `anorld_node_wrangler_v7.py` (ou la version la plus récente).
3. **Glissez-déposez** le fichier directement n'importe où dans le viewport 3D de Maya.
4. L'outil s'installera de lui-même ! Une icône sera automatiquement ajoutée dans votre **Shelf** active (étagère) pour un accès rapide. Le logo de l'interface sera lui extrait et sauvegardé automatiquement pour toujours s'afficher correctement.

## Comment l'utiliser

1. **Ouvrez l'interface** via le bouton fraîchement ajouté dans votre Shelf.
2. **Ciblez votre matériau** : 
   - Laissez sur `- Create new -` pour créer un nouveau shader (vous pouvez le nommer juste en dessous).
   - *Ou* sélectionnez un shader existant dans la scène via la liste déroulante pour le mettre à jour ou le modifier.
3. **Ajoutez vos Textures** : Glissez un dossier contenant vos textures PBR dans la boîte en pointillés, ou double-cliquez dessus pour les parcourir.
4. **Vérifiez l'aperçu** :
   - L'outil listera les maps reconnues. Si une map a mal été identifiée, utilisez le menu déroulant à côté de la texture pour corriger son assignation.
   - Dépliez le **Node Preview** pour vous assurer que les connexions ont du sens.
5. L'outil génère le shader automatiquement dès l'import complet. Si vous faites des changements manuels de nom ou de preset, cliquez sur **Build Shader** pour forcer la construction.
6. Cliquez sur **Assign Material to Selection** pour appliquer le nouveau matériau aux géométries sélectionnées dans votre scène.

---

## FAQ - Foire Aux Questions

### Comment le script reconnaît-il mes textures ?
Le script utilise des expressions régulières (Regex) pour analyser et filtrer le nom de vos fichiers. Par exemple, si votre fichier contient `_basecolor`, `albedo`, ou `diffuse`, il sera assigné à la *Base Color*. Si le fichier contient `roughness` ou `rgh`, il ira dans la *Specular Roughness*.
Veillez simplement à utiliser des conventions de nommage standards (ex: `Bois_BaseColor.png`, `Bois_Normal.exr`).

### Une de mes textures n'est pas reconnue, que faire ?
Lorsqu'une texture est importée mais que son nom est atypique ou dans une autre langue, elle sera listée dans l'interface, mais son rôle sera vide. Vous pouvez la corriger instantanément en utilisant la **liste déroulante** ("Auto") à côté du nom de l'image pour forcer sa reconnaissance (ex: Forcer sur "Normal" ou "Opacity").

### L'outil supporte-t-il les UDIMs ?
**Non, pas pour le moment.** Le support natif des UDIMs (fichiers contenant le motif de tuile `.1001.`, `.1002.`, etc.) est intentionnellement désactivé pour éviter de charger des dizaines de fois la même texture dans l'interface et de ralentir l'outil. Si vous glissez un dossier rempli d'UDIMs, le script les ignorera gracieusement et un avertissement apparaîtra dans la section "Feedback".

### Que fait exactement le bouton "4K Render Setup" ?
C'est un raccourci de productivité majeur. En un seul clic, il modifie les `Render Globals` de Maya et les options d'Arnold pour obtenir un rendu très qualitatif :
- Résolution d'image forcée à **3840x2160** (Format 16:9).
- Augmentation de l'Antialiasing (Camera AA) à 5, et activation de l'**Adaptive Sampling**.
- Règle les rebonds globaux (Diffuse, Specular, Transmission, SSS) à 2.
- Optimise les performances de mémoire en autorisant la génération de fichiers tuilés `.tx` (`autotx` activé) et en allouant 4GB de mémoire maximale pour les textures (`textureMaxMemoryMB`).

### Où puis-je voir s'il y a eu une erreur lors de la création d'un shader ?
La boîte **Feedback** tout en bas de la fenêtre conserve l'historique de vos actions. Si un noeud ne s'est pas connecté à cause d'un nom invalide, si une map a été ignorée, ou si Maya a remonté une erreur système, cela sera affiché ici avec un code couleur précis (Vert=Succès, Jaune=Avertissement, Rouge=Erreur).

### Puis-je modifier le logo personnalisé de l'interface ?
Oui, l'outil a été pensé pour être personnalisable. Le script Python contient une variable nommée `icon_base64` au tout début du code source. Vous pouvez remplacer cette longue chaîne de caractères par n'importe quelle autre image `.png` convertie en Base64. Au prochain lancement, le script détectera le changement et remplacera automatiquement le logo dans votre dossier système `scripts`.

---
**Copyright (c) 2026 Enzo Freminet**  
*Tous droits réservés. Ce script a été initialement développé pour optimiser les workflows de look-development et de shading sous Autodesk Maya et Arnold Renderer.*
