import React from 'react';

const Comment = (props) => {
    const {email,name} = props.comment;
    return (
        <div>
            <p>
                {name} :{email}
            </p>
        </div>
    );
};

export default Comment;