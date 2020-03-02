# Unit Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

This project is used as an in-class exercise demonstrating how to create unit tests in an Angular framework making use of Karam as the test runner and Jasmine for test creation.

The app will obtain and display U.S. Dept. of Education, Common Core Data.  We're gong to get the data from https://educationdata.urban.org/documentation/.  "The Common Core of Data is the US Department of Education's primary database on public elementary and secondary education. It provides directory and enrollment information at the school level and directory, enrollment, and finance data at the school district level."  API specifications to include data fields can be found at https://nces.ed.gov/ccd/.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instructions

	1, Create a new app
	    $ng new unittesting
	    $ng serve
	    Open a browser and navigate to 
	2. Open another terminal and run the unit tests
	    $ng test
	3. Technologies
	    Karma - Is for test running.  Run tests using Karma.
	    Jasmine - Is the testing framework.  We write test using Jasmine.
	4. Install a mocking framework
	    Edit package.json and add the following under devDependencies
			"ts-mockito":"^2.4.2",
	    From the command line, get the dependency
			$ npm install
	5. Edit the code
		Review the existing tests
	6. Generate a service to handle the request to obtain data
		$ng g s CommonCoreData
		Why did your test fail?
	7. Modify the component to call the service and display the results.
	8. Write the unit tests
