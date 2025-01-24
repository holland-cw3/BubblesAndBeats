import MusicPlayer from "./musicPlayer";
import quackAttack1Mp3 from "./music/quackattack.mp3"; // Path relative to 'src'
import hi from "./music/hi.mp3"; // Path relative to 'src'
import h2 from "./music/Qau.mp3"; // Path relative to 'src'

import "./CSS/playlist.css";
import { useState } from "react";

export default function Game() {
  const [song, setSong] = useState(quackAttack1Mp3);
  return (
    <div class="padder">
      <div class="playerBg">
        <table class="selector">
          <tr>
            <td>
              <button >
               Songs
              </button>
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
              <button onClick={() => setSong(hi)}>Soapy Opera</button>
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
              <button onClick={() => setSong(hi)}>Soapy Opera</button>
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
              <button onClick={() => setSong(hi)}>Soapy Opera</button>
            </td>
          </tr>
        </table>
        <MusicPlayer songName={song} />
      </div>
    </div>
  );
}
