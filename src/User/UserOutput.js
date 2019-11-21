import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Welcome {props.username}!! </p>
            <p>You're part of my first React assignment now!</p>
        </div>
    );
};

export default UserOutput;