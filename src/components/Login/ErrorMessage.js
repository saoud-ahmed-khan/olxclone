import React from 'react'

export  function Error(props) {
    return (
        <div style={{color:"red",marginBottom:"3%"}}>
        {props.children}
    </div>
    )
}
