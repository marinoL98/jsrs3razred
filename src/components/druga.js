import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import malikavez from '../kavezmali.jpeg';
import velikikavez from '../velikikavez.jfif';
import mineralniblok from '../blok.jpg';
import CC from '../cockatiel.png';


function Druga() {
return(

<div>
<img src={CC}class="cockatiel"></img>
<div class="card">
  <img src={malikavez}class="malikavez"></img>
  <h3>Kavez Za Male i Srednje Papige</h3>
  <p class="titlecard">60 x 70 x 50</p>
  <p><b>299,99 kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><button >KUPI</button></p></form>
</div>

<div class="card2">
  <img src={velikikavez} class="malikavez"></img>
  <h3>Kavez Za Velike Papige</h3>
  <p class="titlecard">160 x 170 x 120</p>
  <p><b>899,99 kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><button >KUPI</button></p></form>
</div>

<div class="card3">
<img src={mineralniblok}class="blokm"></img>
  <h3>Mineralni Blok </h3>
  <p class="titlecard">50g</p>
  <p><b>9,99 kn</b></p>
  <form action='dostava?dostava=a' method='get'>
  <p><button >KUPI</button></p></form>
</div>
<center><div class="trgovina">
Hranidbene proizvode možete naručiti isključivo pomoću <a href="treca">narudžbe</a> 
</div></center>


</div>




)

    }

export default Druga;