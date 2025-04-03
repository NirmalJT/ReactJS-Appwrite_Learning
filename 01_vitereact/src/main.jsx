import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp(){
  return(
    <div>
      <h1>hello today is day 2 of learnig DSA and Dev</h1>
    </div>
  )
}

//the html code that written in jsx is converted in to js object as tree like structure then injected in dom 
//but if we pass a object in render method it will show error cause our prop keys are not the same with the react props keys so it will show error
const ReactElement1 = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to open google",
};
// const anotherElement=(

//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

  const variable ='Elon Musk'
  //since the varible is directly declared in the objet while converting it to object from html thats why we can write js logic in the evaluated expression{} cause in object we dont write js logic
  const ReactElement2=React.createElement(
    
      'a',//tag
      {href:'https://google.com',target:'_blank'},//attribute
      'click me to visit google12',//children text
       variable//evaluated expression variable
    
  )


createRoot(document.getElementById('root')).render(

  //  ReactElement2
  //  anotherElement
  <App/>
)
