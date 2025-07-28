const appContainer = document.getElementById("appContainer");

// create shadow DOM
const shadowRoot = appContainer.attachShadow({ mode: "closed" });

// create new element
const shadowElement = document.createElement("div");
shadowElement.textContent = "Hello from Shadow DOM!";
shadowElement.classList.add(["red_color"]);

// add element to Shadow DOM
shadowRoot.appendChild(shadowElement);
