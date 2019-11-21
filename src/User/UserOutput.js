import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Welcome {props.username}!! </p>
            <p>You're part of my first React assignment now!</p>
        </div>
    );
};

export default UserOutput;