// import logo from './logo.svg';
// import './App.css';

// Functional Conference
// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;


// Class Conference
import React, {Component} from "react";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
        </div>
      </div>
    );
  }
}
