import './App.css';
import React from "react"
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="greeting">
        </div>  
      </div>
    </Router>
  );
}

export default App; 
