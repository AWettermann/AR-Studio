# AR Creator Oranienschule V4

V4 stellt Editor und AR auf dieselbe 3D-Modellbibliothek (`models.js`) um.

## Kernprinzip
WYSIWYG: Rakete, Roboter, Gebäude, Baum, Antenne, Planet usw. werden im Editor und in AR aus exakt derselben Modelldefinition erzeugt.

## GitHub Pages
Alle fünf Webdateien ins Root des Repositorys laden:
- index.html
- style.css
- app.js
- models.js
- ar.html

GitHub Pages aktivieren und über HTTPS öffnen.

## Modelle
Die Modelle bestehen bewusst aus A-Frame-Primitiven. Dadurch gibt es keine externen GLB-Abhängigkeiten und Editor/AR bleiben synchron.
