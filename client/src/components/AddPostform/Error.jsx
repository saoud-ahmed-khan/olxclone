import React from 'react'

export  function Error(props) {
    return (
        <div style={{color:"red",marginBottom:"1%"}}>
        {props.children}
    </div>
    )
}
