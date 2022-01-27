import React from 'react';
import { useSelector } from 'react-redux';
import Table from './component/Table';
import Total from './component/Total';
import { Routes, Route } from 'react-router-dom'


function App() {

  const cart = useSelector(state => state.main.cart);

  return (
    <div>
    <Routes>
      <Route path = "/*" element={<Table />} />
      
    </Routes>
    {cart&&<Total />}
    </div>
  );
}

export default App;
