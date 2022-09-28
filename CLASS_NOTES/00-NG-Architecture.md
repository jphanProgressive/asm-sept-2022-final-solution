# Angular Architecture

Angular is for building application. It is not a good tool for building websites.

You have a an HTML page that is delivered to the user.

The HTML page has an element in it that will contain our running angular application.

That is created by downloading a bunch of javascript and that javascript "Creates" the application right in front of the users very eyes.

## NgModules

Types of Modules

1. App Module / Root Module

- The main module of each Angular application.
- Contains all other modules.
- Responsible for the "shell" of your application - it is the thing that contains our application.

2. Feature Modules

- Modules created to expose a discrete feature within our application (like a Shopping List!)
- Usually is either a `routed` feature module or a `routing` feature module.

3. Utility or "Shared" Modules

- Contain things that are used by other modules.
- Could contain components for a UI-library, etc.
- Could have services, etc.
