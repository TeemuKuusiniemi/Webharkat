<?php
header("Content-Type: application/json");  

$json_data = file_get_contents("Tuote.json"); // haetaan JSON tiedosto

$json = json_decode($json_data); // json tiedostosta php muuttuja

$Tuote = $json ->Tuote; //tehdään array johon json objektit lisätään

$haku = array_filter($Tuote, "TuoteHaku"); //käy arrayn arvot, eli tuotteet läpi, "antaen" ne funktiolle TuoteHaku

echo json_encode($haku); // palauttaa json muotoisena arvot




function TuoteHaku($obj){ //  tehdään funktio, jonka avulla haetaan tietyt tuotteet, kategoriat, ja hinnat, tätä funktiota arrayfilter käyttää.
  if (isset($_GET['kat'])) {    //asetetaan parametri kat, jota käyttämällä haetaan kategoriat
	 $kat = $_GET['kat'];
      if ($obj ->Kategoria && $obj ->Kategoria == $kat)  { //haetaan kategoria parametrin mukaan
        return $kat;   
     }
     
 }
    if (isset($_GET['id'])) {
      $id = $_GET['id'];       //samat kuin ylhäällä mutta id:llä
       if ($obj ->Id && $obj ->Id == $id) {
  	     return $id;
  }
  

}
    if (isset($_GET['hintaali'])) { 
      $hinta = $_GET['hintaali'];  
        if ($obj->Hinta < $_GET['hintaali'] ) //saadaan alle annetun hinnan tuotteet.
          { 
            return $hinta;
          }
  

  

}
    if (isset($_GET['hintayli'])) { 
      $hinta = $_GET['hintayli'];  
        if ($obj->Hinta > $_GET['hintayli'] ) // saadaan yli annetun hinnan tuotteet
          { 
            return $hinta;
          }
          }


    if (empty($_GET)) //Ilman parametrejä listataan kaikki tuotteet
      {
        return true;
      }


      }




?>