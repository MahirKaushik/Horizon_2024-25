import React from 'react';
import MainWebsite from './mainwebsite';
import Footer from './footer';

import Navbar from "./component/Navbar"


function App() {
  return (
    <div>
      <div className='flex flex-col gap-24'>
      <div>
      <Navbar />
      </div>
      <div >
      <MainWebsite />
      <Footer />
      </div>
      </div>
      
    </div>

     
      

  );
}

export default App;