import Navbar from './component/nav';
import Promo from './component/promo';
import Intro1 from './component/into1';
import Footer from './component/footer';
import Login from './component/login';
import React, {useState } from "react"

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Rest of your app code */}
      <Promo />
      <Intro1 />
      <Footer />
     < Login/>
    </div>
  );
};

export default App;
