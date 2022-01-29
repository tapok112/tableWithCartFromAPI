import React from 'react';
import Table from './component/Table';
import { Routes, Route } from 'react-router-dom'
import RidPage from './component/RidPage';

function App() {

  return (
    <Routes>
      <Route path = '/*' element={<Table />} />
      <Route path = '/:rid' element={<RidPage/>} />
    </Routes>
  );
}

export default App;
