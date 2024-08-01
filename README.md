# Testing with React Testing Library, Vitest

## Setup

1. Install necessary dependencies

```bash
yarn add -D jest happy-dom @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom
```

2. Create a directory `tests` at the project root, with a file `setup.js`

```javascript
import {* as matchers} from '@testing-library/jest-dom/matchers'
import { expect, afterEach } from vitest
import { cleanUp } from '@testing-library/react'

expect.extend(matchers)

afterEach(()=>{
  cleanUp()
})
```

3. Config `package.json`

```json
scripts: {
  "test": "vitest"
}
```

4. Create test files

   > **Best practice**: Test file's name ends with `.test.js`, put inside `__test__` folder

5. Run test with `yarn test` or `npm run test`
