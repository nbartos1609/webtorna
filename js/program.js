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
const kozepszoveg = document.querySelector(".kozepszoveg");
const prog1 = document.querySelector(".prog1");
const prog2 = document.querySelector(".prog2");
const prog3 = document.querySelector(".prog3");
const prog4 = document.querySelector(".prog4");
const prog5 = document.querySelector(".prog5");
const prog6 = document.querySelector(".prog6");
const prog7 = document.querySelector(".prog7");
const prog8 = document.querySelector(".prog8");
const prog9 = document.querySelector(".prog9");
const prog10 = document.querySelector(".prog10");
const prog11 = document.querySelector(".prog11");
const prog12 = document.querySelector(".prog12");
const prog13 = document.querySelector(".prog13");
const prog14 = document.querySelector(".prog14");
const prog15 = document.querySelector(".prog15");
const prog16 = document.querySelector(".prog16");
const prog17 = document.querySelector(".prog17");
const prog18 = document.querySelector(".prog18");
const prog19 = document.querySelector(".prog19");
const prog20 = document.querySelector(".prog20");
const prog21 = document.querySelector(".prog21");
const prog22 = document.querySelector(".prog22");
const prog23 = document.querySelector(".prog23");
const prog24 = document.querySelector(".prog24");
const prog25 = document.querySelector(".prog25");
const prog26 = document.querySelector(".prog26");
const prog27 = document.querySelector(".prog27");
const prog28 = document.querySelector(".prog28");
const prog29 = document.querySelector(".prog29");
const prog30 = document.querySelector(".prog30");
const prog31 = document.querySelector(".prog31");
const prog32 = document.querySelector(".prog32");
const prog33 = document.querySelector(".prog33");
const prog34 = document.querySelector(".prog34");
const date = document.querySelector(".date");
const date2 = document.querySelector(".date2");
const date3 = document.querySelector(".date3");
const date4 = document.querySelector(".date4");
const date5 = document.querySelector(".date5");
const date6 = document.querySelector(".date6");






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
    kozepszoveg.innerHTML =  `Program`;
    prog1.innerHTML = `Delegációk érkezése a Budapest Hotel Körszállóba`;
    prog2.innerHTML = `Vacsora a szállodában`;
    prog3.innerHTML = `Technikai Bizottság ülése `;
    prog4.innerHTML = `Reggeli a szállodában`;
    prog5.innerHTML = `Megnyitó ünnepség`;
    prog6.innerHTML = `Fogadás a VIP vendégek részére`;
    prog7.innerHTML = `Sportversenyek`;
    prog8.innerHTML = `Ebéd a szállodában`;
    prog9.innerHTML = `Sportversenyek`;
    prog10.innerHTML = `Vacsora a szállodában`;
    prog11.innerHTML = `Reggeli a szállodában`;
    prog12.innerHTML = `Sportversenyek kezdete (Asztalitenisz)`;
    prog13.innerHTML = `Sportversenyek kezdete (Sakk, tenisz, labdarúgás)`;
    prog14.innerHTML = `Ebéd a szállodában`;
    prog15.innerHTML = `Labdarúgás folytatása`;
    prog16.innerHTML = `Tenisz verseny folytatása`;
    prog17.innerHTML = `Vacsora a szállodában`;
    prog18.innerHTML = `Reggeli a szállodában`;
    prog19.innerHTML = `Sportversenyek kezdete (Asztalitenisz)`;
    prog20.innerHTML = `Sportversenyek kezdete (Sakk, tenisz, labdarúgás)`;
    prog21.innerHTML = `Ebéd a szállodában`;
    prog22.innerHTML = `Indulás a szabadidős programra a belvárosba, Parlament látogatás`;
    prog23.innerHTML = `Hajókázás a Dunán`;
    prog24.innerHTML = `Vacsora a szállodában`;
    prog25.innerHTML = `Technikai Bizottság találkozója`;
    prog26.innerHTML = `Reggeli a szállodában`;
    prog27.innerHTML = `Sportversenyek kezdete (Sakk, tenisz)`;
    prog28.innerHTML = `Labdarúgó mérkőzés 3.helyezésért`;
    prog29.innerHTML = `Ebéd a szállodában`;
    prog30.innerHTML = `Labdarúgó döntő`;
    prog31.innerHTML = `Technikai Bizottság ülése`;
    prog32.innerHTML = `Díjátadás, záró vacsora `;
    prog33.innerHTML = `Reggeli a szállodában`;
    prog34.innerHTML = `Delegációk elutazása`;
    date.innerHTML = ` Vasárnap, 2023.06.25.`;
    date2.innerHTML = `Hétfő, 2023.06.26.`;
    date3.innerHTML = `Kedd, 2023.06.27.`;
    date4.innerHTML = `Szerda, 2023.06.28.`;
    date5.innerHTML = `Csütörtök, 2023.06.29.`;
    date6.innerHTML = `Péntek, 2023.06.30.`;


   
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
    kozepszoveg.innerHTML =  `Programm`;
    prog1.innerHTML = `The Delegations arrive at Budapest hotel`;
    prog2.innerHTML = `Lunch in the hotel`;
    prog3.innerHTML = `Technical Committee meeting `;
    prog4.innerHTML = `Breakfast in the hotel`;
    prog5.innerHTML = `Opening ceremony`;
    prog6.innerHTML = `Welcoming the VIP guests`;
    prog7.innerHTML = `Start of sport games`;
    prog8.innerHTML = `Dinner in the hotel`;
    prog9.innerHTML = `Start of sport games`;
    prog10.innerHTML = `Lunch in the hotel `;
    prog11.innerHTML = `Breakfast in the hotel`;
    prog12.innerHTML = `Start of sport games (Table Tennis)`;
    prog13.innerHTML = `Start of sport games (Chess, Tennis, Football)`;
    prog14.innerHTML = `Dinner in the hotel`;
    prog15.innerHTML = `Football matches`;
    prog16.innerHTML = `Tennis matches`;
    prog17.innerHTML = `Lunch in the hotel`;
    prog18.innerHTML = `Breakfast in the hotel`;
    prog19.innerHTML = `Start of sport games (Table Tennis)`;
    prog20.innerHTML = `Start of sport games  (Chess, Tennis, Football)`;
    prog21.innerHTML = `Dinner in the hotel`;
    prog22.innerHTML = `Departure for free-time activity in the city, visiting the Parlament`;
    prog23.innerHTML = `Cruising down the Danube`;
    prog24.innerHTML = `Lunch in the hotel`;
    prog25.innerHTML = `Technical Committee meeting`;
    prog26.innerHTML = `Breakfast in the hotel`;
    prog27.innerHTML = `Start of sport games  (Chess, Tennis)`;
    prog28.innerHTML = `Football match for the 3rd place`;
    prog29.innerHTML = `Dinner in the hotel`;
    prog30.innerHTML = `Football Final`;
    prog31.innerHTML = `Technical Committee meeting`;
    prog32.innerHTML = `Handing out the awards, Closing ceremony `;
    prog33.innerHTML = `Breakfast in the hotel`;
    prog34.innerHTML = `Departure of the Delegations`;
    date.innerHTML = ` Sonntag, 2023.06.25.`;
    date2.innerHTML = `Montag, 2023.06.26.`;
    date3.innerHTML = `Dienstag, 2023.06.27.`;
    date4.innerHTML = `Mittwoch, 2023.06.28.`;
    date5.innerHTML = `Donnerstag, 2023.06.29.`;
    date6.innerHTML = `Freitag, 2023.06.30.`;
    
    

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
    kozepszoveg.innerHTML =  `Program`;
    prog1.innerHTML = `The Delegations arrive at Budapest hotel`;
    prog2.innerHTML = `Lunch in the hotel`;
    prog3.innerHTML = `Technical Committee meeting `;
    prog4.innerHTML = `Breakfast in the hotel`;
    prog5.innerHTML = `Opening ceremony`;
    prog6.innerHTML = `Welcoming the VIP guests`;
    prog7.innerHTML = `Start of sport games`;
    prog8.innerHTML = `Dinner in the hotel`;
    prog9.innerHTML = `Start of sport games`;
    prog10.innerHTML = `Lunch in the hotel `;
    prog11.innerHTML = `Breakfast in the hotel`;
    prog12.innerHTML = `Start of sport games (Table Tennis)`;
    prog13.innerHTML = `Start of sport games (Chess, Tennis, Football)`;
    prog14.innerHTML = `Dinner in the hotel`;
    prog15.innerHTML = `Football matches`;
    prog16.innerHTML = `Tennis matches`;
    prog17.innerHTML = `Lunch in the hotel`;
    prog18.innerHTML = `Breakfast in the hotel`;
    prog19.innerHTML = `Start of sport games (Table Tennis)`;
    prog20.innerHTML = `Start of sport games  (Chess, Tennis, Football)`;
    prog21.innerHTML = `Dinner in the hotel`;
    prog22.innerHTML = `Departure for free-time activity in the city, visiting the Parlament`;
    prog23.innerHTML = `Cruising down the Danube`;
    prog24.innerHTML = `Lunch in the hotel`;
    prog25.innerHTML = `Technical Committee meeting`;
    prog26.innerHTML = `Breakfast in the hotel`;
    prog27.innerHTML = `Start of sport games  (Chess, Tennis)`;
    prog28.innerHTML = `Football match for the 3rd place`;
    prog29.innerHTML = `Dinner in the hotel`;
    prog30.innerHTML = `Football Final`;
    prog31.innerHTML = `Technical Committee meeting`;
    prog32.innerHTML = `Handing out the awards, Closing ceremony `;
    prog33.innerHTML = `Breakfast in the hotel`;
    prog34.innerHTML = `Departure of the Delegations`;
    date.innerHTML = ` Sunday, 2023.06.25.`;
    date2.innerHTML = `Monday, 2023.06.26.`;
    date3.innerHTML = `Tuesday, 2023.06.27.`;
    date4.innerHTML = `Wednesday, 2023.06.28.`;
    date5.innerHTML = `Thursday, 2023.06.29.`;
    date6.innerHTML = `Friday, 2023.06.30.`;

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
    kozepszoveg.innerHTML =  `Program`;
    prog1.innerHTML = `The Delegations arrive at Budapest hotel`;
    prog2.innerHTML = `Lunch in the hotel`;
    prog3.innerHTML = `Technical Committee meeting `;
    prog4.innerHTML = `Breakfast in the hotel`;
    prog5.innerHTML = `Opening ceremony`;
    prog6.innerHTML = `Welcoming the VIP guests`;
    prog7.innerHTML = `Start of sport games`;
    prog8.innerHTML = `Dinner in the hotel`;
    prog9.innerHTML = `Start of sport games`;
    prog10.innerHTML = `Lunch in the hotel `;
    prog11.innerHTML = `Breakfast in the hotel`;
    prog12.innerHTML = `Start of sport games (Table Tennis)`;
    prog13.innerHTML = `Start of sport games (Chess, Tennis, Football)`;
    prog14.innerHTML = `Dinner in the hotel`;
    prog15.innerHTML = `Football matches`;
    prog16.innerHTML = `Tennis matches`;
    prog17.innerHTML = `Lunch in the hotel`;
    prog18.innerHTML = `Breakfast in the hotel`;
    prog19.innerHTML = `Start of sport games (Table Tennis)`;
    prog20.innerHTML = `Start of sport games  (Chess, Tennis, Football)`;
    prog21.innerHTML = `Dinner in the hotel`;
    prog22.innerHTML = `Departure for free-time activity in the city, visiting the Parlament`;
    prog23.innerHTML = `Cruising down the Danube`;
    prog24.innerHTML = `Lunch in the hotel`;
    prog25.innerHTML = `Technical Committee meeting`;
    prog26.innerHTML = `Breakfast in the hotel`;
    prog27.innerHTML = `Start of sport games  (Chess, Tennis)`;
    prog28.innerHTML = `Football match for the 3rd place`;
    prog29.innerHTML = `Dinner in the hotel`;
    prog30.innerHTML = `Football Final`;
    prog31.innerHTML = `Technical Committee meeting`;
    prog32.innerHTML = `Handing out the awards, Closing ceremony `;
    prog33.innerHTML = `Breakfast in the hotel`;
    prog34.innerHTML = `Departure of the Delegations`;
    date.innerHTML = ` Dimanche, 2023.06.25.`;
    date2.innerHTML = `Lundi, 2023.06.26.`;
    date3.innerHTML = `Mardi, 2023.06.27.`;
    date4.innerHTML = `Mercredi, 2023.06.28.`;
    date5.innerHTML = `Jeudi, 2023.06.29.`;
    date6.innerHTML = `Vendredi, 2023.06.30.`;


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