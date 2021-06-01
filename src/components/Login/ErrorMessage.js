import React from 'react'

export  function Error(props) {
    return (
        <div style={{color:"red",marginBottom:"5%"}}>
        {props.children}
    </div>
    )
}
