import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'
import NotFound from './Component/NotFound'

function hello() {
  return(
    //<div>
    //  <h1>This is abt props</h1>
    //  <PropsExample name="ravi" age="20"/>
    //  <PropsExample name="teja" age="20"/>    
    //  <PropsExample name="saikumar" age="20"/> 
    //   </div>
    //<FuncPropExample framework="react.js" id="101" year="2018"/>
    //<StateExample/>
    
    // <Events/>
    <div>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
}
export default hello

// import logo from './logo.svg';
// import './App.css';

//import StateExample from "./StateExample"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import ClassComponent2 from './ClassComponent2'
// import ClassComponent from './ClassComponent'
//  function hello () {
//    return(
//     <div>
//       <ClassComponent2/>
//       <ClassComponent/>
//       <p>how are you</p>
//       <h1>hope you all are good</h1>
//       <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2" alt="logo"/>
//     </div>
//   )
//  }
//  export default hello;

//import FuncPropExample from './FuncPropExample'
//import StateExample from "./StateExample"
//import Events from "./Events"
