# TP2-Practica3

  

Este proyecto resuelve el siguiente enunciado:
*"Definir una ruta post que reciba números en forma individual y que los incorpore al sistema de persistencia en Memoria ó File System (a elección). El formato de entrada de los números será JSON, Ej: { numero: x } Luego crear las siguientes rutas get: 1) /entrada retorna todos los números ingresados. 2) /promedio me devuelve el promedio de los valores ingresados. 3) /minmax retorna un objeto con valor máximo y mínimo de los números guardados 4) /cantidad devuelve la cantidad de números guardados”*
  

---

  
## Tecnologías Utilizadas
- Node.js
- Express.js
- Arquitectura en capas (DAO, Service, Controller, Routes)
- Persistencia en memoria y opcional con File System (numeros.json)
- Dotenv para variables de entorno


## Cómo levantar el servidor

  

### 1. Requisitos

  

- Node.js (versión 18 o superior)

- Postman (opcional para probar)

  

### 2. Pasos para iniciar el proyecto

  

```bash

npm install  # Instala las dependencias

npm start  # Levanta el servidor

npm run  watch  # También inicia el servidor pero con recarga automática
