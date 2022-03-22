import React, { useState, useEffect } from 'react';
import DisplayPost from './DisplayPost';

function NewsFeed(props) {
    return ( 
        <div>
            {props.posts.map((post)=><DisplayPost post = {post}/>)}
        </div>
        
        
     );
}

export default NewsFeed;