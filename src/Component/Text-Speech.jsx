import React, { useState } from "react";
import "./TextToAudio.css";

const TextSpeech = () => {
  const [text, setText] = useState("");

  const convertToAudio = () => {
    // use text to speech API here from web speech API
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div class="hero">
      <h1>
        Text To Speech <span>Converter</span>
      </h1>
      <div className="row">
        <textarea
          className=""
          placeholder="Enter text to convert ..!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button className="" onClick={convertToAudio}>
        Convert to Audio
      </button>
    </div>
  );
};

export default TextSpeech;
