import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './index.css'
import App from './App.jsx'
import { createElement } from 'react'
import ReactApp from './ReactApp.jsx'

// const element = createElement('h1', { className: 'greeting' }, 'Hello, React!');

// console.log(element);
// function MainContent() {
//   return (
//    <main>
//     <Header/>
//     <Section/>
//     <Footer/>
//    </main>
//   )
// }
// function Section(){
//   return (<div>
//         <h1>This is the main content of the page.</h1>
//         <p> Here we go in details about React </p>
//         <LearningReact />
//      </div>)
// }


// function LearningReact() {
//   return (
//     <ol>
//        <li> I am Trying to learn react because it is a powerful library for building user interfaces.</li>
//        <li> React is component-based and allows for reusable UI elements.</li>
//        <li> React uses a virtual DOM to improve performance.</li>
//     </ol>
//   )
// }
// function Footer() {
//   return (
//     <footer>
//       <small>© 2026 My React App. All rights reserved.</small>
//     </footer>
//   )
// }
// createRoot(document.getElementById('root')).render(
//    <MainContent />
// )

const root = createRoot(document.getElementById('root'));
root.render(
  <ReactApp />
);