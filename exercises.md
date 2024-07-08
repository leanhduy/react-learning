# useState Hook Coding Challenges

## Problem 1: Counter with Increment and Decrement

### Description

Create a counter component with two buttons: one to increment the counter and another to decrement it. The counter should start at 0.

### Starter Code

```javascript
import React, { useState } from 'react'

function Counter() {
    // Your useState code here

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter
```

---

## Problem 2: Toggle Visibility

### Description

Create a component with a button that toggles the visibility of a piece of text. The text should be visible by default.

### Starter Code

```javascript
import React, { useState } from 'react'

function ToggleVisibility() {
    // Your useState code here

    return (
        <div>
            <button onClick={toggleVisibility}>Toggle Visibility</button>
            {isVisible && <p>This text should be toggled</p>}
        </div>
    )
}

export default ToggleVisibility
```

---

## Problem 3: Input Tracker

### Description

Create a component that contains an input field and displays the current value of the input below it. The displayed value should update as you type.

### Starter Code

```javascript
import React, { useState } from 'react'

function InputTracker() {
    // Your useState code here

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <p>Current Value: {inputValue}</p>
        </div>
    )
}

export default InputTracker
```

---

## Problem 4: Dynamic Background Color

### Description

Create a component that changes the background color of a `div` element each time a button is clicked. Use an array of colors and cycle through them.

### Starter Code

```javascript
import React, { useState } from 'react'

const colors = ['red', 'green', 'blue', 'yellow', 'purple']

function DynamicBackground() {
    // Your useState code here

    return (
        <div
            style={{ backgroundColor: color, height: '100px', width: '100px' }}
        >
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default DynamicBackground
```

---

## Problem 5: Form State Management

### Description

Create a form with two input fields: one for the user's name and one for their email. Display the values of these fields below the form as the user types.

### Starter Code

```javascript
import React, { useState } from 'react'

function FormStateManagement() {
    // Your useState code here

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
            </form>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default FormStateManagement
```

---
