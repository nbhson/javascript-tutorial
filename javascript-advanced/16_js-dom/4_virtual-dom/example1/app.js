import { createVNode, render } from "./helper.js";

// Initialize state variables
let state = {
  counter: 0,
};

// update state & rerender
function updateCounter() {
  state.counter += 1;
  renderApp();
}

// create Virtual DOM
function createAppVNode() {
  return createVNode('div', null, [
    createVNode('h1', null, ['Virtual DOM']),
    createVNode('p', null, [`Counter: ${state.counter}`]),
    createVNode('button', { onclick: updateCounter }, ['Increment']),
  ]);
}

// Function to re-render the entire application
function renderApp() {
  const appContainer = document.getElementById('app');
  const appVNode = createAppVNode();
  render(appVNode, appContainer);
}

// start application
renderApp();