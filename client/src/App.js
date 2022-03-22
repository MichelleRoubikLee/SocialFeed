import React, { useState, useEffect } from 'react';

import './App.css';
import NewPost from './components/NewPost';
import NewsFeed from './components/NewsFeed';

function App() {
  const [posts, setPosts]= useState([
    {
      name: "Michelle",
      text: "Hello World"
    }
  ]);

  return (
    <div className="App">
      <NewPost/>
      <NewsFeed posts = {posts}/>
    </div>
  );
}

export default App;
