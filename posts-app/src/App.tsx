import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostDetailsPage from './pages/PostDetailsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<PostListPage />} />
      <Route path="/dados/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default App;
