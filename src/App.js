import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './pages/PostPages';
import PostList from './components/PostList';
import SearchBar from './components/PostItem';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <PostList />
    </div>
  );
};

export default App;
