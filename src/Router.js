import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './Pages/List/List';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
