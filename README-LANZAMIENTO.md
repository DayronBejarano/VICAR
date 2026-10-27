# VICAR V5.2 — versión protegida contra estilos antiguos en caché

## Corrección aplicada

Si la página aparece blanca, con enlaces morados subrayados y figuras SVG negras o gigantes, el HTML sí abrió, pero el navegador no aplicó la hoja de estilos correcta. Esto suele ocurrir cuando se han probado varias versiones en `localhost:8000` usando el mismo nombre `assets/css/styles.css`.

Esta versión evita el conflicto mediante:

- archivo de estilos nuevo: `assets/css/vicar-v5-2.css`;
- archivo JavaScript nuevo: `assets/js/vicar-v5-2.js`;
- identificador de versión en las rutas;
- puerto local recomendado `8052`, distinto del utilizado antes;
- estilos mínimos de rescate y aviso visible si faltara el archivo principal.

## Forma recomendada de abrir en Windows

1. Extrae completamente el ZIP. No ejecutes archivos desde dentro del ZIP.
2. Entra en la carpeta `vicar-website-v5.2`.
3. Haz doble clic en `INICIAR_PREVIA_WINDOWS.bat`.
4. Se abrirá `http://localhost:8052/index.html?v=5.2`.
5. Mantén abierta la ventana negra mientras revisas la página.

También puedes usar PowerShell:

```powershell
cd "C:\Users\Dayron Bejarano\Documents\vicar-website-v5.2"
python -m http.server 8052
```

Luego abre:

```text
http://localhost:8052/index.html?v=5.2
```

## Verificación rápida

Abre esta dirección en otra pestaña:

```text
http://localhost:8052/assets/css/vicar-v5-2.css?v=20260807-52
```

Debe aparecer un archivo de texto que comienza con `:root{`. Si aparece un error 404, la carpeta no se extrajo completa o el servidor se inició desde otra ubicación.

---

# Sitio web VICAR — versión 5

## Contenido
- Página de inicio responsive basada en el mockup aprobado.
- Logo original conservado en su gama morada; solo se removió técnicamente el fondo para integrarlo al diseño.
- Fotografía real de Yuli Viviana Carrillo Montañez.
- Páginas: servicios, familias, colegios, perfil, agenda, contacto, privacidad, aviso legal y términos.
- WhatsApp Business y formulario Jotform de agenda.
- Diseño oscuro sin fondo blanco, tipografía fluida con `clamp()`, estados hover, foco visible y navegación móvil.
- SEO técnico básico: metadatos, Open Graph, JSON-LD, sitemap y robots.txt.

## Datos integrados
- Teléfono: +57 320 373 2450
- Correo: consultoriapsicojuridicavicar@gmail.com
- NIT: 1104705737-4
- Formulario de citas: https://form.jotform.com/262187836633062
- Dominio provisional en metadatos: https://vicarpsicojuridica.com

## Antes de publicar
1. Confirmar el dominio definitivo y reemplazar `https://vicarpsicojuridica.com` en HTML, `robots.txt` y `sitemap.xml`.
2. Confirmar ciudad, horario, modalidades y zonas de atención.
3. Configurar disponibilidad, correos y calendario dentro de Jotform.
4. Confirmar el número de tarjeta profesional antes de publicarlo; actualmente no aparece.
5. Validar los textos de privacidad, aviso legal y términos con asesoría jurídica y con las herramientas realmente conectadas.
6. Probar agenda, WhatsApp, correo y teléfono en celular.
7. Sustituir o licenciar fotografías si se decide no usar los recortes del mockup aprobado.

## Vista previa
- Doble clic en `VISTA_PREVIA_LOCAL.html` para una revisión básica.
- Para probar rutas y funciones, ejecutar `INICIAR_PREVIA_WINDOWS.bat` o `INICIAR_PREVIA_MAC_LINUX.sh` y abrir `http://localhost:8000`.

## Publicación en Hostinger
Subir el contenido de esta carpeta a `public_html`, activar SSL y verificar que `.htaccess` esté habilitado.

## Corrección 5.1 — enlaces locales
- Se añadió `nosotros.html` como ruta de compatibilidad que dirige a `perfil.html`.
- Se añadió `favicon.ico` en la raíz para evitar el error automático del navegador.
- Si el navegador conserva un enlace anterior, usa `Ctrl + F5` o abre una ventana de incógnito.
- Al ejecutar `python -m http.server 8000`, entra por `http://localhost:8000/` o `http://localhost:8000/index.html`.
