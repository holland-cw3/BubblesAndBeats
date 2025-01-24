import Meyda from "meyda";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;

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
  const audioSourceNode = audioContext.createBufferSource();
  audioSourceNode.buffer = audioBuffer; // Assign the decoded buffer to the source node
  audioSourceNode.connect(audioContext.destination); // Connect to speakers
  audioSourceNode.start(); // Start playing
}

function loadAudio2(url) {
  fetch(url) // URL of the MP3 file
    .then((response) => response.arrayBuffer()) // Convert the file to an ArrayBuffer
    .then((data) => {
      audioContext.decodeAudioData(data, (buffer) => {
        audioBuffer = buffer; // Store the decoded audio buffer
        console.log("Audio loaded successfully");

        // You can now play the audio or process it
        startAnalysis();
      });
    })
    .catch((err) => console.error("Error loading audio:", err));
}

// Event listener for the button
document.getElementById("loadButton").addEventListener("click", () => {
  loadAudio("quackattack.mp3"); // Replace with the actual path or URL to your MP3 file
});

document.getElementById("analyzeButton").addEventListener("click", () => {
  loadAudio2("quackattack.mp3"); // Replace with the actual path or URL to your MP3 file
});

function startAnalysis() {
  // Create a buffer source node from the audioBuffer
  const audioSourceNode = audioContext.createBufferSource();
  audioSourceNode.buffer = audioBuffer;

  // Connect to analyser node
  let analyser = audioContext.createAnalyser();
  audioSourceNode.connect(analyser);
  analyser.connect(audioContext.destination);

  // Start playing the audio
  audioSourceNode.start();

  // Set up Meyda for beat detection
  const beatDetection = setInterval(() => {
    const beats = Meyda.extract("beat", analyser);
    if (beats) {
      const beatTimestamp = audioContext.currentTime;
      document.getElementById(
        "beats"
      ).innerHTML += `<h1>Beat detected at: ${beatTimestamp}</h1>`;
    }
  }, 100); // Check every 100 ms for beats
}


export default function timestamp(){
    return (
        <div class='beats'> </div>
    )
}
