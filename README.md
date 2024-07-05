# LAZY LOADING

## Basics

-   Lazy loading allows splitting code into smaller chunks, and only loads the code when it is required, therefore reduces the initial loading time.
-   Lazy loading can be achieved with these features in React:
    -   Dynamic import
    -   `Suspend` component
    -   `lazy(loading)` method

## How lazy loading works

-   If no lazy loading is implemented, all components and code are included in the intial bundle. If any components and code is large, they will slow down the intial loading of the app / component
-   If lazy loading is implemented, lazy loaded components will not be included in the initial bundle. They are only loaded when you attempt to render the components
