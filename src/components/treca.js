import { useState, useEffect, useRef } from "react";
import Login from './Login';
import Boja from './Boja';
import Todo from './Todo';



export default function Treca() {
 

  

  const [narudzba, postaviNarudzbu] = useState({
    hrana: "",
    kol: "",
    broj_str: ""
  });
  const [hrana, postaviHranu] = useState("");
  const [kol ,postaviKol] = useState("");
  const [marka, postaviMarku] = useState("");
  const inputRef = useRef("");
  const brojac = useRef(0);
  useEffect(() => {
    brojac.current = brojac.current + 1;
  }, [narudzba]); //dependency

  const DodajNarudzbu = (unos_hrana, unos_kol, unos_marka) =>
    postaviNarudzbu({
      hrana: unos_hrana,
      kol: unos_kol,
      marka:unos_marka
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    DodajNarudzbu(hrana, kol, marka);
  };
  return (
    <div className="Treca">
      <Login></Login>
      <br></br><br></br>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Hrana&nbsp; </b>
        </label>
        <input
          value={hrana}
          ref={inputRef}
          onChange={(e) => postaviHranu(e.target.value)}
        />
        <label>
          <b>&nbsp;Količina&nbsp; </b>
        </label>
        <input type="number" value={kol} onChange={(e) => postaviKol(e.target.value)} />
        <label>
          <b>&nbsp;Marka&nbsp; </b>
        </label>
        <input
          value={marka}
          onChange={(e) => postaviMarku(e.target.value)}
        />
        <input type="submit" value="Naruči" />
      </form>
      <div>
        Vrsta hrane su <b>{narudzba.hrana}</b>
        <br />
        U ovom pakovanju se nalazi <b>{narudzba.kol}</b> grama hrane
        <br />
        Hranu je proizveo/la <b>{narudzba.marka}</b>
        <br />
        Naručeno {brojac.current} puta
      </div>

      <Boja></Boja>
      <br></br><br></br>
     <Todo></Todo>

    </div>
  );
}
