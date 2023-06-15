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
const francia = document.querySelector(".francia");
const magyar = document.querySelector(".magyar");
const nemet = document.querySelector(".nemet");
const ausztria = document.querySelector(".ausztria");
const kozepszoveg = document.querySelector(".kozepszoveg");
const magyar1_1 = document.querySelector(".magyar1_1");
const magyar1_2 = document.querySelector(".magyar1_2");
const magyar1_3 = document.querySelector(".magyar1_3");
const magyar1_4 = document.querySelector(".magyar1_4");
const magyar1_5 = document.querySelector(".magyar1_5");
const magyar1_6 = document.querySelector(".magyar1_6");
const magyar1_7 = document.querySelector(".magyar1_7");
const magyar1_8 = document.querySelector(".magyar1_8");
const magyar2_1 = document.querySelector(".magyar2_1");
const magyar2_2 = document.querySelector(".magyar2_2");
const magyar2_3 = document.querySelector(".magyar2_3");
const magyar2_4 = document.querySelector(".magyar2_4");
const magyar2_5 = document.querySelector(".magyar2_5");
const magyar2_6 = document.querySelector(".magyar2_6");
const magyar2_7 = document.querySelector(".magyar2_7");
const magyar2_8 = document.querySelector(".magyar2_8");
const nemet1_1 = document.querySelector(".nemet1_1");
const nemet1_2 = document.querySelector(".nemet1_2");
const nemet1_3 = document.querySelector(".nemet1_3");
const nemet1_4 = document.querySelector(".nemet1_4");
const nemet1_5 = document.querySelector(".nemet1_5");
const nemet1_6 = document.querySelector(".nemet1_6");
const nemet1_7 = document.querySelector(".nemet1_7");
const nemet1_8 = document.querySelector(".nemet1_8");
const nemet2_1 = document.querySelector(".nemet2_1");
const nemet2_2 = document.querySelector(".nemet2_2");
const nemet2_3 = document.querySelector(".nemet2_3");
const nemet2_4 = document.querySelector(".nemet2_4");
const nemet2_5 = document.querySelector(".nemet2_5");
const nemet2_6 = document.querySelector(".nemet2_6");
const nemet2_7 = document.querySelector(".nemet2_7");
const nemet2_8 = document.querySelector(".nemet2_8");
const francia1_1 = document.querySelector(".francia1_1");
const francia1_2 = document.querySelector(".francia1_2");
const francia1_3 = document.querySelector(".francia1_3");
const francia1_4 = document.querySelector(".francia1_4");
const francia1_5 = document.querySelector(".francia1_5");
const francia1_6 = document.querySelector(".francia1_6");
const francia1_7 = document.querySelector(".francia1_7");
const francia1_8 = document.querySelector(".francia1_8");
const francia2_1 = document.querySelector(".francia2_1");
const francia2_2 = document.querySelector(".francia2_2");
const francia2_3 = document.querySelector(".francia2_3");
const francia2_4 = document.querySelector(".francia2_4");
const francia2_5 = document.querySelector(".francia2_5");
const francia2_6 = document.querySelector(".francia2_6");
const francia2_7 = document.querySelector(".francia2_7");
const francia2_8 = document.querySelector(".francia2_8");
const ausztria1_1 = document.querySelector(".ausztria1_1");
const ausztria1_2 = document.querySelector(".ausztria1_2");
const ausztria1_3 = document.querySelector(".ausztria1_3");
const ausztria1_4 = document.querySelector(".ausztria1_4");
const ausztria1_5 = document.querySelector(".ausztria1_5");
const ausztria1_6 = document.querySelector(".ausztria1_6");
const ausztria1_7 = document.querySelector(".ausztria1_7");
const ausztria1_8 = document.querySelector(".ausztria1_8");
const ausztria2_1 = document.querySelector(".ausztria2_1");
const ausztria2_2 = document.querySelector(".ausztria2_2");
const ausztria2_3 = document.querySelector(".ausztria2_3");
const ausztria2_4 = document.querySelector(".ausztria2_4");
const ausztria2_5 = document.querySelector(".ausztria2_5");
const ausztria2_6 = document.querySelector(".ausztria2_6");
const ausztria2_7 = document.querySelector(".ausztria2_7");
const ausztria2_8 = document.querySelector(".ausztria2_8");

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
    francia.innerHTML =  `Franciaország`;
    francia1_1.innerHTML =  `Franciaország-1`;
    francia1_2.innerHTML =  `Franciaország-1`;
    francia1_3.innerHTML =  `Franciaország-1`;
    francia1_4.innerHTML =  `Franciaország-1`;
    francia1_5.innerHTML =  `Franciaország-1`;
    francia1_6.innerHTML =  `Franciaország-1`;
    francia1_7.innerHTML =  `Franciaország-1`;
    francia1_8.innerHTML =  `Franciaország-1`;
    francia2_1.innerHTML =  `Franciaország-2`;
    francia2_2.innerHTML =  `Franciaország-2`;
    francia2_3.innerHTML =  `Franciaország-2`;
    francia2_4.innerHTML =  `Franciaország-2`;
    francia2_5.innerHTML =  `Franciaország-2`;
    francia2_6.innerHTML =  `Franciaország-2`;
    francia2_7.innerHTML =  `Franciaország-2`;
    francia2_8.innerHTML =  `Franciaország-2`;
    magyar.innerHTML =  `Magyarország`;
    magyar1_1.innerHTML =  `Magyarország-1`;
    magyar1_2.innerHTML =  `Magyarország-1`;
    magyar1_3.innerHTML =  `Magyarország-1`;
    magyar1_4.innerHTML =  `Magyarország-1`;
    magyar1_5.innerHTML =  `Magyarország-1`;
    magyar1_6.innerHTML =  `Magyarország-1`;
    magyar1_7.innerHTML =  `Magyarország-1`;
    magyar1_8.innerHTML =  `Magyarország-1`;
    magyar2_1.innerHTML =  `Magyarország-2`;
    magyar2_2.innerHTML =  `Magyarország-2`;
    magyar2_3.innerHTML =  `Magyarország-2`;
    magyar2_4.innerHTML =  `Magyarország-2`;
    magyar2_5.innerHTML =  `Magyarország-2`;
    magyar2_6.innerHTML =  `Magyarország-2`;
    magyar2_7.innerHTML =  `Magyarország-2`;
    magyar2_8.innerHTML =  `Magyarország-2`;
    nemet.innerHTML =  `Németország`;
    nemet1_1.innerHTML =  `Németország-1`;
    nemet1_2.innerHTML =  `Németország-1`;
    nemet1_3.innerHTML =  `Németország-1`;
    nemet1_4.innerHTML =  `Németország-1`;
    nemet1_5.innerHTML =  `Németország-1`;
    nemet1_6.innerHTML =  `Németország-1`;
    nemet1_7.innerHTML =  `Németország-1`;
    nemet1_8.innerHTML =  `Németország-1`;
    nemet2_1.innerHTML =  `Németország-2`;
    nemet2_2.innerHTML =  `Németország-2`;
    nemet2_3.innerHTML =  `Németország-2`;
    nemet2_4.innerHTML =  `Németország-2`;
    nemet2_5.innerHTML =  `Németország-2`;
    nemet2_6.innerHTML =  `Németország-2`;
    nemet2_7.innerHTML =  `Németország-2`;
    nemet2_8.innerHTML =  `Németország-2`;
    ausztria.innerHTML =  `Ausztria`;
    ausztria1_1.innerHTML =  `Ausztria-1`;
    ausztria1_2.innerHTML =  `Ausztria-1`;
    ausztria1_3.innerHTML =  `Ausztria-1`;
    ausztria1_4.innerHTML =  `Ausztria-1`;
    ausztria1_5.innerHTML =  `Ausztria-1`;
    ausztria1_6.innerHTML =  `Ausztria-1`;
    ausztria1_7.innerHTML =  `Ausztria-1`;
    ausztria1_8.innerHTML =  `Ausztria-1`;
    ausztria2_1.innerHTML =  `Ausztria-2`;
    ausztria2_2.innerHTML =  `Ausztria-2`;
    ausztria2_3.innerHTML =  `Ausztria-2`;
    ausztria2_4.innerHTML =  `Ausztria-2`;
    ausztria2_5.innerHTML =  `Ausztria-2`;
    ausztria2_6.innerHTML =  `Ausztria-2`;
    ausztria2_7.innerHTML =  `Ausztria-2`;
    ausztria2_8.innerHTML =  `Ausztria-2`;
    kozepszoveg.innerHTML =  `Sakk eredmények`;
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
    francia.innerHTML =  `Frankreich`;
    francia1_1.innerHTML =  `Frankreich-1`;
    francia1_2.innerHTML =  `Frankreich-1`;
    francia1_3.innerHTML =  `Frankreich-1`;
    francia1_4.innerHTML =  `Frankreich-1`;
    francia1_5.innerHTML =  `Frankreich-1`;
    francia1_6.innerHTML =  `Frankreich-1`;
    francia1_7.innerHTML =  `Frankreich-1`;
    francia1_8.innerHTML =  `Frankreich-1`;
    francia2_1.innerHTML =  `Frankreich-2`;
    francia2_2.innerHTML =  `Frankreich-2`;
    francia2_3.innerHTML =  `Frankreich-2`;
    francia2_4.innerHTML =  `Frankreich-2`;
    francia2_5.innerHTML =  `Frankreich-2`;
    francia2_6.innerHTML =  `Frankreich-2`;
    francia2_7.innerHTML =  `Frankreich-2`;
    francia2_8.innerHTML =  `Frankreich-2`;
    magyar.innerHTML =  `Ungarn`;
    magyar1_1.innerHTML =  `Ungarn-1`;
    magyar1_2.innerHTML =  `Ungarn-1`;
    magyar1_3.innerHTML =  `Ungarn-1`;
    magyar1_4.innerHTML =  `Ungarn-1`;
    magyar1_5.innerHTML =  `Ungarn-1`;
    magyar1_6.innerHTML =  `Ungarn-1`;
    magyar1_7.innerHTML =  `Ungarn-1`;
    magyar1_8.innerHTML =  `Ungarn-1`;
    magyar2_1.innerHTML =  `Ungarn-2`;
    magyar2_2.innerHTML =  `Ungarn-2`;
    magyar2_3.innerHTML =  `Ungarn-2`;
    magyar2_4.innerHTML =  `Ungarn-2`;
    magyar2_5.innerHTML =  `Ungarn-2`;
    magyar2_6.innerHTML =  `Ungarn-2`;
    magyar2_7.innerHTML =  `Ungarn-2`;
    magyar2_8.innerHTML =  `Ungarn-2`;
    nemet.innerHTML =  `Deutschland`;
    nemet1_1.innerHTML =  `Deutschland-1`;
    nemet1_2.innerHTML =  `Deutschland-1`;
    nemet1_3.innerHTML =  `Deutschland-1`;
    nemet1_4.innerHTML =  `Deutschland-1`;
    nemet1_5.innerHTML =  `Deutschland-1`;
    nemet1_6.innerHTML =  `Deutschland-1`;
    nemet1_7.innerHTML =  `Deutschland-1`;
    nemet1_8.innerHTML =  `Deutschland-1`;
    nemet2_1.innerHTML =  `Deutschland-2`;
    nemet2_2.innerHTML =  `Deutschland-2`;
    nemet2_3.innerHTML =  `Deutschland-2`;
    nemet2_4.innerHTML =  `Deutschland-2`;
    nemet2_5.innerHTML =  `Deutschland-2`;
    nemet2_6.innerHTML =  `Deutschland-2`;
    nemet2_7.innerHTML =  `Deutschland-2`;
    nemet2_8.innerHTML =  `Deutschland-2`;
    ausztria.innerHTML =  `Österreich`;
    ausztria1_1.innerHTML =  `Österreich-1`;
    ausztria1_2.innerHTML =  `Österreich-1`;
    ausztria1_3.innerHTML =  `Österreich-1`;
    ausztria1_4.innerHTML =  `Österreich-1`;
    ausztria1_5.innerHTML =  `Österreich-1`;
    ausztria1_6.innerHTML =  `Österreich-1`;
    ausztria1_7.innerHTML =  `Österreich-1`;
    ausztria1_8.innerHTML =  `Österreich-1`;
    ausztria2_1.innerHTML =  `Österreich-2`;
    ausztria2_2.innerHTML =  `Österreich-2`;
    ausztria2_3.innerHTML =  `Österreich-2`;
    ausztria2_4.innerHTML =  `Österreich-2`;
    ausztria2_5.innerHTML =  `Österreich-2`;
    ausztria2_6.innerHTML =  `Österreich-2`;
    ausztria2_7.innerHTML =  `Österreich-2`;
    ausztria2_8.innerHTML =  `Österreich-2`;
    kozepszoveg.innerHTML =  `Schach Resultat`;

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
    francia.innerHTML =  `France`;
    francia1_1.innerHTML =  `France-1`;
    francia1_2.innerHTML =  `France-1`;
    francia1_3.innerHTML =  `France-1`;
    francia1_4.innerHTML =  `France-1`;
    francia1_5.innerHTML =  `France-1`;
    francia1_6.innerHTML =  `France-1`;
    francia1_7.innerHTML =  `France-1`;
    francia1_8.innerHTML =  `France-1`;
    francia2_1.innerHTML =  `France-2`;
    francia2_2.innerHTML =  `France-2`;
    francia2_3.innerHTML =  `France-2`;
    francia2_4.innerHTML =  `France-2`;
    francia2_5.innerHTML =  `France-2`;
    francia2_6.innerHTML =  `France-2`;
    francia2_7.innerHTML =  `France-2`;
    francia2_8.innerHTML =  `France-2`;
    magyar.innerHTML =  `Hungary`;
    magyar1_1.innerHTML =  `Hungary-1`;
    magyar1_2.innerHTML =  `Hungary-1`;
    magyar1_3.innerHTML =  `Hungary-1`;
    magyar1_4.innerHTML =  `Hungary-1`;
    magyar1_5.innerHTML =  `Hungary-1`;
    magyar1_6.innerHTML =  `Hungary-1`;
    magyar1_7.innerHTML =  `Hungary-1`;
    magyar1_8.innerHTML =  `Hungary-1`;
    magyar2_1.innerHTML =  `Hungary-2`;
    magyar2_2.innerHTML =  `Hungary-2`;
    magyar2_3.innerHTML =  `Hungary-2`;
    magyar2_4.innerHTML =  `Hungary-2`;
    magyar2_5.innerHTML =  `Hungary-2`;
    magyar2_6.innerHTML =  `Hungary-2`;
    magyar2_7.innerHTML =  `Hungary-2`;
    magyar2_8.innerHTML =  `Hungary-2`;
    nemet.innerHTML =  `Germany`;
    nemet1_1.innerHTML =  `Germany-1`;
    nemet1_2.innerHTML =  `Germany-1`;
    nemet1_3.innerHTML =  `Germany-1`;
    nemet1_4.innerHTML =  `Germany-1`;
    nemet1_5.innerHTML =  `Germany-1`;
    nemet1_6.innerHTML =  `Germany-1`;
    nemet1_7.innerHTML =  `Germany-1`;
    nemet1_8.innerHTML =  `Germany-1`;
    nemet2_1.innerHTML =  `Germany-2`;
    nemet2_2.innerHTML =  `Germany-2`;
    nemet2_3.innerHTML =  `Germany-2`;
    nemet2_4.innerHTML =  `Germany-2`;
    nemet2_5.innerHTML =  `Germany-2`;
    nemet2_6.innerHTML =  `Germany-2`;
    nemet2_7.innerHTML =  `Germany-2`;
    nemet2_8.innerHTML =  `Germany-2`;
    ausztria.innerHTML =  `Austria`;
    ausztria1_1.innerHTML =  `Austria-1`;
    ausztria1_2.innerHTML =  `Austria-1`;
    ausztria1_3.innerHTML =  `Austria-1`;
    ausztria1_4.innerHTML =  `Austria-1`;
    ausztria1_5.innerHTML =  `Austria-1`;
    ausztria1_6.innerHTML =  `Austria-1`;
    ausztria1_7.innerHTML =  `Austria-1`;
    ausztria1_8.innerHTML =  `Austria-1`;
    ausztria2_1.innerHTML =  `Austria-2`;
    ausztria2_2.innerHTML =  `Austria-2`;
    ausztria2_3.innerHTML =  `Austria-2`;
    ausztria2_4.innerHTML =  `Austria-2`;
    ausztria2_5.innerHTML =  `Austria-2`;
    ausztria2_6.innerHTML =  `Austria-2`;
    ausztria2_7.innerHTML =  `Austria-2`;
    ausztria2_8.innerHTML =  `Austria-2`;
    kozepszoveg.innerHTML =  `Chess Results`;

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
    francia.innerHTML =  `France`;
    francia1_1.innerHTML =  `France-1`;
    francia1_2.innerHTML =  `France-1`;
    francia1_3.innerHTML =  `France-1`;
    francia1_4.innerHTML =  `France-1`;
    francia1_5.innerHTML =  `France-1`;
    francia1_6.innerHTML =  `France-1`;
    francia1_7.innerHTML =  `France-1`;
    francia1_8.innerHTML =  `France-1`;
    francia2_1.innerHTML =  `France-2`;
    francia2_2.innerHTML =  `France-2`;
    francia2_3.innerHTML =  `France-2`;
    francia2_4.innerHTML =  `France-2`;
    francia2_5.innerHTML =  `France-2`;
    francia2_6.innerHTML =  `France-2`;
    francia2_7.innerHTML =  `France-2`;
    francia2_8.innerHTML =  `France-2`;
    magyar.innerHTML =  `Hongrie`;
    magyar1_1.innerHTML =  `Hongrie-1`;
    magyar1_2.innerHTML =  `Hongrie-1`;
    magyar1_3.innerHTML =  `Hongrie-1`;
    magyar1_4.innerHTML =  `Hongrie-1`;
    magyar1_5.innerHTML =  `Hongrie-1`;
    magyar1_6.innerHTML =  `Hongrie-1`;
    magyar1_7.innerHTML =  `Hongrie-1`;
    magyar1_8.innerHTML =  `Hongrie-1`;
    magyar2_1.innerHTML =  `Hongrie-2`;
    magyar2_2.innerHTML =  `Hongrie-2`;
    magyar2_3.innerHTML =  `Hongrie-2`;
    magyar2_4.innerHTML =  `Hongrie-2`;
    magyar2_5.innerHTML =  `Hongrie-2`;
    magyar2_6.innerHTML =  `Hongrie-2`;
    magyar2_7.innerHTML =  `Hongrie-2`;
    magyar2_8.innerHTML =  `Hongrie-2`;
    nemet.innerHTML =  `Allemagne`;
    nemet1_1.innerHTML =  `Allemagne-1`;
    nemet1_2.innerHTML =  `Allemagne-1`;
    nemet1_3.innerHTML =  `Allemagne-1`;
    nemet1_4.innerHTML =  `Allemagne-1`;
    nemet1_5.innerHTML =  `Allemagne-1`;
    nemet1_6.innerHTML =  `Allemagne-1`;
    nemet1_7.innerHTML =  `Allemagne-1`;
    nemet1_8.innerHTML =  `Allemagne-1`;
    nemet2_1.innerHTML =  `Allemagne-2`;
    nemet2_2.innerHTML =  `Allemagne-2`;
    nemet2_3.innerHTML =  `Allemagne-2`;
    nemet2_4.innerHTML =  `Allemagne-2`;
    nemet2_5.innerHTML =  `Allemagne-2`;
    nemet2_6.innerHTML =  `Allemagne-2`;
    nemet2_7.innerHTML =  `Allemagne-2`;
    nemet2_8.innerHTML =  `Allemagne-2`;
    ausztria.innerHTML =  `Autriche`;
    ausztria1_1.innerHTML =  `Autriche-1`;
    ausztria1_2.innerHTML =  `Autriche-1`;
    ausztria1_3.innerHTML =  `Autriche-1`;
    ausztria1_4.innerHTML =  `Autriche-1`;
    ausztria1_5.innerHTML =  `Autriche-1`;
    ausztria1_6.innerHTML =  `Autriche-1`;
    ausztria1_7.innerHTML =  `Autriche-1`;
    ausztria1_8.innerHTML =  `Autriche-1`;
    ausztria2_1.innerHTML =  `Autriche-2`;
    ausztria2_2.innerHTML =  `Autriche-2`;
    ausztria2_3.innerHTML =  `Autriche-2`;
    ausztria2_4.innerHTML =  `Autriche-2`;
    ausztria2_5.innerHTML =  `Autriche-2`;
    ausztria2_6.innerHTML =  `Autriche-2`;
    ausztria2_7.innerHTML =  `Autriche-2`;
    ausztria2_8.innerHTML =  `Autriche-2`;
    kozepszoveg.innerHTML =  `Échecs Résultats`;


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