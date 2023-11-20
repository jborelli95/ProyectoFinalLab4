# ProyectoFinalLab4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes:

Trabajamos el proyecto con una base de angular cli v16.2
implementamos bootstrap v5.3.2
jquery v3.7.1
Poppers v1.16.1

Como instalamos los implementos:

Utilizando comandos para  el Node Package Manager(npm),

1- npm i bootstrap@5.3.2 (se instala bootstrap)

2- npm i jquery popper.js --save (se instala jquery y poppers)

3- Modificar el archivo angular.sjon en la raiz del proyecto, con lo siguiente:

"styles": [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],

"scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
	"./node_modules/popper.js/dist/umd/popper.min.js",
	"./node_modules/bootstrap/dist/js/bootstrap.min.js"
]

Ya finalizariamos la isntalación.

Luego para poder utilizar la pagina debemos:

1-Ejecutar el comando ng serve

2-Ejecutar el comando npm run json-server (De esta manera se habilita el sistema de registro y logeo)

3-La pagina utiliza una API con 100 request por dia, por lo que en el api.service.ts se encuentran varias claves para utilizar la api. En caso de necesitarlo cambiarla.


