var komennot, teksti, pituus, i;
komennot = ["google", "listaa", "nimi - teemu", "soita", "tee popup", "video", "vaihda väri", "kysy", "animoi"];
pituus = komennot.length;          //määritellään listaan tarvittavat asiat, ja itse lista

function lista()
{
	if (document.getElementById('syote').value == "listaa") //otetaan input kentän elementti, jos kirjoitetaan tietty sana, tietty funktio tapahtuu
	{

	  teksti = "<ul>";    //määritellään array listaksi
      for (i = 0; i < pituus; i++) {            //loopataan listan jäsenet
      teksti += "<li>" + komennot[i] + "</li>";
     }
teksti += "</ul>";

document.getElementById("lista").innerHTML = teksti;  //määrätään listan paikka sivulla

}
}
document.getElementById('nappi').addEventListener("click", lista); //laitetaan nappi tunnistamaan funktio



	
function aani()
{
	if (document.getElementById('syote').value == "soita") 
	{
		var audio = new Audio('aani/perkele.m4a');     //täysin sama juttu, kuin pelissä
		audio.play();
	}

}
document.getElementById('nappi').addEventListener("click", aani); // nappi tunnistaa funktion

function nimi(){
	if (document.getElementById('syote').value == "teemu") 
	{
		var kuva = document.createElement("IMG");             //taas sama homma kuin pelissä
		kuva.src = "img/aku.jpg";
		this.appendChild(kuva);

		document.getElementById("kuva").appendChild(kuva); //määrää kuvan sijainnin
	}

}

document.getElementById('nappi').addEventListener("click", nimi);  // tunnistaa funktion


function google() {
	if (document.getElementById('syote').value == "google")
	{
		var linkki = "Google";  //määrää mitä linkissä lukee
		var tulos = linkki.link("https://www.google.fi/"); // ottaa linkin
		//ilmeisesti aukeaisi uudelle sivulle target _blankilla mutta ei onnistu
		

  

		
		
		document.getElementById("linkki").innerHTML = tulos; //määrää linkin paikan
	}

		


	
}
document.getElementById('nappi').addEventListener("click", google); //tunnistaa funktion


function pop()
{
	if (document.getElementById('syote').value == "tee popup") 
	{
		var divi = document.createElement("div");  //luodaan divi
		divi.appendChild(document.createTextNode('Tässä pyydetty popup')); //kirjoittaa sisään
		document.getElementById('popup').appendChild(divi); // määrää paikan
              //ei todellakaan toimi halutulla tavalla
	}
}
document.getElementById('nappi').addEventListener("click", pop); //tunnistaa funktion


function video()
{
	
	if (document.getElementById('syote').value == "video") 
	{
		var video = document.createElement("VIDEO"); //luodaan videoelementti
		

		if (video.canPlayType("video/mp4"))            //määritellään mitä videotyyppejä voidaan soittaa
		{
			video.setAttribute("src","video/video.mp4");
		}
  video.setAttribute("width", "320");     //määritellää attribuutit videolle, ja annetaan kontrollit
  video.setAttribute("height", "240");
  video.setAttribute("controls", "controls");

  this.appendChild(video);
  document.getElementById("video").appendChild(video);  //määrätään videon paikka

	}

	
}
document.getElementById('nappi').addEventListener("click", video); // tunnistaa funktion




function vaihto(){
	if (document.getElementById('syote').value == "vaihda väri") 
	{
		document.getElementsByTagName("BODY")[0].style.backgroundColor = "blue"; // määritellään vaihtamaan bodyn väri siniseksi
	}
	
}

document.getElementById('nappi').addEventListener("click", vaihto);  // tunnistaa funktion


function kysyNimi(){
	if (document.getElementById('syote').value == "kysy") 
	{
		var henkilo = prompt("Anna nimesi");      // kysyy nimeä, kun "kysy" kirjoitetaan
		document.getElementById("nimi").innerHTML = "Terve " +   henkilo; // tervehtii käyttäjää määritetyllä paikalla

	}
	
}

document.getElementById('nappi').addEventListener("click", kysyNimi); // tunnistaa funktion

function animaatio() {

	if (document.getElementById('syote').value == "animoi") 
	{
      var elementti = document.getElementById("oikeadivi",);  //määrittää animoitavan elementin tai divim
      var sijainti = 0; // alkuperäinen sijainti (positio 0)
      var id = setInterval(freimi, 5); //määrittää intervallin, pienemällä arvolla saadaan jatkuva liike
     function freimi() {
     if (sijainti == 350)      //jos sijaintina on 350, animaatio pysähtyy
     {
      clearInterval(id);
    } 
    else {
      sijainti++;          
      elementti.style.top = sijainti + 'px';   //muuten jatkuu
      elementti.style.left = sijainti + 'px'; 
    }
  }
}
}

	document.getElementById('nappi').addEventListener("click", animaatio); // tunnistaa funktion
  













	



// Otetaan input kenttä
var syote = document.getElementById("syote");

// Suoritetaan kun käyttäjä painaa näppäintä
syote.addEventListener("keyup", function(tapahtuma) {
  // 13 tarkoittaa entteriä
  if (tapahtuma.keyCode === 13) {
    // perustoiminto peruutetaan tarvittaessa
    tapahtuma.preventDefault();
    // lisätään toimimaan myös napin painalluksella
    document.getElementById("nappi").click();
   
  }
});









































