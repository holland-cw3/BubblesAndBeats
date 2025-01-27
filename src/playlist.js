import MusicPlayer from "./musicPlayer";
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

import songTitle from "./images/songsTitle.png";

import "./CSS/playlist.css";
import { useState } from "react";

export default function Playlist() {
  const [song, setSong] = useState(quackAttack1Mp3);
  const [name, setName] = useState("Quack Attack");
  const [activeRow, setActiveRow] = useState("Quack Attack");

  const handleRowClick = (newSong, newName) => {
    setSong(newSong);
    setName(newName);
    setActiveRow(newName);
  };

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

  return (
    <div className="padder">
      <div className="playerBg">
        <div className="playlist">
          <div class="songTitleContainer">
            <img src={songTitle} alt="" class="songTitle" />
          </div>
          

          <div className="scrollable-container">
            <table className="selector">
              {songs.map(({ file, name }) => (
                <tr
                  key={name}
                  className={activeRow === name ? "active-row" : ""}
                >
                  <td>
                    <button onClick={() => handleRowClick(file, name)}>
                      {name}
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>

        <MusicPlayer songName={song} title={name} />
      </div>
    </div>
  );
}
