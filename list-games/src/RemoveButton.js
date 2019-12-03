import React from 'react';

const RemoveButton = ({handleClick,game}) => {
    
        return <div><button onClick={()=>handleClick(game)} >remove</button></div>
    }
    
export default RemoveButton;