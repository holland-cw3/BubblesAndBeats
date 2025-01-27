import "./bg.css";
import i1 from "./images/water1.png";
import i2 from "./images/water2.png";
import i3 from "./images/water3.png";
import i4 from "./images/water4.png";
import bubble from "./images/bubble.png";

import Game from "./playlist";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div class="content">
        <Header />
        <div class="game">
          <Game />
        </div>
        <Footer />
      </div>
      <div class="bg">
        <div id="background-wrap">
          <div class="bubble x1">
            <img src={bubble}></img>
          </div>
          <div class="bubble x2">
            <img src={bubble}></img>
          </div>
          <div class="bubble x3">
            <img src={bubble}></img>
          </div>
          <div class="bubble x4">
            <img src={bubble}></img>
          </div>
          <div class="bubble x5">
            <img src={bubble}></img>
          </div>
          <div class="bubble x6">
            <img src={bubble}></img>
          </div>
          <div class="bubble x7">
            <img src={bubble}></img>
          </div>
          <div class="bubble x8">
            <img src={bubble}></img>
          </div>
          <div class="bubble x9">
            <img src={bubble}></img>
          </div>
          <div class="bubble x10">
            <img src={bubble}></img>
          </div>
        </div>
        <div class="stock-ticker">
          <ul>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
            <li class="minus">
              <img src={i1} alt=""></img>
            </li>
          </ul>
        </div>

        <div class="stock-ticker">
          <ul>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
            <li class="minus">
              <img src={i2} alt=""></img>
            </li>
          </ul>
        </div>
        <div class="stock-ticker">
          <ul>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
            <li class="minus">
              <img src={i3} alt=""></img>
            </li>
          </ul>
        </div>
        <div class="stock-ticker">
          <ul>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
          </ul>
        </div>
        <div class="stock-ticker">
          <ul>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
          </ul>
        </div>
        <div class="stock-ticker">
          <ul>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
          </ul>
          <ul aria-hidden="true">
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
            <li class="minus">
              <img src={i4} alt=""></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
