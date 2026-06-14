# Auteur : Enzo Freminet (Copyright © 2026)

# 

# Maya Reference Image Importer

Cet outil automatise l'importation, l'orientation et l'organisation d'images de référence (image planes) pour la modélisation 3D dans Autodesk Maya.





# Installation

* Ouvrez Autodesk Maya



* Depuis votre explorateur de fichiers, glissez et déposez le fichier ultimate\_ref\_tool.py directement dans le viewport 3D de Maya.



* Une fenêtre de confirmation apparaît. Une icône s'ajoute automatiquement à votre Shelf actuel, et le script est copié dans le dossier des scripts de votre utilisateur Maya.



* Si vous rencontrez des problèmes lors de l'installation, une vidéo GIF se trouve dans le dossier pour vous montrer comment l'installer sur Maya.





# Utilisation

Cliquez sur l'icône dans le Shelf pour ouvrir l'interface. L'outil propose deux méthodes d'importation :



**1. Mode Détection Automatique (Drag \& Drop)**

Glissez et déposez vos fichiers images directement dans la zone en pointillés. Le script analyse le nom de chaque fichier pour déterminer l'axe de projection approprié :



* Vue de face (Front) : Fichiers contenant front ou face. Rotation : 0°.



* Vue de côté (Side) : Fichiers contenant side, left ou right. Rotation Y : 90°.



* Vue de dessus (Top) : Fichiers contenant top ou up. Rotation X : -90°.



(Si aucun mot-clé n'est détecté, l'image est placée de face par défaut).



**2. Mode Assignation Forcée**

La section Force View Assignment permet d'importer des images sans tenir compte de leur nom de fichier.



Cliquez sur Add Front, Add Side ou Add Top.



Sélectionnez vos images. Elles seront automatiquement orientées selon le bouton cliqué.



**Fonctionnalités Automatisées**

Lors de l'importation, le script exécute automatiquement les actions suivantes :



* Transparence : Réglage de l'Alpha Gain à 0.5.



* Échelle : Si les unités de la scène sont définies sur Mètres (m), l'échelle des images est multipliée par 100.



* Verrouillage : Les attributs de transformation (Translation, Rotation, Scale) sont verrouillés pour éviter toute manipulation accidentelle.



* Hiérarchie : Toutes les images sont parentées sous un groupe nommé REF\_IMAGES.



* Calque (Display Layer) : Les images sont ajoutées à un calque REF\_LAYER configuré en mode "Reference" (R), rendant les images visibles mais non sélectionnables dans le viewport.



**Gestion des Références (Manage References)**

La section Manage References contient des contrôles globaux pour la scène :



* Toggle Visibility : Masque ou affiche instantanément le groupe REF\_IMAGES.



* Delete All : Déverrouille et supprime définitivement toutes les images de référence générées par l'outil, supprime le groupe parent et nettoie le calque REF\_LAYER.



**Compatibilité**

Versions de Maya : Maya 2022 et versions ultérieures (incluant Maya 2025+).



Dépendances : Aucune installation externe requise. Le script s'adapte automatiquement aux environnements PySide2 ou PySide6 selon la version de Maya.



Formats supportés : .png, .jpg, .jpeg, .tga, .tif, .tiff, .bmp.

