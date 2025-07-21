// import logo from './logo.svg';
import { useState } from 'react';
import './custom.css'
import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar"
import Textform from "./Components/Textform"
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light')

  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#3d3d3d'
      document.body.style.Color = 'white'
      showAlert("Switched to dark mode","success")
    }
    else if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'
      showAlert("Switched to light mode","success")
    }
    
  }
  const redToggle = ()=>{
    if(mode === 'light'){
      setMode('red')
      document.body.style.backgroundColor = '#590909ff'
      document.body.style.Color = 'white'
      showAlert("Switched to red dark mode","success")
    }
    else if(mode === 'red'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Switched to light mode","success")
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} redtoggle={redToggle} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter your text here" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
          {/* use exact for exact match else it will match all the paths that start with "/" */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
