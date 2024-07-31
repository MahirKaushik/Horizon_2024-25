import React, { useState, useRef } from 'react';
import Intro from './components/Intro';
import Hello from './components/Hello';

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
    <>
      <audio ref={audioRef} loop preload="auto" src="/loading intro.mp3"></audio>
      {!introFinished ? (
        <Intro onFinish={handleFinish} onPlayAudio={handlePlayAudio} />
      ) : (
        <>
          <Hello />
        </>
      )}
    </>
  );
}

export default App;
