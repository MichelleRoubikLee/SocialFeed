import React, { useState, useEffect } from 'react';

function DisplayPost(props) {
    return ( 
        <div>
            <h1>{props.post.name}</h1>
            <h1>{props.post.text}</h1>
        </div>
        
     );
}

export default DisplayPost;