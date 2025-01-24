import MusicPlayer from "./musicPlayer";

import "./CSS/playlist.css";

export default function Game() {
  return (
    <div class='padder'>
      <div class="playerBg">
        <MusicPlayer />
      </div>
    </div>
  );
}
