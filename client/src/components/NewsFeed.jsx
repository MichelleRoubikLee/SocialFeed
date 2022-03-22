import React, { useState, useEffect } from 'react';
import DisplayPost from './DisplayPost';

function NewsFeed(props) {
    return ( 
        <DisplayPost post = {props.posts[0]}/>
     );
}

export default NewsFeed;