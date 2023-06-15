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

//index

const koszonto = document.querySelector(".koszonto");
const szoveg = document.querySelector(".szoveg");
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


if(localStorage.getItem("Language") === "hu") {
    fej.innerHTML = `66. Nemzetközi Pénzügyi Torna`
    koszonto.innerHTML = `Üdvözöllek a weboldalon!`;
    szoveg.innerHTML = `Ezen az oldalon a 66-odjára megszervezett Nemzetközi Pénzügyi tornáról olvashatsz. Az eredményeknél megtalálható a 4 különböző sportághoz (Labdarúgás, Asztalitenisz
        , tenisz, sakk) tartozó külön táblázatot, illetve a folyamatosan frissülő eredményeket. A galéria fülön a különböző napokon készült fotók tekinthetőek meg. A résztvevők 
        szállásukról, a Hotel Budapestről is olvashatnak, illetve a hozzátartózó elérhetőségeket is megtekinthetik. A programfüzetben napokra, illetve időpontokra lebontva megtalálható
        a torna összes programja. <br> Sok sikert kívánunk minden résztvevőnek és jó szórakozást!`;
    fooldal.innerHTML =  `Főoldal`;
    foci.innerHTML =  `Labdarúgás`;
    atenisz.innerHTML =  `Asztalitenisz`;
    tenisz.innerHTML =  `Tenisz`;
    sakk.innerHTML =  `Sakk`;
    galer.innerHTML =  `Galéria`;
    szalloda.innerHTML =  `Szálloda`;
    program.innerHTML =  `Programfüzet`;

}

if(localStorage.getItem("Language") === "de") {
    fej.innerHTML = `66. Internationales Finanzsportturnier`
    koszonto.innerHTML = `Willkommen!`;
    szoveg.innerHTML = `nemet szoveg`;
    fooldal.innerHTML =  `Heim`;
    dropbtn.innerHTML =  `Resultat`;
    foci.innerHTML =  `Fussball`;
    atenisz.innerHTML =  `Tischtennis`;
    tenisz.innerHTML =  `Tennis`;
    sakk.innerHTML =  `Schach`;
    galer.innerHTML =  `Galerie`;
    szalloda.innerHTML =  `Hotel`;
    program.innerHTML =  `Programmheft`;

}

if(localStorage.getItem("Language") === "en") {
    fej.innerHTML = `66. International Financial Tournament`
    koszonto.innerHTML = `Welcome to the page!`;
    szoveg.innerHTML = `On this website you can read about the 66th International Financial Tournament. On the results page you can find the 4 different sports' (Football, 
        Table Tennis, Tenis, Chess) tables and the continuously updated results. On the gallery page you can see the pictures taken on the different days of the tournament. The participants
        can find out more about their hotel, Hotel Budapest as well, you can even find their contacts, if you need it in any situation. You can learn about the different programes
        the tournament provides through the program guide. <br> Good luck to every participant and have fun! `;
    fooldal.innerHTML =  `Home`;
    dropbtn.innerHTML =  `Results`;
    foci.innerHTML =  `Football`;
    atenisz.innerHTML =  `Table tennis`;
    tenisz.innerHTML =  `Tennis`;
    sakk.innerHTML =  `Chess`;
    galer.innerHTML =  `Gallery`;
    szalloda.innerHTML =  `Hotel`;
    program.innerHTML =  `Program Guide`;

}

if(localStorage.getItem("Language") === "fr") {
    fej.innerHTML = `66e Tournoi International des Finances `; 
    koszonto.innerHTML = `Francia szöveg!`;
    szoveg.innerHTML = `francia szoveg`;
    fooldal.innerHTML =  `Domicile`;
    dropbtn.innerHTML =  `Résultats`;
    foci.innerHTML =  `Football`;
    atenisz.innerHTML =  ` Tennis de table`;
    tenisz.innerHTML =  `Tennis`;
    sakk.innerHTML =  `Échecs`;
    galer.innerHTML =  `Galerie`;
    szalloda.innerHTML =  `Hôtel`;
    program.innerHTML =  `Guide des programmes`;


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