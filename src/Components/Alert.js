import React from 'react'

export default function Alert(props) {
    const capitalize = (txt)=>{
        let word = txt.toLowerCase()
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        <div className="container" style={{height: '50px'}}>
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}
