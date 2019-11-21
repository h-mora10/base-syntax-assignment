import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" style={props.style} onChange={props.changed} value={props.username}/>
        </div>
    );
};

export default UserInput;