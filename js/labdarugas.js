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
const hely = document.querySelector(".hely");
const lejatszott = document.querySelector(".lejatszott");
const orszag = document.querySelector(".orszag");
const gyozelem = document.querySelector(".gyozelem");
const dontetlen = document.querySelector(".dontetlen");
const vereseg = document.querySelector(".vereseg");
const gol = document.querySelector(".gol");
const francia = document.querySelector(".francia");
const francia1 = document.querySelector(".francia1");
const francia2 = document.querySelector(".francia2");
const francia3 = document.querySelector(".francia3");
const francia4 = document.querySelector(".francia4");
const magyar = document.querySelector(".magyar");
const magyar1 = document.querySelector(".magyar1");
const magyar2 = document.querySelector(".magyar2");
const magyar3 = document.querySelector(".magyar3");
const magyar4 = document.querySelector(".magyar4");
const nemet = document.querySelector(".nemet");
const nemet1 = document.querySelector(".nemet1");
const nemet2 = document.querySelector(".nemet2");
const nemet3 = document.querySelector(".nemet3");
const nemet4 = document.querySelector(".nemet4");
const ausztria = document.querySelector(".ausztria");
const ausztria1 = document.querySelector(".ausztria1");
const ausztria2 = document.querySelector(".ausztria2");
const ausztria3 = document.querySelector(".ausztria3");
const ausztria4 = document.querySelector(".ausztria4");
const kozepszoveg = document.querySelector(".kozepszoveg");



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
    hely.innerHTML =  `Helyezés`;
    orszag.innerHTML = `Ország`;
    lejatszott.innerHTML =  `LM`;
    gyozelem.innerHTML =  `GY`;
    dontetlen.innerHTML =  `D`;
    vereseg.innerHTML =  `V`;
    gol.innerHTML =  `G`;
    francia.innerHTML =  `Franciaország`;
    francia1.innerHTML =  `Franciaország`;
    francia2.innerHTML =  `Franciaország`;
    francia3.innerHTML =  `Franciaország`;
    francia4.innerHTML =  `Franciaország`;
    magyar.innerHTML =  `Magyarország`;
    magyar1.innerHTML =  `Magyarország`;
    magyar2.innerHTML =  `Magyarország`;
    magyar3.innerHTML =  `Magyarország`;
    magyar4.innerHTML =  `Magyarország`;
    nemet.innerHTML =  `Németország`;
    nemet1.innerHTML =  `Németország`;
    nemet2.innerHTML =  `Németország`;
    nemet3.innerHTML =  `Németország`;
    nemet4.innerHTML =  `Németország`;
    ausztria.innerHTML =  `Ausztria`;
    ausztria1.innerHTML =  `Ausztria`;
    ausztria2.innerHTML =  `Ausztria`;
    ausztria3.innerHTML =  `Ausztria`;
    ausztria4.innerHTML =  `Ausztria`;
    kozepszoveg.innerHTML =  `Labdarúgás eredmények`;

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
    hely.innerHTML =  `Position`;
    orszag.innerHTML = `Nationalität`;
    lejatszott.innerHTML =  `SP`;
    gyozelem.innerHTML =  `S`;
    dontetlen.innerHTML =  `U`;
    vereseg.innerHTML =  `N`;
    gol.innerHTML =  `Tor`;
    francia.innerHTML =  `Frankreich`;
    francia1.innerHTML =  `Frankreich`;
    francia2.innerHTML =  `Frankreich`;
    francia3.innerHTML =  `Frankreich`;
    francia4.innerHTML =  `Frankreich`;
    magyar.innerHTML =  `Ungarn`;
    magyar1.innerHTML =  `Ungarn`;
    magyar2.innerHTML =  `Ungarn`;
    magyar3.innerHTML =  `Ungarn`;
    magyar4.innerHTML =  `Ungarn`;
    nemet.innerHTML =  `Deutschland`;
    nemet1.innerHTML =  `Deutschland`;
    nemet2.innerHTML =  `Deutschland`;
    nemet3.innerHTML =  `Deutschland`;
    nemet4.innerHTML =  `Deutschland`;
    ausztria.innerHTML =  `Österreich`;
    ausztria1.innerHTML =  `Österreich`;
    ausztria2.innerHTML =  `Österreich`;
    ausztria3.innerHTML =  `Österreich`;
    ausztria4.innerHTML =  `Österreich`;
    kozepszoveg.innerHTML =  `Fussball Resultat`;

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
    hely.innerHTML =  `Position`;
    orszag.innerHTML = `Nation`;
    lejatszott.innerHTML =  `P`;
    gyozelem.innerHTML =  `W`;
    dontetlen.innerHTML =  `D`;
    vereseg.innerHTML =  `L`;
    gol.innerHTML =  `Goals`;
    francia.innerHTML =  `France`;
    francia1.innerHTML =  `France`;
    francia2.innerHTML =  `France`;
    francia3.innerHTML =  `France`;
    francia4.innerHTML =  `France`;
    magyar.innerHTML =  `Hungary`;
    magyar1.innerHTML =  `Hungary`;
    magyar2.innerHTML =  `Hungary`;
    magyar3.innerHTML =  `Hungary`;
    magyar4.innerHTML =  `Hungary`;
    nemet.innerHTML =  `Germany`;
    nemet1.innerHTML =  `Germany`;
    nemet2.innerHTML =  `Germany`;
    nemet3.innerHTML =  `Germany`;
    nemet4.innerHTML =  `Germany`;
    ausztria.innerHTML =  `Austria`;
    ausztria1.innerHTML =  `Austria`;
    ausztria2.innerHTML =  `Austria`;
    ausztria3.innerHTML =  `Austria`;
    ausztria4.innerHTML =  `Austria`;
    kozepszoveg.innerHTML =  `Football Results`;

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
    hely.innerHTML =  `Position`;
    orszag.innerHTML = `Nation`;
    lejatszott.innerHTML =  `J`;
    gyozelem.innerHTML =  `V`;
    dontetlen.innerHTML =  `N`;
    vereseg.innerHTML =  `D`;
    gol.innerHTML =  `Buts`;
    francia.innerHTML =  `France`;
    francia1.innerHTML =  `France`;
    francia2.innerHTML =  `France`;
    francia3.innerHTML =  `France`;
    francia4.innerHTML =  `France`;
    magyar.innerHTML =  `Hongrie`;
    magyar1.innerHTML =  `Hongrie`;
    magyar2.innerHTML =  `Hongrie`;
    magyar3.innerHTML =  `Hongrie`;
    magyar4.innerHTML =  `Hongrie`;
    nemet.innerHTML =  `Allemagne`;
    nemet1.innerHTML =  `Allemagne`;
    nemet2.innerHTML =  `Allemagne`;
    nemet3.innerHTML =  `Allemagne`;
    nemet4.innerHTML =  `Allemagne`;
    ausztria.innerHTML =  `Autriche`;
    ausztria1.innerHTML =  `Autriche`;
    ausztria2.innerHTML =  `Autriche`;
    ausztria3.innerHTML =  `Autriche`;
    ausztria4.innerHTML =  `Autriche`;
    kozepszoveg.innerHTML =  `Football Résultats`;



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