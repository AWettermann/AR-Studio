# AR Creator Oranienschule V3.1 – Hiro-Diagnose

Diese Version trennt Editor und AR vollständig.

## GitHub Pages
Alle Dateien in das Root-Verzeichnis des Repositorys laden:
- index.html
- style.css
- app.js
- ar.html

Dann GitHub Pages aktivieren und **über die HTTPS-Adresse** öffnen.

## Testablauf
1. Im Creator ein Objekt hinzufügen.
2. `Meine Welt in AR` wählen.
3. Kamerazugriff erlauben.
4. Auf `ar.html` links die Diagnose beobachten:
   - AR.js geladen
   - Kamera bereit
   - Hiro erkannt
5. Kamera auf einen ausgedruckten Hiro-Marker richten.

Auf dem Hiro-Marker erscheint absichtlich zusätzlich ein großer rotierender GELBER WÜRFEL.
Damit lässt sich die reine Marker-Erkennung unabhängig von der selbst erstellten Szene testen.

Wenn `AR.js geladen` und `Kamera bereit` grün sind, aber `Hiro erkannt` rot bleibt,
liegt das Problem bei Marker/Erkennung und nicht beim Editor.

Wichtig: Nicht die lokale file://-Adresse für den eigentlichen Smartphone-Test verwenden.
GitHub Pages liefert HTTPS und ist dafür die vorgesehene Testumgebung.
