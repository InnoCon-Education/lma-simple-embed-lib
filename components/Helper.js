function setImage(parentID, childName) {
  const parent = document.getElementById(parentID);
  while (parent?.firstChild) {
    parent?.removeChild(parent?.firstChild);
  }
  const child = document.createElement(childName);
  parent.appendChild(child);
}

function setOpacity(element, opacity) {
  if (element.style.opacity !== opacity) {
    element.style.opacity = opacity;
  }
}

function setPointerEvents(element, pointerEvents) {
  if (element.style.pointerEvents !== pointerEvents) {
    element.style.pointerEvents = pointerEvents;
  }
}
