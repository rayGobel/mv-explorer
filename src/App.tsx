import React from 'react';
import { Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <article>
        <Outlet />
      </article>
    </div>
  );
}

export default App;
