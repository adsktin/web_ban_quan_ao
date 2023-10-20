// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./Pages/Layout/layout";
import Home from "./Pages/Home/home";

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout props={<Home/>}/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code>
//         </p>
//         <Layout>
          
//         </Layout>
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

export default App;
