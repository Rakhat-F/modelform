# Angular Template Driven Form Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0 and includes examples of Angular Template Driven Form.

## Using project with Stackblitz

Simply go to this URL [https://stackblitz.com/github/ofcyln/angular-template-driven-form-example](https://stackblitz.com/github/ofcyln/angular-template-driven-form-example)

## Using in your local

Run these commands on the terminal one after onother

    git clone https://github.com/ofcyln/angular-template-driven-form-example.git

    npm install

    ng server

or

    git clone https://github.com/ofcyln/angular-template-driven-form-example.git

    yarn install

    yarn start

## Development server

Run `ng serve` or `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. If you don't have @angular/cli in your local global, you can run `npx ng generate component component-name`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Which Validators do ship with Angular? 

Check out the Validators class: [https://angular.io/api/forms/Validators](https://angular.io/api/forms/Validators) - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

For the template-driven approach, you need the directives. You can find out their names, by searching for `"validator"` in the official docs: [https://angular.io/api?type=directive](https://angular.io/api?type=directive) - everything marked with `"D"` is a directive and can be added to your template.

Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the `ngNativeValidate`  to a control in your template.
# templateform
