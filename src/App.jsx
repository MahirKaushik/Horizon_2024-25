import React, { useState, useRef } from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import MainWebsite from "./mainwebsite";
import Footer from "./footer";
import Faq from "./Components/Faq";
import Navbar from "./Components/Navbar";
import Intro from './Components/Intro';
import Hello from './Components/Hello';

const cardData = [
  { title: "Card 1", description: "This is card 1", image: "url1" },
  { title: "Card 2", description: "This is card 1", image: "url1" },
  { title: "Card 3", description: "This is card 2", image: "url2" },
  { title: "Card 4", description: "This is card 3", image: "url3" },
  { title: "Card 5", description: "This is card 3", image: "url3" },
  // Add more card data as needed
];




function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef(null);

  const handleFinish = () => {
    setIntroFinished(true);
  };

  const handlePlayAudio = (shouldPlay) => {
    setPlayAudio(shouldPlay);
    if (shouldPlay && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      {/* <audio ref={audioRef} loop preload="auto" src="/loading intro.mp3"></audio>
      {!introFinished ? (
        <Intro onFinish={handleFinish} onPlayAudio={handlePlayAudio} />
      ) : (
        <>

        </>
      )} */}
                <div className="flex flex-col gap-24">
        <div>
          <Navbar />
        </div>
        <div>
          <Home />
          <div className="entire bg-[#FEFBEC]">
            <div className="workshops bg-[#B5DDC2] h-[177px] border-t-2 border-b-2 border-black flex justify-center items-center">
              <p className="text-[120px] font-bold leading-[144px] text-left font-itc-tiffany">
                WORKSHOPS
              </p>
            </div>

            <div>
              {/* her we will use map function to get multiple cards and make a */}
              <Carousel cardData={cardData} />
            </div>
          </div>
          
          <MainWebsite />
          <About/>
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
