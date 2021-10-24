import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import logo from './logo.png'; // Tell webpack this JS file uses this image
import Email from './components/Email/Email';
import SelectClass from './components/SelectClass/SelectClass';
import SelectProfessor from './components/SelectProfessor/SelectProfessor';
function App() {
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
            <body Style="background-color: #9b0000; margin-top: 1.5%; margin-bottom: 1.5%">
              <p2>Note: All appointments will be conducted via Google Meet.</p2>  
              <p2> Use this site to schedule an appointment to receive help on Computer Science courses here at UW-Madison.</p2>
              <p2> Please arrive 5 minutes earlier to the appointment and have your question ready beforehand!</p2>
              <br />
            </body>
          </div>
          <div Style=""className="selectclass"> 
            <h2>Please select your class:</h2>
            <SelectClass />
          </div>
          <div className="selectprofessor">
            <SelectProfessor />
          </div>
          <div className="Email"> 
            <h4 Style="margin-botton: 2.5%"> Fill out your email/name and submit! </h4>
            <Email />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App; 
