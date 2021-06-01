import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pocetna from '../pocetna.jpeg';
import LOB from '../lob.png';


function Prva() {

    
      return <div className="prvicontainer">
       
       <h1 >Papiga PetShop</h1>
          <img src={LOB}class="fischerke"></img>
          <div class="opis">
            <img src={Pocetna}class="pocetnaslika"/>
            
           
            
               
          </div>

          <div class="divsalistom">

<h2><b>Novi Vlasnik?</b></h2>
<b>Kavezi:</b>
<ul>
<li>Mali (od 200kn)</li>
<li>Veliki(od 800kn)</li>
</ul>

<b>Igračke i Oprema:</b>
<ul>
<li>Igračke Za Žvakanje</li>
<li>Igračke Za penjanje</li>

</ul>

<b>Prehrana:</b>
<ul>
<li>Sjemenke</li>
<li>Vitamini</li>
</ul>

</div>


          
      </div>

  


    }
  




  export default Prva;