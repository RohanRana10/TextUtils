import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text Converted to UPPERCASE!","success");
    }
    
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text Converted to lowercase!","success");
    }

    const handleTitleClick = () => {
        let temp = text.toLowerCase();
        let ans = capitalCase(temp);
        setText(ans);
        props.showAlert("Text Converted to Title Case!","success");
    }
    
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!","success");
    }

    const capitalCase = (str) => {
        let n = str.length;
        let ans = "";
        ans = ans + str[0].toUpperCase();
        for(let i = 1; i<n;){
            if(str[i] === " " && i+1 < n){
                ans = ans + " " + str[i+1].toUpperCase();
                i+=2;
            }
            else{
                ans = ans + str[i];
                i++;
            }
        }
        return ans;
    }

    // const words = (str) => {
    //     if(str.length === 0){
    //         return 0;
    //     }
    //     let count = 1;
    //     for(let i = 0; i<str.length-1; i++){
    //         if(str.charAt(i) === " " && str.charAt(i+1) !== " "){
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState('');// this is a hook created for functional components

    return (
        <>
        <div className='container' style={{ color : props.mode === 'light' ? '#042743' : 'white'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light' ? 'white' : 'rgb(10 67 112)', color : props.mode === 'light' ? '#042743' : 'white'}} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.length === 0} onClick={handleUpClick} className="btn btn-primary">Convert to UPPERCASE</button>
            <button disabled={text.length === 0} onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Convert to lowercase</button>
            <button disabled={text.length === 0} onClick={handleTitleClick} className="btn btn-primary mx-2 my-2">Convert to Title Case</button>
            <button disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary mx-2 my-2 my-2">Copy Text</button>
            <button disabled={text.length === 0} onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear</button>
            
        </div>
        <div className="container my-3" style={{ color : props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minute read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter text to Preview..'}</p>
        </div>
        </>
    )
}
