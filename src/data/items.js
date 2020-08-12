const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "What are React’s Key Features?",
    content:
      "Virtual DOM, JSX, Unidirectional Data Flow, Server-Side Rendering",
  },
  {
    title: "What is JSX?",
    content:
      "JSX is a Javascript syntax extension that allows us to write HTML in our JavaScript to create React Elements",
  },
  {
    title: "What is the Virtual DOM?",
    content: "React makes a virtual representation of the actual DOM in memory",
  },
  {
    title:
      "What is a Component in React and what are the two main ways to define them?",
    content:
      "Component: an independent reusable piece of the UI, Class Component: Component implemented using ES6 Classes extending React.Component, Function Component: Component implemented by a JS function that takes a props argument and returns a React element",
  },
  {
    title: "What are props and state in React?",
    content:
      "props is the JavaScript object, passed into a Component, that holds the configuration properties. props is immutable by the receiving Component. state is the JavaScript object, managed within the Component, that holds its internal state. Updates to either trigger a re-render",
  },
  {
    title: "What are Controlled and Uncontrolled components in React?",
    content:
      "Controlled: form data is handled by a React component, Uncontrolled: form data is handled by the DOM itself Controlled components are the recommended way to implement forms",
  },
  {
    title: "What are Error Boundaries?",
    content:
      "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI",
  },
  {
    title: "What are React Hooks?",
    content:
      "New feature in React 16.8. Allows function components to use state and other previous class-only features",
  },
  {
    title: "What is Redux?",
    content:
      "Redux is a library for managing application state. Redux is a solution for global state management, allowing you to pass data without the need to pass props through every level (aka props drilling)",
  },
  {
    title: "What are the main constituents of Redux?",
    content:
      "Actions, Reducers, Store. Actions are plain Javascript objects with type property to indicate what type of action is being performed. Actions are dispatched to the central store using store.dispatch(). Actions are usually created by Action Creator functions, which given some input generates the corresponding action. Reducers are functions that take an Action and a current state and returns the resulting state. Reducers must be pure functions and have no side effects. The Store is the central object that maintains and updates the application state. The Store also handles the registration and unregistering of listeners",
  },
];

export default items
