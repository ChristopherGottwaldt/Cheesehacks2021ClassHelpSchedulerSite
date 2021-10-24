import './App.css';
import React from "react"
import Navbar from './components/Navbar/Navbar';
import SelectClass from './components/SelectClass/SelectClass';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import logo from './logo.png'; // Tell webpack this JS file uses this image
import Email from './components/Email/Email';

function App() {
  document.body.style = 'background: #ffffff;';
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Navbar/>
          <img src={logo} alt="Logo" /> 
        </div>  
        <div className = "questions">
          <div className="introduction"> 
            <h1>Scheduling Assistant</h1>
          </div>
          <div className="instructions">
            <body>
              <p1>Note: All appointments will be conducted via Google Meet.</p1>  
              <p1>Use this site to schedule an appointment to receive help on Computer Science courses here at UW-Madison. </p1>
            </body>
          </div>
          <div className="Email"> 
            <Email />
          </div>
        </div>
      </div>
    </Router>
  );
  // return (
  //   <Router>
  //     <div className="App">
  //       <Navbar />
  //       <div className="greeting">
  //       </div>  
  //     </div>
  //   </Router>
  // );
}

export default App; 
