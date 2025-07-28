// use to create/update Virtual DOM
export function createVNode(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}
// render Virtual DOM to real DOM
export function render(vNode, container) {
  if (!container._vNode) {
    container._vNode = vNode;
    container.appendChild(createElementFromVNode(vNode));
  } else {
    const patchList = [];
    const patches = diff(container._vNode, vNode, patchList);
    patch(container.childNodes[0], patches);
    container._vNode = vNode;
  }
}
// create DOM from Virtual DOM
function createElementFromVNode(vNode) {
  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(String(vNode));
  }

  const element = document.createElement(vNode.tag);

  if (vNode.props) {
    for (const [key, value] of Object.entries(vNode.props)) {
      if (key.startsWith("on") && typeof value === "function") {
        const eventName = key.toLowerCase().substring(2);
        element.addEventListener(eventName, value);
      } else {
        element[key] = value;
      }
    }
  }

  if (vNode.children) {
    vNode.children.forEach((child) => {
      element.appendChild(createElementFromVNode(child));
    });
  }

  return element;
}
// compare 2 vDOMs
function diff(oldVNode, newVNode, patchList, elIndex = 0) {
  const oldChildren = oldVNode.children || [];
  const newChildren = newVNode.children || [];
  const childPatches = [];
  oldChildren.forEach((oldChild, index) => {
    if (typeof oldChild === "string" && oldChild !== newChildren[index]) {
      patchList.push({
        type: "SET_PROP",
        key: "textContent",
        value: newChildren[index],
        index: elIndex,
      });
    }
    childPatches.push(diff(oldChild, newChildren[index], patchList, index));
  });
  return patchList;
}
// update real DOM
function patch(node, patches) {
  patches.forEach((patch) => applyPatch(node, patch));
}
function applyPatch(node, patch) {
  switch (patch.type) {
    case "SET_PROP":
      node.childNodes[patch.index][patch.key] = patch.value;
      break;
    default:
  }
}
