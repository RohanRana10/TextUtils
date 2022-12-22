import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //tells if dark mode on or not

  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
  <>
    <BrowserRouter>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
