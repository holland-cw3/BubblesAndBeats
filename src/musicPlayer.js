import { useState } from "react";
import "./App.css";
import record from "./images/recordDuck.png";
import duck from "./images/talk_animation.gif";
import still from "./images/duck.png";

import quackAttack1Mp3 from "./music/quackattack.mp3";
import hi from "./music/hi.mp3";
import h2 from "./music/Qau.mp3";
import QuackUp from "./music/QuackUp.mp3";
import waddle from "./music/Waddle.mp3";
import mix from "./music/BubbleMix.mp3";
import quackit from "./music/QuackIt.mp3";
import spooky from "./music/Spooky.mp3";
import fright from "./music/fright.mp3";
import jacd from "./music/jacd.mp3";
import west from "./music/west.mp3";

const songs = [
  { file: quackAttack1Mp3, name: "Quack Attack" },
  { file: h2, name: "Bubblin'" },
  { file: hi, name: "Soapy Opera" },
  { file: QuackUp, name: "Quack Up" },
  { file: waddle, name: "Waddle" },
  { file: mix, name: "Mix" },
  { file: spooky, name: "Spooky" },
  { file: quackit, name: "Quack It" },
  { file: fright, name: "Fright" },
  { file: west, name: "West" },
  { file: jacd, name: "Just a Country Duck" },
];

function shuffle(isPlaying, index) {
  isPlaying(true);
  let url = songs[index].file;

  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((data) => {
      audioContext.decodeAudioData(data, (buffer) => {
        audioBuffer = buffer;
        console.log("Audio loaded successfully");

        audioSourceNode = audioContext.createBufferSource();
        audioSourceNode.buffer = audioBuffer;
        audioSourceNode.connect(audioContext.destination);
        audioSourceNode.start();

        audioSourceNode.onended = () => {
          shuffle(isPlaying, index + 1);

        };
        startAnalysis();
      });
    })
    .catch((err) => console.error("Error loading audio:", err));
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;
let audioSourceNode;
let analyser;
let previousEnergy = 0;
let energyThreshold = 3000;

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

function stopAudio() {
  audioSourceNode.stop();
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
    document.getElementById("nowPlaying").innerHTML = `<h1>Now Playing:</h1>`;
  };
  startAnalysis();
}

let currentColorIndex = 0; // Initialize the index for the color sequence
const colors = ["red", "green", "blue", "yellow", "purple", "orange"]; // Color sequence

function startAnalysis() {
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 4096;
  audioSourceNode.connect(analyser);
  analyser.connect(audioContext.destination);

  const beatDetection = setInterval(() => {
    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyData);

    let totalEnergy = 0;
    for (let i = 0; i < frequencyData.length; i++) {
      totalEnergy += frequencyData[i];
    }

    if (totalEnergy - previousEnergy > energyThreshold) {
      const boxes = document.querySelectorAll(".duck-box");

      // Randomly select boxes to jump
      const randomIndexes = new Set();
      while (randomIndexes.size < Math.ceil(boxes.length / 2)) {
        randomIndexes.add(Math.floor(Math.random() * boxes.length));
      }

      boxes.forEach((box, index) => {
        if (randomIndexes.has(index)) {
          box.style.transform = "translateY(-30px)";
          setTimeout(() => {
            box.style.transform = "translateY(0px)";
          }, 100); // Reset after jump
        }
      });

      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    previousEnergy = totalEnergy;
  }, 100);
}

export default function Game({ songName, title }) {
  const [playing, isPlaying] = useState(false);

  return (
    <div className="play">
      <div class="border" />
      <div className="App">
        <img
          src={record}
          className={`record-img ${playing ? "spinning" : ""}`}
          alt=""
        ></img>
        <div className="controls">
          <div id="nowPlaying">
            <h1>Now Playing:</h1>
          </div>
          <button
            disabled={playing}
            style={{ color: "#7cfc00" }}
            onClick={() => {
              isPlaying(true);
              loadAudio(songName, isPlaying);
              document.getElementById(
                "nowPlaying"
              ).innerHTML = `<h1>Now Playing: ${title}</h1>`;
            }}
            className="playb"
          >
            PLAY
          </button>
          <button
            disabled={!playing}
            onClick={() => {
              isPlaying(false);
              stopAudio();
            }}
            style={{ color: "red" }}
            className="playb"
          >
            STOP
          </button>
          <button
            onClick={() => {
              shuffle(isPlaying, 0);
            }}
            style={{ color: "red" }}
            className="playb"
          >
            Shuffle
          </button>
        </div>
      </div>
      <div class="border" />
      <div className="ducks">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            className="duck-box"
            src={playing ? duck : still}
            alt=""
          ></img>
        ))}
      </div>
    </div>
  );
}
