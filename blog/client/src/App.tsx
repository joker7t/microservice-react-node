import React from 'react';
import PostCreate from './PostCreate';
import "./App.scss";
import PostList from './PostList';

function App() {
  return (
    <div className="App container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
  );
}

export default App;
