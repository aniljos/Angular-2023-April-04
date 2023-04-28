## Angular Training



### Commands

1. Install Angular CLI: npm install -g @angular/cli
2. Create Application: ng new awesome-app
3. Start Application: ng serve --open

### Repositories

1. Angular APP: https://github.com/aniljos/Angular-2023-April-04
2. Mock REST API: https://github.com/aniljos/REST-API-Mock

### JavaScript scopes

1. Global
2. Function
3. Block(ES6): use let and const keyword
4. Module(ES6) 

### Typescript reference

1. https://www.typescriptlang.org/


### Angular Version

1. AngularJS (1.x): https://angularjs.org/
2. Angular (> 2.x): https://angular.io/

### Angular Components

1. Components are reuseable UI elements.
2. They have a View(template) and the logic(class).
3. Decorated with the @Component.
4. They have to be part of a module.
5. Use the selector to render the component.

### Template Variable

1. Varibale decalred/created in the View(template) of the component
2. #variable is the syntax


### Change Detection

1. A mechanism to detect changes in the View/Component and update the UI

### Template

1. Template is compiled to the view
2. Angularjs compilation was at run-time.
3. Angular uses a AOT compiler(build phase)
4. Angular 8 introduced a new version of the compiler called the Ivy compiler

### Http Calls

1. These calls are asynchronous.
2. 3 ways in which to handle the result: callbacks(functions), promise(object), observable(rxjs)
3. Angular its uses Rxjs observables
4. If the response is JSON, its automatically unmarshalled to a javaScript object
5. If the request posts JSON, its automatically marshalled to a javaScript object

### Arrow Functions(Lambdas)

1. Alternative to Function expressions
2. More concise syntax
3. Its used for functional and asynchronous programming
4. Diff from functions expressions: Arrow fns do not revice the implicit args(this, arguments)

### Routes

1. Route configuration
2. Child Routes
3. Router Guards
4. Multiple Router-outlets