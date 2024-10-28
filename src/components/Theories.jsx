// Virtual DOM :-
// VirtualDOM in React is a lightweight copy of the actual DOM
// whenever there is a change in the state of any element, a new Virtual DOM tree is created
// React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one
// which is just the pre-update version of this updated Virtual DOM
// Now it compares the pre-update version with the updated Virtual DOM 
// and figures out what exactly has changed in the DOM like which components have been changed. 
// This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’.
// React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM
// are sent in batches instead of sending any update for a single change in the state of a component. 
// This entire process of transforming changes to the real DOM is called Reconciliation.


//HOOK :-
// a function that allows a fuctional component to use react features
// without writing class components
// functional component is stateless
// we use class components for create and manage the states
// using hooks you can use state and lifecycle features from functional components

//useState :-
// declare a state variable that you can update directly
// const [state, setState] = useState(initialState)
// Call useState at the top level of your component to declare a state variable.
// initialState : This argument is ignored after the initial render.
// useState returns an array with exactly two values:
// 1.The current state. During the first render, it will match the initialState you have passed.
// 2.The set function that lets you update the state to a different value and trigger a re-render.

// useEffect :-
// lets to synchronize a component with an external system
// allows you to perform side effects in your components, such as fetching data, updating the DOM, or subscribing to event listeners: 
// useEffect(setup, dependencies?)
// useEffect accepts two arguments. The second argument is optional.
// Call useEffect at the top level of your component to declare an Effect
// How it works: Takes two arguments, the first being a required function and the second being an optional array of dependencies. When the dependencies change, the effect will rerun
// Returns undefined.


// Memoization is a performance optimization technique in React 
// that stores the results of function calls and returns them
//  when the same inputs occur again.