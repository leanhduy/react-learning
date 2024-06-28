# React Learning - React Portals

This repository illustrate the React Portal feature

## What is React portal

-   React portal is a way to render the children component outside of the DOM hierrachy of the parent component, while still maintaining the parent-child relationship.
-   React portal is suitable for cases that components need to be rendered on top of another components
-   Most common usecases of React portal are:
    -   Modals
    -   Layovers
    -   Dialogs

## Exercise 1: Create a modal

-   Create a Modal component that uses React Portal to render its content outside the main React component tree.
-   Create an App component that includes a button to open and close the modal.
-   Ensure that the modal can be closed by clicking a close button inside the modal.
