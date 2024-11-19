# WebTA04 - Página Web Personalizada

Este es un proyecto web alojado en GitHub Pages, que presenta varias páginas HTML estáticas, recursos estáticos (como imágenes y archivos CSS/JS), y una configuración automatizada para copias de seguridad utilizando **GitHub Actions**.

El sitio web está disponible en el dominio **[grup7.blog](http://grup7.blog)**.

## Estructura del Proyecto

La estructura de archivos de este repositorio es la siguiente:


### Descripción de los Archivos y Carpetas

- **`assets/`**:
  - Carpeta que contiene recursos estáticos como imágenes, hojas de estilo CSS y otros archivos que se utilizan en las páginas HTML.
  
- **`src/`**:
  - Contiene el archivo **`proyectos.js`**, que es un archivo de JavaScript utilizado para agregar interactividad o manejar funcionalidades dinámicas en el sitio web.
  
- **`workflows/`**:
  - Carpeta que contiene los flujos de trabajo de **GitHub Actions**.
  - **`backup.yml`**: Un archivo de configuración para hacer copias de seguridad automáticas del repositorio utilizando GitHub Actions.

- **`CNAME`**:
  - Archivo utilizado para configurar un **dominio personalizado** en GitHub Pages. Este archivo contiene el nombre de tu dominio personalizado, en este caso **`grup7.blog`**, que es el que se utiliza para acceder a tu sitio.

- **`alberto.html`**, **`izan.html`**, **`oscar.html`**:
  - Archivos HTML que contienen contenido estático específico sobre diferentes personas o secciones en el sitio web. 
  - Estos archivos son páginas adicionales dentro del sitio web, cada uno relacionado con un tema específico (por ejemplo, "Alberto", "Izan", "Oscar").

- **`index.html`**:
  - La **página principal** del sitio web. Este archivo sirve como la entrada principal para los usuarios al acceder al dominio o repositorio. Contiene el contenido principal y el menú de navegación.

- **`googlef9cdad30c7a90d88.html`**:
  - Un archivo utilizado para **verificar** el sitio en **Google Search Console**. Este archivo se utiliza cuando deseas agregar tu sitio a la herramienta de análisis de Google para mejorar el SEO (Search Engine Optimization).

## Flujo de Trabajo de GitHub Actions

El archivo **`backup.yml`** dentro de la carpeta **`workflows/`** está configurado para realizar una copia de seguridad automática del repositorio en otro repositorio de respaldo cada vez que se realiza un **push** a la rama principal (`main`). 

### Pasos del Flujo de Trabajo:
1. **Clonación del Repositorio Original**: Se realiza un `checkout` del repositorio actual para tener los archivos más recientes.
2. **Clonación del Repositorio de Respaldo**: Se clona el repositorio de respaldo en el cual se almacenarán las copias.
3. **Copia de Archivos**: Los archivos del repositorio original se copian al repositorio de respaldo.
4. **Commit y Push**: Se realizan un `git commit` y `git push` para guardar los cambios en el repositorio de respaldo.

Este flujo de trabajo asegura que tus archivos estén siempre respaldados y actualizados automáticamente en otro repositorio.

## Configuración del Dominio Personalizado

El archivo **`CNAME`** se utiliza para configurar el dominio personalizado de tu sitio web. Este archivo contiene el nombre de tu dominio, que es **`grup7.blog`**.

Si aún no lo has hecho, asegúrate de que en tu proveedor de DNS hayas configurado correctamente las **entradas DNS** para apuntar a los servidores de GitHub Pages. Una vez configurado, tu sitio será accesible a través de la URL **[grup7.blog](http://grup7.blog)**.

## Implementación en GitHub Pages

Este proyecto está configurado para ser servido a través de **GitHub Pages**. Puedes acceder al sitio web a través de la URL proporcionada: **[grup7.blog](http://grup7.blog)**.

## Verificación de Google Search Console

El archivo **`googlef9cdad30c7a90d88.html`** es un archivo de verificación que se usa para confirmar la propiedad del sitio en **Google Search Console**. Si aún no lo has hecho, puedes agregar este archivo a tu cuenta de Google para empezar a recibir análisis sobre el rendimiento y tráfico de tu sitio web.

## Contribuciones

Si deseas contribuir al proyecto, puedes hacer un **fork** de este repositorio y enviar un **pull request** con tus cambios. Si tienes alguna sugerencia o reporte de problemas, no dudes en abrir un **issue**.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo LICENSE para más detalles.

---

¡Gracias por visitar este repositorio! Si tienes alguna pregunta o necesitas asistencia, no dudes en abrir un **issue** o contactarme.

