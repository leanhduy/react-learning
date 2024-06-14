# useContext

## Coding Exercises

### Exercise 1: Basic Context Usage

**Objective**: Create a simple counter app that uses useContext to share state between components.

**1. Setup Context**

-   Create a CounterContext using React.createContext.
-   Create a CounterProvider component that uses useState to manage the counter value and provides the counter value and an increment function.

**2. Create Components**

-   Create a CounterDisplay component that consumes the counter value from CounterContext and displays it.
-   Create an IncrementButton component that consumes the increment function from CounterContext and increments the counter when clicked.

### Exercise 2: Theme Context

**Objective**: Create a theme switcher app that uses useContext to manage theme state.

**1. Setup Context**

-   Create a ThemeContext with default value { theme: 'light', toggleTheme: () => {} }.
-   Create a ThemeProvider component that uses useState to manage the theme state and provides the current theme and a toggle function.

**2. Create Components**

-   Create a ThemedButton component that consumes the theme from ThemeContext and changes its style based on the current theme.
-   Create a ThemeToggle component that consumes the toggle function from ThemeContext and toggles the theme when clicked.

### Exercise 3: Nested Context

**Objective**: Create an app that uses multiple contexts to manage different pieces of state.

**1. Setup Context**

-   Create a UserContext with default value { user: null, login: () => {}, logout: () => {} }.
-   Create a UserProvider component that manages user authentication state.
-   Use the ThemeContext from Exercise 2 for theme management.

**2. Create Components**

-   Create a UserProfile component that consumes the UserContext and displays user information.
-   Create a LoginButton component that consumes the UserContext and handles user login.
-   Integrate the ThemedButton and ThemeToggle components from Exercise 2.
