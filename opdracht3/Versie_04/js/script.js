/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var section = document.querySelector('.overzicht');
var detail = document.querySelector('.detail');
var films = document.querySelector('h2.films');
var series = document.querySelector('h2.series');
var terug = document.querySelector('span.terug');
var request = new XMLHttpRequest();
//var url = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var filmsUrl = "../js/movies.json";
var seriesUrl = "../js/series.json";

function laadUrl(url) {
    console.log("loading ...");
    request.open('GET', url); //Openen van request met de URL
    request.responseType = 'json'; //Het soort info dat in de url staat
    request.send(); //verstuurt naar server

    request.onload = function () {
        //misschien hier een timeout gebruiken om je loader te showen
        window.setTimeout(function() {
            console.log("geladen, loading mag weg");
            var inhoud = request.response; //de inhoud sla je op in een var
            toon(inhoud);
        }, 500);


    };
}

function toon(inhoud) {
    var metadata = inhoud;

    section.innerHTML = "";
    for (var i = 0; i < metadata.length; i++) {

        var filmBlok = document.createElement('article');
        var filmPoster = document.createElement('img');
        filmPoster.src = metadata[i].cover;

        filmBlok.className = metadata[i].type;

        var metaDiv = document.createElement('div');
        metaDiv.className = "metadata";

        var filmTitel = document.createElement('h3');
        filmTitel.textContent = metadata[i].title;

        var filmDatum = document.createElement('p');
        filmDatum.className = "datum";
        filmDatum.textContent = metadata[i].release_date;


        var gerneDiv = document.createElement('div');
        gerneDiv.className = "genre";

//        console.log(metadata[i].genres);
        for (var j = 0; j < metadata[i].genres.length; j++) {
            var filmGenre = document.createElement('span');
            filmGenre.textContent = metadata[i].genres[j];

            //Items toevoegen aan genre Div
            gerneDiv.appendChild(filmGenre);
        }

        var favoriet = document.createElement('img');
        favoriet.className = "hartje";
        favoriet.setAttribute("src", "../images/heart_before.svg");

        //Items toevoegen aan section
        section.appendChild(filmBlok);

        //Items toevoegen aan article
        filmBlok.appendChild(filmPoster);
        filmBlok.appendChild(metaDiv);

        //Items toevoegen aan metadata Div
        metaDiv.appendChild(favoriet);
        metaDiv.appendChild(filmTitel);
        metaDiv.appendChild(filmDatum);
        metaDiv.appendChild(gerneDiv);
        //        metaDiv.appendChild(filmScore);


        // Dit is nodig zodat je weet op welke film je klikt. anders is de `film` variable altijd de laatste in de lijst
        (function() {
            var film = metadata[i];
            filmBlok.addEventListener("click", function (e) {
                toonDetails(film);
                section.classList.add('none');
            });
        })();

    }

}


function toonSeries() {
    films.classList.remove('active');
    series.classList.add('active');
    laadUrl(seriesUrl);
}

function toonFilms() {
    films.classList.add('active');
    series.classList.remove('active');
    laadUrl(filmsUrl);
}

toonFilms();
series.addEventListener('click', toonSeries);
films.addEventListener('click', toonFilms);

document.addEventListener('keydown', function(event){
    if (event.keyCode === 39){
        toonSeries();
    }
    if (event.keyCode === 37){
        toonFilms();
    }
});


function toonDetails(film) {
    console.log("film",film);


    var detail = document.querySelector("section.detail");
    // Haal de hide class weg zodat je hem ziet en haal de html weg
    detail.classList.remove("hidden");
    detail.innerHTML = "";

//    console.log('ik zit in de functie', film);
    var terug = document.createElement('span');
    terug.textContent = "Terug naar het overzicht";
    terug.className = "terug";

    var filmTrailer = document.createElement('iframe');
    filmTrailer.setAttribute("src", film.trailer);
    filmTrailer.scrolling="no";
    filmTrailer.align="center";

    var overFilm = document.createElement('div');
    overFilm.className = "overFilm";

    var filmTitel = document.createElement('h2');
    filmTitel.textContent = film.title;

    var filmDatum = document.createElement('p');
    filmDatum.className = "datum";
    filmDatum.textContent = film.release_date;

    var filmPlot = document.createElement('p');
    filmPlot.className = "intro";
    filmPlot.textContent = film.plot;

    var gerneDiv = document.createElement('div');
    gerneDiv.className = "genre";




    var acteurDiv = document.createElement('div');
    acteurDiv.className = "acteur";

    var acteurKop = document.createElement('h3');
    acteurKop.textContent = "Acteurs";

    //list aanmaken <ul>
    for(var i=0;i<film.actors.length;i++){
        //li maken met plaatje en nog iets
        console.log("acteur",film.actors[i].actor_name);
        console.log("plaatje",film.actors[i].url_photo);

        var acteurFoto = document.createElement('img');
        acteurFoto.src = film.actors[i].url_photo;

        var acteurNaam = document.createElement('p');
        acteurNaam.textContent = film.actors[i].actor_name;

        acteurDiv.appendChild(acteurFoto);
//        acteurFoto.appendChild(acteurNaam);
    }




//acteurDiv.appendChild(acteurFoto);


    //Items toevoegen aan section
    detail.appendChild(terug);
    detail.appendChild(filmTrailer);
    detail.appendChild(overFilm);
    detail.appendChild(acteurKop);
    detail.appendChild(acteurDiv);

    //Items toevoegen aan overFilm
    overFilm.appendChild(filmTitel);
    overFilm.appendChild(filmDatum);
    overFilm.appendChild(filmPlot);


    overFilm.appendChild(gerneDiv);

    terug.addEventListener('click', function(){
        section.classList.remove('none');
        detail.innerHTML = "";
    });


}
