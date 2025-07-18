// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from "./Components/Navbar"
import Textform from "./Components/Textform"
import Alert from './Components/Alert';

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
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Switched to light mode","success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className='container my-3'>
        <Textform heading="Enter your text here" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
