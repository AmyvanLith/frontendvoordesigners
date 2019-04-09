/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var section = document.querySelector('.overzicht');
var detail = document.querySelector('.detail');
var request = new XMLHttpRequest();
//var url = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var url = "../js/movies.json";


request.open('GET', url); //Openen van request met de URL
request.responseType = 'json'; //Het soort info dat in de url staat
request.send(); //verstuurt naar server

request.onload = function() {
    var inhoud = request.response; //de inhoud sla je op in een var
    toonFilms(inhoud);
};

function toonFilms(inhoud){
    var metadata = inhoud;

    for (var i = 0; i<metadata.length; i++){

        var filmBlok = document.createElement('article');
        var filmPoster = document.createElement('img');
        filmPoster.src = metadata[i].cover;

        var metaDiv = document.createElement('div');
        metaDiv.className = "metadata";

        var filmTitel = document.createElement('h3');
        filmTitel.textContent = metadata[i].title;

        var filmDatum = document.createElement('p');
        filmDatum.className = "datum";
        filmDatum.textContent = metadata[i].release_date;


        var gerneDiv = document.createElement('div');
        gerneDiv.className = "genre";

        console.log(metadata[i].genres);
        for (var j = 0; j<metadata[i].genres.length; j++){
            var filmGenre = document.createElement('span');
            filmGenre.textContent = metadata[i].genres[j];

            //Items toevoegen aan genre Div
            gerneDiv.appendChild(filmGenre);
        }




        //Items toevoegen aan section
        section.appendChild(filmBlok);

        //Items toevoegen aan article
        filmBlok.appendChild(filmPoster);
        filmBlok.appendChild(metaDiv);

        //Items toevoegen aan metadata Div
        metaDiv.appendChild(filmTitel);
        metaDiv.appendChild(filmDatum);
        metaDiv.appendChild(gerneDiv);
//        metaDiv.appendChild(filmScore);

//      for (var k = 0; k<metadata[i].length; k++){
//
//      }

    }

}


function toonDetails(inhoud){
    var alles = inhoud;

     console.log('ik zit in de functie');

    for (var i = 0; i<alles.length; i++){

//        var filmTrailer = document.createElement('iframe');
//        filmTrailer.textContent = metadata[i].trailer;
//
//        var overFilm = document.createElement('div');
//        overFilm.className = "overFilm";
//
//        var filmTitel = document.createElement('h2');
//        filmTitel.textContent = metadata[i].title;
//
//        var filmDatum = document.createElement('p');
//        filmDatum.className = "datum";
//        filmDatum.textContent = metadata[i].release_date;
//
//        var filmPlot= document.createElement('p');
//        filmPlot.className = "intro";
//        filmPlot.textContent = metadata[i].simple_plot;
//
//        var gerneDiv = document.createElement('div');
//        gerneDiv.className = "genre";
//
//        console.log(metadata[i].genres);
//        for (var j = 0; j<metadata[i].genres.length; j++){
//            var filmGenre = document.createElement('span');
//            filmGenre.textContent = metadata[i].genres[j];
//
//            //Items toevoegen aan genre Div
//            gerneDiv.appendChild(filmGenre);
//        }
//
//        var acteurDiv = document.createElement('div');
//        acteurDiv.className = "acteurs";
//
//
//        //Items toevoegen aan section
//        details.appendChild(filmTrailer);
//        details.appendChild(overFilm);
//        details.appendChild(acteurDiv);
//
//        //Items toevoegen aan overFilm
//        overFilm.appendChild(filmTitel);
//        overFilm.appendChild(filmDatum);
//        overFilm.appendChild(filmPlot);
//
//        overFilm.appendChild(gerneDiv);



    }
}
