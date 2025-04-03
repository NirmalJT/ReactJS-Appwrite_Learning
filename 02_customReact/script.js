//Here today we are going to make our own custom react which going to be very simple where we going to understand what actually react do in the backend to inject js into html and how actually html in js  is converted to object 

//Way #1 not the best one cause we need to setAttribute again and again so we can use loop
const customRender1 = (reactElement, mainContainer) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(domElement);
};
//using for in loop to reduce the line of repeating code
const customRender2 = (reactElement, mainContainer) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to open google",
};
const mainContainer = document.querySelector("#root");
// customRender1(reactElement, mainContainer);
customRender2(reactElement, mainContainer);
