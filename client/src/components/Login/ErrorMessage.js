import React from 'react'

export  function Error(props) {
    return (
        <div style={{color:"red",marginBottom:"2%"}}>
        {props.children}
    </div>
    )
}
