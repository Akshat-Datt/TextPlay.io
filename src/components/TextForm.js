import React, {useState} from 'react'

export default function TextForm(props) {

  //text is a state here and 
  const [text, setText] = useState("Enter text here"); 

  //event listening
  const textUp = () => {
    //console.log("textUp clicked " + text) ... to check whether the function is working or not
    let newText = text.toUpperCase();
    setText(newText);
    
    if(document.getElementById("Content Box").innerHTML === "") {
      props.showAlert("First enter text!", "warning");
    }
    else{
      props.showAlert("Converted to UpperCase!", "success");
    }
  }
  const textDown = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(document.getElementById("Content Box").innerHTML === "") {
      props.showAlert("First enter text!", "warning");
    }
    else{
      props.showAlert("Converted to LowerCase!", "success");
    }
  }

  // textonChange checks for change in textarea

  const textOnChange = (event) => {
    //console.log("On change")
    setText(event.target.value)
  }

  const copyText = () => {
      var content = document.getElementById("Content Box");
      content.select();
      navigator.clipboard.writeText(content.value);
      
      if(document.getElementById("Content Box").innerHTML === "") {
        props.showAlert("First enter text!", "warning");
      }
      else{
        props.showAlert("Text Copied!", "success");
      }
  }

  const clearText = ()=> {
    
    
    if(document.getElementById("Content Box").innerHTML === "") {
      props.showAlert("First enter text!", "warning");
    }
    else{
      let vanish = document.getElementById("Content Box").innerHTML = "";
      setText(vanish);
      props.showAlert("Text Cleared!", "success");
    }
  }


  //***********************"UseState code for enable dark mode"*************************/

  // const [mode, setMode] = useState(
  //   {
  //     color: 'black',
  //     backgroundColor: 'white'
  //   }
  // );
  
  // const [btnText, setBtnText] = useState("Enable DARK mode")

  // const [btnStyle, setBtnStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black'
  // })

  // const toggleMode = () => {
  //   if(mode.color === 'black'){
  //     setMode({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     setBtnText("Enable LIGHT mode")
  //     setBtnStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //   }
  //   else {
  //     setMode({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable DARK mode")
  //     setBtnStyle({
  //       color: 'white',
  //       backgroundColor:'black'
  //     })
  //   }
  // }

  //textUp and textOnChange are name of functions to fire the event
  // in textarea we used javascript to alter style with respect to the present state {`outer curly brace is for use of javascript and {`inner curly brace is for object}}

  return (
    <div className={`${props.mode}`}>
        <h1>{props.head}</h1>
        <div className="mb-3">
            <label htmlFor="Content Box" className="form-label">Enter the Playfield, and enjoy the game of word manipulation</label>
            <textarea className="form-control " value={text} onChange={textOnChange} id="Content Box" rows="10" style={{backgroundColor: props.mode==='light'?'white':'#989898', color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
          <button className="btn btn-primary mx-2" onClick={textUp}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={textDown}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <div className="container my-3">
          <h2>Summary of your PlayField</h2>
          <p>Line count: {text.split("\n").length} | Word count: {text.split(" ").length} | Character count: {text.length}</p>
          <p>{0.008 * text.split(" ").length} is the "Time" in minutes, you may need to read it.</p>
        </div>
        <div className="container my-3">
          <h2>Preview and Copy area</h2>
          <p>{text}</p>
        </div>
    </div>
  )
}
//.008 is the time one may need to read a word  \n means new line