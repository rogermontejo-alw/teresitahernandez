# Conectar el formulario a Google Sheets

El sitio es 100% estático (sin servidor propio), así que la forma más simple y
gratuita de guardar los registros es un **Google Apps Script** publicado como
"Web App" — actúa como mini-backend gratis, ligado a tu cuenta de Google.

## 1. Crea la hoja

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
2. Nómbrala como quieras, por ejemplo `Diplomado — Registros`.
3. En la primera fila (fila 1), agrega estos encabezados, uno por columna, en este orden:

   ```
   fecha | nombre | telefono | email | ciudad | ejerce | interes | comentarios | origen
   ```

## 2. Crea el Apps Script

1. En la hoja, ve a **Extensiones → Apps Script**.
2. Borra el contenido de `Código.gs` y pega esto:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.fecha || new Date().toISOString(),
       data.nombre || "",
       data.telefono || "",
       data.email || "",
       data.ciudad || "",
       data.ejerce || "",
       data.interes || "",
       data.comentarios || "",
       data.origen || ""
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Guarda el proyecto (ícono de disco), dale un nombre como `Registros Diplomado`.

## 3. Publica como Web App

1. Arriba a la derecha, click en **Implementar → Nueva implementación**.
2. En "Seleccionar tipo", elige **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** Cualquier usuario
4. Click en **Implementar**.
5. Google te pedirá autorizar permisos (es tu propio script, es seguro) — acepta.
6. Copia la **URL de la aplicación web** que te da (algo como
   `https://script.google.com/macros/s/AKfycb.../exec`).

## 4. Pásame esa URL

Mándame esa URL y yo la conecto en el código
(`ui_kits/landing-page/SignupForm.jsx`, constante `GOOGLE_SHEETS_ENDPOINT`).
Después de eso cada registro del formulario cae directo en tu hoja.

## Notas

- Si más adelante actualizas el script (cambias columnas, etc.), tienes que
  hacer **Implementar → Gestionar implementaciones → editar (lápiz) → Nueva
  versión** — si solo guardas el código sin republicar, los cambios no aplican
  a la URL ya en uso.
- Puedes ver cada envío en **Ejecuciones** dentro del editor de Apps Script,
  útil para debug si algo no llega.
