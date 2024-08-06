# The [HOLY GRAIL](https://www.greatfrontend.com/questions/user-interface/holy-grail/solution) challenge

## Type: HTML/CSS

## Level: Easy

### Descriptions

The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.

### Requirements

- **Header**
  - Stretches horizontally across the whole page
  - 60px tall.
- **Columns**
  - Both the left and right columns have a fixed width of 100px.
  - The center column is fluid-width.
  - All the columns should have the same height, regardless of which column is the tallest.
- **Footer**
  - Stretches horizontally across the whole page.
  - 100px tall.
  - The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

### Starter Code

- **_React component_**

```jsx
import "./styles.css";

export default function App() {
  return (
    <>
      <header>Header</header>
      <div>
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}
```

- **_Styling_**

```css
body {
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
}

* {
  box-sizing: border-box;
}

header,
nav,
main,
aside,
footer {
  padding: 12px;
}

header {
  background-color: tomato;
}

nav {
  background-color: coral;
}

main {
  background-color: moccasin;
}

aside {
  background-color: sandybrown;
}

footer {
  background-color: slategray;
}
```

## References

- [Holy Grail design layout - Wiki](<https://en.wikipedia.org/wiki/Holy_grail_(web_design)>)
