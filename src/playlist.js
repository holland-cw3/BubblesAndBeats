import MusicPlayer from "./musicPlayer";
import quackAttack1Mp3 from "./music/quackattack.mp3";
import hi from "./music/hi.mp3";
import h2 from "./music/Qau.mp3";
import QuackUp from "./music/QuackUp.mp3";
import waddle from './music/Waddle.mp3';
import mix from './music/BubbleMix.mp3';
import quackit from './music/QuackIt.mp3';



import songTitle from "./images/songsTitle.png";
import re from "./images/duck.png";
import bu from "./images/bubble.png";

import "./CSS/playlist.css";
import { useState } from "react";

export default function Game() {
  const [song, setSong] = useState(quackAttack1Mp3);
  return (
    <div class="padder">
      <div class="playerBg">
        <div class="playlist">
          <img src={songTitle} alt="" class="songTitle" />
          {/* <table>
            <tr class='buttnRow2'><td>Reward</td><td>Song</td><td>Difficulty</td></tr>
          </table> */}
          <div class="scrollable-container">
            <table class="selector">
              <tr>
                <td>
                  <button onClick={() => setSong(quackAttack1Mp3)}>
                    <div class="buttnRow">
                      <img src={re}></img>
                      <div>
                        <p>Quack Attack</p>
                      </div>

                        <img src={bu}></img>
                        <img src={bu}></img>
                        <img src={bu}></img>
                    </div>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(h2)}>Bubblin'</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(hi)}>Soapy Opera</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(QuackUp)}>
                    Quack Up
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(waddle)}>waddle'</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(mix)}>mix</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(quackAttack1Mp3)}>
                    Quack Attack
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(h2)}>Bubblin'</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(quackit)}>Quack It</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(hi)}></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(hi)}></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(hi)}></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(hi)}></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => setSong(hi)}></button>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <MusicPlayer songName={song} />
      </div>
    </div>
  );
}
