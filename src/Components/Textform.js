import React, {useState} from 'react'

export default function Textform(props) {
    document.title = `TextUtils - Home`
    let textbgcolor = 'white'
    if(props.mode === 'dark'){
        textbgcolor = '#3d3d3d'
    }
    else if(props.mode === 'red'){
        textbgcolor = '#590909ff'
    }

    const [text, setText] = useState('');
    const upperCaseClicked = ()=>{
        let upcaseText = text.toUpperCase()
        setText(upcaseText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const lowerCaseClicked = ()=>{
        let upcaseText = text.toLowerCase()
        setText(upcaseText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleOnchange = (event)=>{
        setText(event.target.value)
        
    }
    const clearTextClicked = ()=>{
        setText("")
    }
    const handleCopy = ()=>{
        var text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard",'success')
    }
    let wordCount = text.split(/\s+/).filter(word => word !== '').length;
    return (
        <>
        <div className='container'>
            <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnchange}id="mybox" rows="8" style={{backgroundColor: textbgcolor, color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperCaseClicked}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={lowerCaseClicked}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={clearTextClicked}>Clear text</button>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{wordCount} words and {text.length} characters</p>
            <p> {Math.round(0.008 * wordCount)} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
    )
}
