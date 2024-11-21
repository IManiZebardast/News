import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import PostDetail from './postdetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}
