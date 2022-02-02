import React from "react";
import { Toaster } from "react-hot-toast";
import Gallery from './pages/Gallery';

import './App.css';

function App() {
  return (
    <div className="App">
      <Gallery />
      <Toaster position="top-right" toastOptions={{duration: 2500,}}/>
    </div>
  );
}

export default App;
