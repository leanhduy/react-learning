# React Learning - React Portals

This repository illustrate the React Portal feature

## What is React portal

-   React portal is a way to render the children component outside of the DOM hierrachy of the parent component, while still maintaining the parent-child relationship.
-   React portal is suitable for cases that components need to be rendered on top of another components
-   Most common usecases of React portal are:
    -   Modals
    -   Layovers
    -   Dialogs

## The example

The code illustrate the use of React portal by implementing the rendering of Tooltip for a button
The `Tooltip` component is a child component of the `App` component, but is rendered on another DOM element (a div with id `portal-root`)
When hover over the button, the button coordinates will be passed into the `Tooltip` to properly display it.
