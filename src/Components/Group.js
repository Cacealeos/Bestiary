// JavaScript source code
import React from 'react'
import { useState } from 'react'

const Group = ({ Enabled, Name, Entries }) => {

    if(Enabled)
        return (
            <>
                <h1>{Name}</h1>
                {Entries.map(E => {
                    return <h2>{E.Name}</h2>
                })}
            </>
        )
    else 
        return  <h1></h1>
    }
    
export default Group