import React, { useState } from 'react'

export default function Textbox(props) {

    const caps = () => {
        console.log('you clicked ' + text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    const small = () => {
        let newText2 = text.toLocaleLowerCase();
        setText(newText2)
    }

    const clear = () => {
        setText('')
    }

    const [text, setText] = useState('');

    const handleonchange = (event) => {
        console.log('on change')
        setText(event.target.value)
    }

    return (
        <>
            <div className="mb-3">
                <label hthmlfor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} placeholder="enter something" onChange={handleonchange} id="exampleFormControlTextarea1" rows="7"></textarea>
                <button className="btn btn-primary mx-2 my-2" onClick={caps}>capitalize</button>
                <button className="btn btn-primary mx-2 my-2" onClick={small}>de-capitalize</button>
                <button className="btn btn-primary mx-2 my-2" onClick={clear}>CLEAR</button>


            </div>

            <div className="container">
                <h1>
                    TEXT SUMMARY
                </h1>
                <p>
                    your text contains {text.length} characters and {text.split("").length} words
                </p>
                <p>this takes about {0.008 * text.split("").length} minutes to read</p>

                <h4>PREVIEW YOUR <b>TEXT</b> HERE</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
