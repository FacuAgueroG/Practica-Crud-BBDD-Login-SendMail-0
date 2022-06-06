## Retrofultbol (DEPLOY EN HEROKU, VER LINK) | Para ingresar usuario : fullstack, contraseña : 123456
- Pagina web con CRUD para agregar, editar o borrar elementos de una BBDD

- BBDD => Mysql con workbench para la carga de los modelos

- Login con una BBDD | Para ingresar usuario : fullstack, contraseña : 123456

- BBDD => Mysql con workbench para el inicio de sesion, contraseña encriptada con md5

- SendMail realizado con nodemailer y mailtrap. Para el envio de formularios

--

- Proyecto con JS, Node JS, express, Mysql => Workbench. Con modelo-vista-controlador y trabajo de DOM

- El trabajo hace uso de bancos de imagenes online (Cloudinary)

- La pagina consta de 8 endpoint, Index, stock, tienda, secret, layout, editor, contacto, agregador

- Dependencies

  "dependencies": {
    "cloudinary": "^1.28.1",
    "dotenv": "^14.2.0",
    "express": "^4.17.2",
    "express-fileupload": "^1.2.1",
    "express-session": "^1.17.2",
    "express-validator": "^6.14.0",
    "hbs": "^4.2.0",
    "md5": "^2.3.0",
    "mysql": "^2.18.1",
    "nodemailer": "^6.7.2",
    "util": "^0.12.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
