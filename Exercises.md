# CUSTOM HOOKS - EXERCISES

## Exercise 1: useLocalStorage

### Requirements

Create a custom hook called useLocalStorage that synchronizes a state variable with local storage. This hook should:

-   Accept a key and an initial value as arguments.
-   Store the initial value in local storage if there is no existing value for the key.
-   Return the current value and a function to update the value in local storage.

### Starter Code

```
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Implement the custom hook logic here

  return [value, setValue];
}

export default useLocalStorage;

// Usage example in a component
import React from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
```

## Exercise 2: useFetch

### Requirements

Create a custom hook called useFetch that fetches data from a given URL. This hook should:

-   Accept a URL as an argument.
-   Return the fetched data, a loading state, and an error state.

### Starter code

```
import { useState, useEffect } from 'react';

function useFetch(url) {
  // Implement the custom hook logic here

  return { data, loading, error };
}

export default useFetch;

// Usage example in a component
import React from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## Exercise 3: useToggle

### Requirements

Create a custom hook called useToggle that manages a boolean state. This hook should:

-   Accept an initial value (true or false) as an argument.
-   Return the current value and a function to toggle the value.

### Starter Code

```
import { useState } from 'react';

function useToggle(initialValue) {
  // Implement the custom hook logic here

  return [value, toggleValue];
}

export default useToggle;

// Usage example in a component
import React from 'react';
import useToggle from './useToggle';

function App() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;

```

## Exercise 4: usePrevious

### Requirements

Create a custom hook called usePrevious that keeps track of the previous value of a state or prop. This hook should:

-   Accept a value as an argument.
-   Return the previous value of the argument.

### Starter Code

```
import { useEffect, useRef } from 'react';

function usePrevious(value) {
  // Implement the custom hook logic here

  return prevValue;
}

export default usePrevious;

// Usage example in a component
import React, { useState } from 'react';
import usePrevious from './usePrevious';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;

```

## Exercise 5: useDebounce

### Requirements

Create a custom hook called useDebounce that debounces a value. This hook should:

-   Accept a value and a delay as arguments.
-   Return the debounced value.

### Starter Code

```
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // Implement the custom hook logic here

  return debouncedValue;
}

export default useDebounce;

// Usage example in a component
import React, { useState } from 'react';
import useDebounce from './useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform a search operation here
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default App;

```
