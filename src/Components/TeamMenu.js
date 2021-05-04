import React from 'react'
import { useState } from 'react'
import Group from './Group'
const TeamMenu = ({ AddGroup, setGroup }) => {

    return (
        <>
            {Object.values(setGroup).map(X => {
                return <Group Enabled={X.Enabled} Name={X.Name} Entries={X.Enemies}/>
            })}

            <button className="item-button" onClick={AddGroup}>Add Group</button>
        </>
    )
}

export default TeamMenu