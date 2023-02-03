import './App.css';
import './reset.css'
import Top from "./cp/Top"
import Service from './cp/Service';
import Production from './cp/Production';
import Profile from './cp/Profile';
import Contact from './cp/Contact';
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/service" element={<Service />} />
          <Route path="/production" element={<Production />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
