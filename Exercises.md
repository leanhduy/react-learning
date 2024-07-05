# Lazy Loading in React - Coding Exercises

## Exercise 1: Lazy Load a Component

**Requirements:**

-   Create a React component named `UserProfile`.
-   Lazy load the `UserProfile` component in the `App` component.
-   Use the `Suspense` component with a fallback loading indicator.
-   Display the `UserProfile` component when a button is clicked.

**Starter Code:**

```javascript
// UserProfile.js
import React from 'react';

export default function UserProfile() {
  return <div>User Profile</div>;
}

// App.js
import React, { lazy, Suspense, useState } from 'react';

const UserProfile = lazy(() => import('./UserProfile'));

export default function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <button onClick={() => setShowProfile(true)}>Show Profile</button>
      {showProfile && (
        <Suspense fallback={<div>Loading...</div>}>
          <UserProfile />
        </Suspense>
      )}
    </div>
  );
}
```

## Exercise 2: Lazy Load Multiple Components

**Requirements:**

-   Create two React components: Dashboard and Settings.
-   Lazy load both components in the App component.
-   Use the Suspense component with different fallback loading indicators for each component.
-   Display the Dashboard component when a button labeled "Show Dashboard" is clicked.
-   Display the Settings component when a button labeled "Show Settings" is clicked.

**Starter Code:**

```
// Dashboard.js
import React from 'react';

export default function Dashboard() {
  return <div>Dashboard</div>;
}

// Settings.js
import React from 'react';

export default function Settings() {
  return <div>Settings</div>;
}

// App.js
import React, { lazy, Suspense, useState } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDashboard(true)}>Show Dashboard</button>
      <button onClick={() => setShowSettings(true)}>Show Settings</button>

      {showDashboard && (
        <Suspense fallback={<div>Loading Dashboard...</div>}>
          <Dashboard />
        </Suspense>
      )}

      {showSettings && (
        <Suspense fallback={<div>Loading Settings...</div>}>
          <Settings />
        </Suspense>
      )}
    </div>
  );
}
```

## Exercise 3: Lazy Load a Component with Dynamic Import

**Requirements:**

-   Create a React component named `Comments`.
-   Lazy load the `Comments` component in the `App` component using dynamic import with a delay for demonstration purposes.
-   Use the `Suspense` component with a fallback loading indicator.
-   Display the `Comments` component when a button is clicked.

**Starter Code:**

```
// Comments.js
import React from 'react';

export default function Comments() {
  return <div>Comments</div>;
}

// App.js
import React, { lazy, Suspense, useState } from 'react';

const Comments = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Comments')), 2000);
  });
});

export default function App() {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComments(true)}>Show Comments</button>
      {showComments && (
        <Suspense fallback={<div>Loading Comments...</div>}>
          <Comments />
        </Suspense>
      )}
    </div>
  );
}
```

## Exercise 4: Lazy Load a Component with React Router

**Requirements:**

-   Create two React components: `Home` and `About`.
-   Use React Router to set up routing for these components.
-   Lazy load the Home and `About` components using React.lazy and Suspense.
-   Provide a fallback loading indicator while loading the components.

**Starter Code:**

```
// Home.js
import React from 'react';

export default function Home() {
  return <div>Home</div>;
}

// About.js
import React from 'react';

export default function About() {
  return <div>About</div>;
}

// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

```
