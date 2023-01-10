import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// now here we will refactor enable dark mode to change the theme of whole app using props from textform and navbar 
// if any component has to communicate with App.js it has to do with props
// rfce is a react function based component shorthand

function App() {

  const[dark, setDark] = useState('light'); //a state which tells whether the dark mode is enabled
  const[name, setName] = useState("Enable DARK Mode");
  const [alert, setAlert] = useState(null);

  // setAlert is an object here

  // alert is set to null in the start and here we are giving two parameters to showAlert for them being assigned to setAlert the name of parameters and the variables they are being stored in can be different and same as well

  const showAlert = (msg, type)=> {
      setAlert({
        message : msg,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  // showAlert here is a method 

  // the function below is an arrow function 
  const alterMode = ()=> {
      if(dark === 'light') {
        setDark('dark');
        setName("Enable LIGHT Mode");
        showAlert("DARK Mode has been enabled", "success");
        document.body.style.backgroundColor = '#333333';
        document.body.style.color = 'white';
      }
      else{
        setDark('light');
        setName("Enable DARK Mode");
        showAlert("LIGHT Mode has been enabled", "success");
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
  }

  return (
    <div className="App">
      
        <Navbar name="TextPlay.io" about="About TextUtils" alterMode={alterMode} Name={name}/>
        <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} head="PlayGround" mode={dark}/>
      </div>
      
    </div>
  );
}

export default App;
