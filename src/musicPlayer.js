import { useState } from "react";
import "./App.css";
import record from "./images/recordDuck.png";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;
let audioSourceNode;
let analyser;
let previousEnergy = 0;
let energyThreshold = 2800;

function loadAudio(url, isPlaying) {
  fetch(url) 
    .then((response) => response.arrayBuffer())
    .then((data) => {
      audioContext.decodeAudioData(data, (buffer) => {
        audioBuffer = buffer; 
        console.log("Audio loaded successfully");
        playAudio(isPlaying);
      });
    })
    .catch((err) => console.error("Error loading audio:", err));
}

function playAudio(playing) {
  // Create a new source node and assign the audio buffer
  audioSourceNode = audioContext.createBufferSource();
  audioSourceNode.buffer = audioBuffer; // Assign the decoded buffer to the source node
  audioSourceNode.connect(audioContext.destination); // Connect to speakers
  audioSourceNode.start();

  // Add an event listener to stop the analysis when playback ends
  audioSourceNode.onended = () => {
    playing(false);
  };
  startAnalysis();
}

let currentColorIndex = 0; // Initialize the index for the color sequence
const colors = ["red", "green", "blue", "yellow", "purple", "orange"]; // Color sequence

function startAnalysis() {
  // Create an analyser node for frequency analysis
  analyser = audioContext.createAnalyser();

  analyser.fftSize = 4096; // Power of 2 (e.g., 1024)
  audioSourceNode.connect(analyser);
  analyser.connect(audioContext.destination);

  // Start the audio playback

  // Set up a basic beat detection using energy levels
  const beatDetection = setInterval(() => {
    // Create a buffer to hold frequency data
    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyData);

    // Calculate the total energy in the frequency data
    let totalEnergy = 0;
    for (let i = 0; i < frequencyData.length; i++) {
      totalEnergy += frequencyData[i];
    }

    // Compare with the previous energy level to detect a beat
    if (totalEnergy - previousEnergy > energyThreshold) {
      const currentColor = colors[currentColorIndex];

      // Change the square's color
      // document.body.style.backgroundColor = currentColor;
      document.getElementById("colorSquare").style.borderColor = currentColor;

      // Update to the next color, looping back to the first color if necessary
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Update previous energy
    previousEnergy = totalEnergy;
  }, 100);
}

export default function Game({ songName }) {
  const [playing, isPlaying] = useState(false);

  return (
    <div className="App">
      <div>
        <img
          src={record}
          class="record-img"
          alt="record"
          id="colorSquare"
          style={{
            border: "9px solid red",
            transition: "background-color",
          }}
        ></img>
      </div>
      <button
        disabled={playing}
        onClick={() => {
          isPlaying(true);
          loadAudio(songName, isPlaying);
        }}
        class="playb"
      >
        Play Song
      </button>
    </div>
  );
}
