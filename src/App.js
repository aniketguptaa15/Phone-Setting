
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Setting/Settings';
import Display from './pages/Display/Display'; 
import Sound from './pages/sound/Sound';
import Connections from './pages/Connections/Connections';
import AboutPhone from './pages/About_Phone/AboutPhone';
import Specs from './pages/About_Phone/specs';
import BackUp from './pages/About_Phone/Backup';
import Certification from './pages/About_Phone/Certification';
import Brightness from './pages/Display/Brightness';
import ReadingMode from './pages/Display/ReadingMode';
import SoundAssistant from './pages/sound/SoundAssistant';
import AdditionalSetting from './pages/sound/AdditionalSettings';
import Wireless from './pages/Connections/Wireless_Display';
import Vpn from './pages/Connections/VPN';
import CAST from './pages/Connections/Cast';
import Security_Status from "./pages/Setting/Security"
import Wifi from "./pages/Setting/Wi_Fi"
import Bluetooth from "./pages/Setting/Bluetooth"


import './App.css'; 
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
          <Route exact path="/Specs" element={<Specs />} />
          <Route exact path="/BackUp&Restore" element={<BackUp />} />
          <Route exact path="/Reset" element={<BackUp />} />
          <Route exact path="/importa" element={<BackUp />} />
          <Route exact path="/Certification" element={<Certification />} />
          <Route exact path="/Brightness" element={<Brightness />} />
          <Route exact path="/Read_mode" element={<ReadingMode/>} />
          <Route exact path="/sound_assistant" element={<SoundAssistant/>} />
          <Route exact path="/additional_settings" element={<AdditionalSetting/>} />
          <Route exact path="/wireless" element={<Wireless/>} />
          <Route exact path="/VPN" element={<Vpn/>} />
          <Route exact path="/Cast" element={<CAST/>} />
          <Route exact path="/Security" element={<Security_Status/>} />
          <Route exact path="/WIFI" element={<Wifi/>} />
          <Route exact path="/Bluetooth" element={<Bluetooth/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
