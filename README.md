# React Learning - Testing

This branch demonstrates how to setup and write tests (unit tests, integration tests) for a React app created with Vite

## Setup

1. Create a React project with `npm create vite@latest`
2. Install neccessary packages for testing (with `npm install --save-dev` flag)
    - vitest
    - @testing-library/jest-dom
    - @testing-library/react
    - @testing-library/user-event
    - jsdom
3. Create `tests/setup.js` inside either root directory or `src` directory and config with

    ```
    import { afterEach } from 'vitest'
    import { cleanup } from '@testing-library/react'
    import '@testing-library/jest-dom/vitest'

    // runs a clean after each test case (e.g. clearing jsdom)
    afterEach(() => {
        cleanup()
    })
    ```

4. Add jsdom in the `vite.config.js`
    ```
    export default defineConfig({
        // ...
        test: {
            // 👋 add jsdom into vite
            environment: 'jsdom',
            globals: true,
            setupFiles: './src/tests/setup.js', // assuming the tests folder is in the `src` directory
        },
        // ...
    })
    ```
5. Write test file
   | Note: Depends on the vite template, the test file will end with either `test.jsx` or `test.js`

6. Add command in `package.json` for running test via `vitest`
    ```
    ...
    "scripts": {
        "test": "vitest"
    },
    ...
    ```
7. Run test by running npm command defined in the `package.json` (e.g., `npm run test`)
