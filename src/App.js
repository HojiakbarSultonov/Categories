import React, { useState } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin';
import Invoices from './pages/invoices/Invoices';
import  Grid  from './pages/invoices/Grid';


function App() {
  const [invoice, setInvoice] = useState([])
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        {/* <Route path='/admin' element = {<Admin invoice = {invoice} setInvoice = {setInvoice}/>}/> */}
        {/* <Route path='/invoice' element = {<Invoices invoice={invoice} />}/> */}
        {/* <Route path='/grid' element = {<Grid  />}/> */}
      </Routes>

      
    </div>
  );
}

export default App;
