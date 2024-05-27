//create a simple toggle component from an input tag
import React from 'react'

const Toggle = ({active}:{active:boolean}) => {
    return (
        <label className="switch">
        <input type="checkbox" checked={active} />
        <span className="slider round"></span>
        </label>
    )
}

export default Toggle