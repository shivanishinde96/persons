import React from 'react'
import './Person.css'

const Person=(props)=> {
    
    return (
        <div className="Person" onClick={props.clicked}>
            Name:{props.name}<br/>
            Age:{props.age}
        </div>
    )
}

export default Person