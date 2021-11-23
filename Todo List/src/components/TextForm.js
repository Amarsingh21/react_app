import React,{useState} from "react";

export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success");
    }
    
    
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!" , "success");
    }
        
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear Text!" , "success");
    }

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

            // Remove extra Space
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text,setText] = useState('');
    //text= "new Text"; // wrong way 
    //setText("new text"); //Correct way
  return(
      <>
        <div class="container">
            <div class="mb-3  col-md-9">
                <label for="exampleFormControlTextarea1" class="form-label">Input your Message</label>
                <textarea class="form-control rows-8 col-4" id="myBox" value={text} onChange={handleOnChange} rows="4" placeholder="Enter your text Here."></textarea>
            </div>
            <button className="btn btn-primary mx-2 offset-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 offset-1" onClick={handleLoClick}>Convert to Lowercase</button>           
            <button className="btn btn-primary mx-2 offset-1" onClick={handleClearClick}>Clear</button>           
            <button className="btn btn-primary mx-2 offset-1" onClick={handleCopy}>Copy</button>           
            <button className="btn btn-primary mx-2 offset-1" onClick={handleExtraSpaces}>Remove Extraspace</button>           
        </div>
        <div className="container my3">
            <h1>Yur Text Summery</h1>
            <p> {text.split(" ").length} words and {text.length} Character</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p> 
        </div>
      </>
    )
}