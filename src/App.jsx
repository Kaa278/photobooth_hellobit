import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutProvider } from './context/LayoutContext';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import SelectLayout from './pages/SelectLayout';
import Camera from './pages/Camera';
import Preview from './pages/Preview';
import Gallery from './pages/Gallery';
import About from './pages/About';
import useSmoothScroll from './hooks/useSmoothScroll';
import './index.css';

function App() {
  useSmoothScroll();

  return (
    <LayoutProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="frame" element={<SelectLayout />} />
            <Route path="camera" element={<Camera />} />
            <Route path="preview" element={<Preview />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </LayoutProvider>
  );
}

export default App;
