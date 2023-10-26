
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Setting/Settings';
import Display from './pages/Display/Display'; // Adjust the import path
import Sound from './pages/sound/Sound';
import Connections from './pages/Connections/Connections';
import AboutPhone from './pages/About_Phone/AboutPhone';
import Specs from './pages/About_Phone/specs';

import './App.css'; // Import your CSS file

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App flex-wrap ${isDarkMode ? 'dark-mode' : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Settings />} />
          <Route exact path="/display" element={<Display isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route exact path="/connections" element={<Connections />} />
          <Route exact path="/sound" element={<Sound />} />
          <Route exact path="/about_phone" element={<AboutPhone />} />
          <Route exact path="/specs" element={<Specs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
