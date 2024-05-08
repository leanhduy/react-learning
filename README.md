# Technique: Infinite Scroll

**Description**
A modern alternative for displaying data for the traditional pagination method
Especially useful in social media apps, where there's a large amount of data

**Realworld usecase**:
Twitter tweets keep being loaded as user scrolldown

### Method 1. From scratch (no 3rd-party libraries)

1. Create states for scrolling

    - `isLoading`: for displaying loading state / loading animatino
    - `error`: for displaying any error occured
    - `items`: data fetching from the API endpoint
    - `page`: for the fetched page
      **Important Notes**: The API endpoint should support paging
      (e.g., For jsonplaceholder, paging while fetching data can be enabled with this syntax `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)

2. Fetch data with page = 1 when component first loaded

    - using Fetch API / Axios / etc
    - using useEffect hook with depedencies list `[]`

3. Handling scroll event and scroll logic
    - If `window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading`: do nothing
    - Otherwise, call fetch methods (meaning: the user reach the end of the page)

### Method 2. Utilizing an existing infinite scroll library or component `react-infinite-scroll-component`

**Pros:** Simpler set up
**Cons:** Add more dependencies into the project

1. Install the library `npm i react-infinite-scroll-component`
2. Set up the fetch logic
    - We still need the fetch logic, and some states set up (data, page)
    - The api endpoint for fetching data should support pagination (e.g., https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10)
3. Use the <InfiniteScroll> components. [Documentation](https://npmjs.com/package/react-infinite-scroll-component)

### Method 3. Intersection Observer API

(Coming soon...)

## [Source](https://blog.logrocket.com/3-ways-implement-infinite-scroll-react/)
