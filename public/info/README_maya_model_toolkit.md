Auteur : Enzo Freminet (Copyright © 2026)



## Avertissement Légal et Conditions d'Utilisation

Ceci est un outil NON OFFICIEL, EXPÉRIMENTAL et communautaire.\*\* Ce script n'est ni affilié, ni approuvé, ni supporté par Pixar Animation Studios, Autodesk ou leurs partenaires.

* Modifications : Les modifications du code source de cet outil sont **autorisées dans un cadre strictement personnel**. Toute redistribution, copie non autorisée ou vente du script est interdite sans la permission explicite de l'auteur.
* Absence de garantie : L'auteur (Enzo Freminet) décline **TOUTE RESPONSABILITÉ** en cas de bugs, corruption de scène, perte de données, plantages du logiciel ou erreurs de rendu liés à l'utilisation de cet outil.
* Vous utilisez ce script à vos propres risques et périls.\*\* Il est vivement recommandé de sauvegarder vos scènes Maya avant d'utiliser des outils d'automatisation.



# Maya Model Toolkit (v8.0)

Maya Model Toolkit est un outil de productivité léger et puissant développé en Python pour Autodesk Maya. Inspiré par les flux de travail rapides d'autres logiciels 3D, ce script regroupe des fonctionnalités essentielles de modélisation, de nettoyage et d'alignement dans une interface utilisateur minimaliste et intuitive.



Fonctionnalités Principales

L'interface est divisée en plusieurs sections rétractables (ouvertes par défaut pour un accès rapide) :



⬇ PLACEMENT

Des outils pour positionner rapidement vos objets dans l'espace 3D.



Drop to Ground (Y = 0) : Calcule la bounding box de chaque objet sélectionné et les déplace indépendamment pour que leur point le plus bas repose exactement sur la grille (Y=0).



Center to World (0, 0, 0) : Déplace instantanément l'objet sélectionné au centre de la scène.



&#x20;CLEAN TRANSFORM

Des outils radicaux pour nettoyer la hiérarchie et l'historique de vos meshes.



Freeze + Center Pivot + Delete History : Le combo classique en un seul clic. Gèle les transformations, centre le pivot et supprime l'historique de construction.



Extreme Cleaner History : Un nettoyeur agressif pour les meshes corrompus ou possédant un historique récalcitrant. L'outil crée un cube temporaire, le combine avec votre objet, puis supprime spécifiquement les faces du cube. Cette méthode force Maya à régénérer intégralement le nœud de géométrie (shape), purgeant ainsi les erreurs invisibles tout en préservant l'objet d'origine.



PIVOT TOOLS

Des outils de snapping de pivot avancés basés sur la sélection de composants, sans avoir à manipuler la touche D ou Insert.



Pivot → Vertex : Place le pivot de l'objet sur le dernier vertex sélectionné.



Pivot → Edge Center : Calcule le point médian d'une arête sélectionnée et y place le pivot.



Pivot → Face Center : Calcule le centre mathématique (moyenne des positions des vertices) d'une face sélectionnée et y place le pivot.



MODELING

Quad Cap Cylinder : Un générateur de cylindre propre, optimisé pour la subdivision. Contrairement au cylindre Maya par défaut qui génère des triangles en étoile (triangle fan) sur les pôles :



L'outil supprime algorithmiquement une arête sur deux sur les caps pour garantir une topologie 100% Quads (idéal avec des subdivisions multiples de 4).



Option de Support Loop : Une case à cocher permet de générer automatiquement des arêtes de soutien (edge loops) parfaites de chaque côté de la bordure des caps. L'algorithme utilise un glissement de loops latéraux et une extrusion des faces plates pour un résultat net, évitant les bugs fréquents liés à l'outil polyBevel.



Installation

L'installation a été pensée pour être la plus fluide possible, sans aucune manipulation de fichiers manuelle requise.



Méthode 1 : Drag and Drop (Recommandée)

Ouvrez Autodesk Maya.



Assurez-vous d'avoir ouvert l'étagère (Shelf) dans laquelle vous souhaitez installer l'outil (par ex: PolyModeling ou Custom).



Prenez le fichier maya\_model\_toolkit.py depuis votre explorateur de fichiers.



Glissez-déposez le fichier directement dans le Viewport de Maya.



C'est tout ! Le script va automatiquement :



Se copier dans votre dossier Documents/maya/<version>/scripts/.



Décoder et installer son icône personnalisée.



Créer un bouton d'accès rapide dans votre Shelf actif.



Lancer l'interface.



Méthode 2 : Manuelle

Si vous préférez installer l'outil manuellement :



Placez maya\_model\_toolkit.py dans votre dossier de scripts Maya :



Windows: C:\\Users\\<Utilisateur>\\Documents\\maya\\scripts\\



Mac: \~/Library/Preferences/Autodesk/maya/scripts/



Dans Maya, ouvrez le Script Editor (onglet Python) et exécutez le code suivant :



Python

import maya\_model\_toolkit

import importlib

importlib.reload(maya\_model\_toolkit)

maya\_model\_toolkit.show()

Vous pouvez sélectionner ce code et le glisser dans votre Shelf pour en faire un bouton avec un clic du milieu.



Compatibilité et Spécificités Techniques

Versions de Maya supportées : Maya 2020 et supérieur.



UI Framework : Le script détecte dynamiquement et utilise PySide2 (Maya 2024 et inférieur) ou PySide6 (Maya 2025+).



Singleton : L'interface est codée pour n'ouvrir qu'une seule instance à la fois. Cliquer plusieurs fois sur le bouton du Shelf fermera l'ancienne fenêtre pour la remplacer par la nouvelle.



Fenêtre "Always on Top" : L'outil reste toujours par-dessus l'interface de Maya pour ne pas gêner votre modélisation.

