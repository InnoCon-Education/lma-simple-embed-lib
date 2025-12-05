function setImage(parentID, childName) {
  const parent = document.getElementById(parentID);
  console.log(parent);
  while (parent?.firstChild) {
    parent?.removeChild(parent?.firstChild);
  }
  const child = document.createElement(childName);
  parent.appendChild(child);
}
