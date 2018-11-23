import React from 'react';

export const InputForm = (props) => (
    <div className="inputForm">
        <input onChange={props.onInputChange} value={props.newItem}/>
        <button onClick={props.onAddButtonClick}>Add</button>
        <button onClick={props.onClearButtonClick}>Clear</button>
    </div>
);