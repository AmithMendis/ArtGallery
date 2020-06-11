import React, { Component } from 'react';
import Header from './Components/Header/header';
import Home from './Containers/HomePage/home';
import './app.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="App-header" id="header">
//       </div>
//       <div className="App-body">
//         <p>Body</p>
//       </div>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className="App">
       <Header></Header>
       <Home></Home>
      </div>
    );
  }
}

export default App;
