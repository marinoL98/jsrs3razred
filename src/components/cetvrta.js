import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IMG1 from '../cockatiels.png';
import IMG2 from '../redwing.jpg';
import IMG3 from '../pinkcockatoo.jfif';
import IMG4 from '../lovebirds.jpg';
import IMG5 from '../conure.jpg';



function Cetvrta(){

return(
<div class="containercetvrta">
<h1>Papige</h1>
<span>Sve papige u prodaji su ručno hranjenje od<br></br> jaja i mlađe od 12 mjeseci !</span>
<div >
<div class="karta1">
  <img src={IMG2}class="redwing"></img>
  <h3>Crvenokrila Papiga</h3>
  <p class="titlecard">Centralna Afrika</p>
  <p><b>1499,99 kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><a href="https://en.wikipedia.org/wiki/Red-winged_parrot" class="hrefcet">INFO</a></p></form>
</div>
</div>
<div class="karta2">
  <img src={IMG1}class="tiels"></img>
  <h3>Nimfa</h3>
  <p class="titlecard">Australia</p>
  <p><b>199,99 kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><a href="https://en.wikipedia.org/wiki/Cockatiel" class="hrefcet">INFO</a></p></form>
</div>
<div class="karta3">
  <img src={IMG3}class="coo"></img>
  <h3>Rozi Kakadu</h3>
  <p class="titlecard">Australia</p>
  <p><b>4499,99 kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><a href="https://en.wikipedia.org/wiki/Galah" class="hrefcet">INFO</a></p></form>
</div>
<div class="karta4">
  <img src={IMG4}class="lovebird"></img>
  <h3>Fischerova Papiga</h3>
  <p class="titlecard">Istočna Afrika</p>
  <p><b>359,99kn(2x)</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><a href="https://en.wikipedia.org/wiki/Lovebird" class="hrefcet">INFO</a></p></form>
</div>
<div class="karta5">
  <img src={IMG5}class="conure"></img>
  <h3>Sunčana Aratinga</h3>
  <p class="titlecard">Južna Amerika</p>
  <p><b>799,99kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><a href="https://en.wikipedia.org/wiki/Conure" class="hrefcet">INFO</a></p></form>
</div>

</div>
);
}

export default Cetvrta;