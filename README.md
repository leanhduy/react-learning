# CODE SPLITTING

## What is Bundling? Benefits of Bundling?

-   **Bundling** is the process of combining all application code and dependencies into one or several large files, called `bundles`.
-   **Benefits**:
    -   Bundles make it easier to include JavaScript into a web page by reducing the number of `<script>` tags.
    -   Fewer files mean fewer HTTP requests to the server, improving page load times.
-   **Consequences**:
    -   As the app grows, the bundle file(s) will become larger, leading to longer loading times and negatively impacting initial load times and user experience.

## What is Code-Splitting?

-   **Code-Splitting** is a technique that addresses the "large bundle size" problem.
-   In code-splitting, large bundles are divided into smaller, manageable bundles. These smaller bundles are only loaded on demand or in parallel.

## Code-Splitting Benefits

-   **Faster Initial Loading Times**: Only the necessary code is loaded initially.
-   **Improved Interaction Times**: Code needed for interactions is loaded only when required.
-   **Better UX (Reduced User Abandonment)**: Users experience faster load times, reducing the likelihood of abandoning the page.

In React, code-splitting can be achieved with `lazy()` and `Suspense`.

# LAZY LOADING in REACT

## Basics

-   **Lazy Loading** allows splitting code into smaller chunks and only loading the code when required, reducing initial loading time.
-   Lazy loading can be achieved with the following features in React:
    -   Dynamic import
    -   `Suspense` component
    -   `lazy()` method

## How Lazy Loading Works

-   **Without Lazy Loading**: All components and code are included in the initial bundle. Large components and code can slow down the initial loading of the app.
-   **With Lazy Loading**: Lazy-loaded components are not included in the initial bundle. They are only loaded when you attempt to render them.

## Syntax

-   **Wrap the Component to be Lazy Loaded with the `lazy()` Method**:

    -   Example:
        ```javascript
        const LazyCounter = lazy(() => import('./Counter.js')) // This import pattern is called dynamic import
        ```

-   **Render the Lazy Loaded Component inside a React `Suspense` Component**:
    -   Best practice: Provide a fallback UI component to the `fallback` prop of the `Suspense` component (commonly for displaying a loading UI).
        ```javascript
        <Suspense fallback={<Loading />}>
            <LazyCounter />
        </Suspense>
        ```
