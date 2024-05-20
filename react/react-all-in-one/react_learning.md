# Install Developer Tools extenstion for Firefox or Chrome

## Install React

node -v
npm -v
npx create-react-app cms
cd cms
npm run

CodeSandBox is also another place you can start coding

To get to the codesandbox, you just type `react.new` on the browser, it will take you to brand new project on codesandbox

https://codesandbox.io/

List of Products in JSON as data fillers:
https://hplussport.com/api/products/order/price
Github API:
http://api.github.com/users/{username}

React is a Library not a framework
Item | Example
----- | -------
Routing for SPA | React Router / React Location
HTTP Request | Fetch / Axios
Remote State Management | React Query / SWR / Apollo
Global State Management | Context API / Redux / Zustand
Styling | CSS Modules / Styled Components / tailwindcss
Form Management | React Hook Form / Formik
Animations / Transitions | Motion / react-spring
UI Components | MJ / Chakra / Mantine

React based opinionated Frameworks:
Next.js / Remix / https://www.gatsbyjs.com/

Vanilla React App does not includes
HTTP Requests
Styling
Routing
Form Management

Next.js and Remix includes above (already chosen for you)

Server Side Rendering (SSR)
Static Site Generation (SSG)
Developer Experience (DE)

OMDb API for Popcorn App

useEffect:

Hooks:

| Name                 | Use                      |
| -------------------- | ------------------------ |
| useState             | ---                      |
| useEffect            | ---                      |
| useReducer           | ---                      |
| useContext           | ---                      |
| useRef               | Less used                |
| useCallBack          | Less used                |
| useMemo              | Less used                |
| useTransition        | Less used                |
| useDeferredValue     | Less used                |
| useLayoutEffect      | will not learn           |
| useDebugValue        | will not learn           |
| useImperativeHandle  | will not learn           |
| useId                | will not learn           |
| useSyncExternalStore | Only for Library Authors |
| useInsertionEffect   | Only for Library Authors |

rules:

1. Only call hooks at the top level
   1.a. Don't call hooks inside conditionals, loops, nested functions,or after an early return.
   1.b. This is necessary to ensure that hooks are always called in the same order (hooks rely on this)
2. Only call from a React Functions
   2.a.Only call hooks inside function component or a custom hook. Not from regular functions or React Class Components.
   These rules are automatically enforced by React ESLint rules.

## useState Hooks

```javascript
// Creating State
// Simple
const [total, setTotal] = useState(50);
//Lazy evaluation based on call back function
const [total, setTotal] = useState(() => localStorage.getItem('total'));

// Updating State
// Simple
setTotal(1000);
// Call Back method
setTotal((t) => t + 1);

// Never mutate Object
```

## useRef

- Box (Object) with mutable `.current` property that is persisted across renders as normal variables are always reset.

```javascript
// Example
const newRef = useRef(55);
newRef.current = 900;
```

- Use Cases:
- Creating a varibale that stays same between renders. (previous state, setTimeOut id, etc)
- Selecting and storing DOM elements.

* Refs are for data that are not rendered. Mostly in event handlers and effects and not in JSX. (Otherwise use State instead)
* Don't read or write `.current` in render logic. (like state)

State vs Ref

- Refs are like states but with less power.
- Both persisted across renders.
- Updating State causes re-render whereas Ref does not.

Need to Store Data =>
=> Will Data change at some point
=> (NO) => use Regular const variable
=> (YES)
=> Should it re-render the component
(YES) => State (useState)
(NO) => Ref (useRef) - Preserving previous Stateor storing the ID of a setTimeout.

- States are immutable
- Refs are not immutable.
- States are updated asynchronously (We can't read the value of a State immmediately after updating it)
- Ref are updated synchronously (We can read the ref immediately after assigning or updating it)

| .     | Persists across renders | Updating causes re-render | Immutable | Asynchronous Updates |
| ----- | ----------------------- | ------------------------- | --------- | -------------------- |
| State | ✅                      | ✅                        | ✅        | ✅                   |
| Ref   | ✅                      | 🆇                         | 🆇         | 🆇                    |

### Reusing Logic with Custom Hooks

Reuse UI => Create Component
Reuse Logic => Does it include hooks?
=> (YES) => Use Custom Hook
=> (NO) => Use Regular Function

```javascript
// Sample custom hook
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    fetch(url)
      .then((res) => res.json)
      .then((res) => setData(res));
  }, []);
  return [data, isLoading];
}
```
