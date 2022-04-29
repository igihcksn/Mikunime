import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from 'pages/layouts/MainLayouts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainLayouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
