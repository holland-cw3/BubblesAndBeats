import { useState } from "react";
import "./App.css";
import quackAttack1Mp3 from "./music/quackattack.mp3"; // Path relative to 'src'
// import q from "./quackattacks.mp3"; // Path relative to 'src'

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;
let audioSourceNode;
let analyser;
let previousEnergy = 0;
let energyThreshold = 3000;

function loadAudio(url) {
  fetch(url) // URL of the MP3 file
    .then((response) => response.arrayBuffer()) // Convert the file to an ArrayBuffer
    .then((data) => {
      audioContext.decodeAudioData(data, (buffer) => {
        audioBuffer = buffer; // Store the decoded audio buffer
        console.log("Audio loaded successfully");

        playAudio();
      });
    })
    .catch((err) => console.error("Error loading audio:", err));
}

function playAudio() {
  audioSourceNode = audioContext.createBufferSource();
  audioSourceNode.buffer = audioBuffer; // Assign the decoded buffer to the source node
  audioSourceNode.connect(audioContext.destination); // Connect to speakers
  audioSourceNode.start(); // Start playing

  // Start frequency analysis

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
      document.getElementById("colorSquare").style.backgroundColor =
        currentColor;

      // Update to the next color, looping back to the first color if necessary
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Update previous energy
    previousEnergy = totalEnergy;
  }, 210);
}

export default function Game() {
  const [playing, isPlaying] = useState(false);

  return (
    <div className="App">
      <button
        disabled={playing}
        onClick={() => {
          loadAudio(quackAttack1Mp3);
          isPlaying(true);
        }}
      >
        Load and Play MP3
      </button>

      {/* Square to visualize the beat detection */}
      <div
        id="colorSquare"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "gray",
          marginTop: "20px",
          transition: "background-color", // Smooth color transition
        }}
      ></div>
    </div>
  );
}
