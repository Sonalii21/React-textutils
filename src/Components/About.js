// import React, { useState } from 'react'

export default function About(props) {
    document.title = `TextUtils - About`
    let mystyle = {
        color: props.mode === 'dark' ? 'white': props.mode === 'red' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#3d3d3d' : props.mode === 'red' ? '#320404ff' : 'white',
    }

    return (
        <div className="container py-2" style={mystyle}>
            <h1 className='my-4'>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Powerful Text Analysis
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Analyze your text instantly.</strong> TextUtils provides word and character counts, reading time estimation, and more to help you understand and optimize your content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Easy Text Transformations
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Convert your text with a single click.</strong> TextUtils lets you easily change case, remove extra spaces, copy text, and perform other useful transformations to streamline your workflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Fast & Secure
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Fast, secure, and privacy-friendly.</strong> TextUtils works instantly in your browser and does not store your data, ensuring your text remains private and secure.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
