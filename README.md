# AngularSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

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

# Fixes
Step 1
npm install --save @angular/material @angular/cdk

Step 2
npm install --save @angular/animations
import {BrowserAnimationsModule} from '@angular/platform browser/animations';

Step 3
include the following in your app's index.html:
``<link href="../node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">``


### Typescript wait function to finish before proceeding `Promises`

someAsyncFunction(): Promise<void> {
      return new Promise((resolve) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
          console.log('Async operation complete');
          resolve();
        }, 1000);
      });
    }
    
    async  main() {
      await this.someAsyncFunction();
      console.log('Proceed after async operation');
    }  

### Work around fixed for ts datetime passing to c# datetime

Note: root cause is the time.

  export function dateSingleDigitWithLeadingZeros(dateNum:number) {
    if(dateNum < 10)
     return String(dateNum).padStart(2, '0');
    return dateNum
  }

    let stringDate: string = `${date.getFullYear()}-${dateSingleDigitWithLeadingZeros(date.getMonth() + 1)}-${dateSingleDigitWithLeadingZeros(date.getDate())}T00:00:00.000Z`
    // toISOString Format - YYYY-MM-ddT00:00:00.000Z example 2023-09-29T00:00:00.000Z 