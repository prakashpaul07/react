// import logo from './logo.svg';
// import './App.css';

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

import PropsExample from './PropsExample'
function hello() {
  return(
    <div>
     <h1>This is abt props</h1>
     <PropsExample name="ravi" age="20"/>
      </div>
    )
}
export default hello