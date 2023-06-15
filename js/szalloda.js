"use strict";

let lang;

if(localStorage.getItem("Language") === null) {
    lang = "hu";
    localStorage.clear();
    localStorage.Language = lang;
}


const hu = document.querySelector(".hu");
const en = document.querySelector(".en");
const de = document.querySelector(".de");
const fr = document.querySelector(".fr");

hu.addEventListener("click", () => {
    lang = "hu";
    localStorage.clear();
    localStorage.Language = lang;

    document.location.reload();
})

en.addEventListener("click", () => {
    lang = "en";
    localStorage.clear();
    localStorage.Language = lang;

    document.location.reload();
})

de.addEventListener("click", () => {
    lang = "de";
    localStorage.clear();
    localStorage.Language = lang;

    document.location.reload();
})

fr.addEventListener("click", () => {
    lang = "fr";
    localStorage.clear();
    localStorage.Language = lang;

    document.location.reload();
})



const fooldal = document.querySelector(".fooldal");
const dropbtn = document.querySelector(".dropbtn");
const foci = document.querySelector(".foci");
const atenisz = document.querySelector(".atenisz");
const tenisz = document.querySelector(".tenisz");
const sakk = document.querySelector(".sakk");
const galer = document.querySelector(".galer");
const szalloda = document.querySelector(".szalloda");
const program = document.querySelector(".program");
const fej = document.querySelector(".fej");
const szoveg = document.querySelector(".szoveg");
const szoveg2 = document.querySelector(".szoveg2");
const szoveg3 = document.querySelector(".szoveg3");
const web = document.querySelector(".web");
const web2 = document.querySelector(".web2");
const kozepszoveg2 = document.querySelector(".kozepszoveg2");

if(localStorage.getItem("Language") === "hu") {
   
    fej.innerHTML = `66. Nemzetközi Pénzügyi Torna`
    fooldal.innerHTML =  `Főoldal`;
    foci.innerHTML =  `Labdarúgás`;
    atenisz.innerHTML =  `Asztalitenisz`;
    tenisz.innerHTML =  `Tenisz`;
    sakk.innerHTML =  `Sakk`;
    galer.innerHTML =  `Galéria`;
    szalloda.innerHTML =  `Szálloda`;
    program.innerHTML =  `Programfüzet`;
    szoveg.innerHTML = `Az 1970-es években épült Hotel Budapest különleges a maga nemében: kör alakjával 15 emelet magasan emelkedik a város fölé,
    így páratlan panorámát kínál valamennyi szobájából. Retro jellege ma is visszaköszön belső építészetében és bútorzatában is:
     egyedi hangulata miatt korabeli és modern filmek, reklámfilmek kedvelt helyszíne. `;
    szoveg2.innerHTML = `A budapesti viszonylatban is számottevő hotel mind a 289 szobája impozáns kilátást és kényelmes pihenést ígér.
     Nemzetközi és magyar ételeket kínáló étterme, retro hangulatú kávézója és társalgója megnyugtató kiindulópontja
      és befejezése a nyüzsgő budapesti napoknak.`;
    szoveg3.innerHTML = `Telefon: +36 30 313 4005`;
    web.innerHTML = `Ugorj a weobldalra!`;
    web2.innerHTML = `Cím: 1026 Budapest, Szilágyi Erzsébet fasor 47. `;
    kozepszoveg2.innerHTML = `Elérhetőségek:`;
}

if(localStorage.getItem("Language") === "de") {
 
    fej.innerHTML = `66. Internationales Finanzsportturnier`
    fooldal.innerHTML =  `Heim`;
    dropbtn.innerHTML =  `Resultat`;
    foci.innerHTML =  `Fussball`;
    atenisz.innerHTML =  `Tischtennis`;
    tenisz.innerHTML =  `Tennis`;
    sakk.innerHTML =  `Schach`;
    galer.innerHTML =  `Galerie`;
    szalloda.innerHTML =  `Hotel`;
    program.innerHTML =  `Programmheft`;
    szoveg.innerHTML = `Az 1970-es években épült Hotel Budapest különleges a maga nemében: kör alakjával 15 emelet magasan emelkedik a város fölé,
    így páratlan panorámát kínál valamennyi szobájából. Retro jellege ma is visszaköszön belső építészetében és bútorzatában is:
     egyedi hangulata miatt korabeli és modern filmek, reklámfilmek kedvelt helyszíne. `;
    szoveg2.innerHTML = `A budapesti viszonylatban is számottevő hotel mind a 289 szobája impozáns kilátást és kényelmes pihenést ígér.
     Nemzetközi és magyar ételeket kínáló étterme, retro hangulatú kávézója és társalgója megnyugtató kiindulópontja
      és befejezése a nyüzsgő budapesti napoknak.`;
    szoveg3.innerHTML = `Telefon: +36 30 313 4005`;
    web.innerHTML = `Ugorj a weobldalra!`;
    web2.innerHTML = `Adresse: 1026 Budapest, Szilágyi Erzsébet fasor 47. `;
    kozepszoveg2.innerHTML = `Kontakt:`;

}

if(localStorage.getItem("Language") === "en") {
    fej.innerHTML = `66. International Financial Tournament`
    fooldal.innerHTML =  `Home`;
    dropbtn.innerHTML =  `Results`;
    foci.innerHTML =  `Football`;
    atenisz.innerHTML =  `Table tennis`;
    tenisz.innerHTML =  `Tennis`;
    sakk.innerHTML =  `Chess`;
    galer.innerHTML =  `Gallery`;
    szalloda.innerHTML =  `Hotel`;
    program.innerHTML =  `Program Guide`;
    szoveg.innerHTML = `Built in the 1970s, Hotel Budapest is special in its kind: it rises with 15 floors above the city in the shape of a circle,
     offering a unique panorama from all rooms. Its ‘retro’ character is still reflected in the interior architecture and furniture: due to the special
      atmosphere, it is a popular venue for shooting contemporary and modern films and commercials. `;

    szoveg2.innerHTML = `As a significant hotel in the Hungarian capital, all 289 rooms provide impressive view and comfortable rest for individuals and
     groups. Its restaurant offers international and Hungarian cuisine, and the retro-style café and lounge are perfect starting points to the bustling days of Budapest.`;
    szoveg3.innerHTML = `Mobile: +36 30 313 4005`;
    web.innerHTML = `Go to website`;
    web2.innerHTML = `Adress: 1026 Budapest, Szilágyi Erzsébet fasor 47. `;
    kozepszoveg2.innerHTML = `Contacts:`;

}

if(localStorage.getItem("Language") === "fr") {
    fej.innerHTML = `66e Tournoi International des Finances `; 
    fooldal.innerHTML =  `Domicile`;
    dropbtn.innerHTML =  `Résultats`;
    foci.innerHTML =  `Football`;
    atenisz.innerHTML =  ` Tennis de table`;
    tenisz.innerHTML =  `Tennis`;
    sakk.innerHTML =  `Échecs`;
    galer.innerHTML =  `Galerie`;
    szalloda.innerHTML =  `Hôtel`;
    program.innerHTML =  `Guide des programmes`;
    szoveg.innerHTML = `Built in the 1970s, Hotel Budapest is special in its kind: it rises with 15 floors above the city in the shape of a circle,
     offering a unique panorama from all rooms. Its ‘retro’ character is still reflected in the interior architecture and furniture: due to the special
      atmosphere, it is a popular venue for shooting contemporary and modern films and commercials. `;

    szoveg2.innerHTML = `As a significant hotel in the Hungarian capital, all 289 rooms provide impressive view and comfortable rest for individuals and
     groups. Its restaurant offers international and Hungarian cuisine, and the retro-style café and lounge are perfect starting points to the bustling days of Budapest.`;
    szoveg3.innerHTML = `Mobile: +36 30 313 4005`;
    web.innerHTML = `Go to website`;
    web2.innerHTML = `Adresse: 1026 Budapest, Szilágyi Erzsébet fasor 47. `;
    kozepszoveg2.innerHTML = `Contacts:`;



}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const dropButton = document.querySelector('.dropbtn');
const dropMenu = document.querySelector('.dropdown-content');

dropButton.addEventListener('click', () => {
    dropMenu.classList.toggle('display-content');
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-hide');
})

