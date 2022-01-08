# Travel App

## Approach outline

The application based on Atomic Design Methodology has been developed with usage of Angular Material library. Material is a wide-known library that provides
ready-made solutions, of such basic units of the front-end applications as buttons, icons, inputs, tables, etc., for the projects, which are not requiring a lot of styles customization.
In current case it presents Atomic Design-like components that were used in the project. For convenience importing MaterialModule was created. In real project template components would be not dumb,
but smart components, that would receive and share data by using state managers (I prefer NgRx for these purposes), in current project this logic implemented by @Inputs and mocked data. 

## Time spent.

1) Initializing project, creating basic modules, creating Atomic Design elements structure - 2 hours
2) Working on connections between components, components basic logic - 3 hours.
3) Creating layout and styling - near 3 hours.
4) Creating unit tests - near half an hour.

## Any known issues or limitations of the solution

1) The application is using Material library for design purposes, and I've made a decision
   to not create wrappers around Material elements to make it part of Atomic Design, since these
   elements are already developed as atoms and molecules. For example mat-form-field (molecule) is a component that
   wraps several Angular Material components (atoms) such as mat-label, mat-icon, matInput.
2) The unit tests were created only for the form component, since other components seem to be too simple for testing.
