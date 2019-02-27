/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var colors = document.querySelectorAll("form input"); //Ik haal all input types op, dit is het filter

var setColor = function(){
    var images = document.querySelectorAll("article"); //Hier haal ik alle foto's op die in articles staan
    //console.log('images',images);
    var color = this.getAttribute("name"); //Hij pakt de attribute genaamd 'name' van het geklikte element
    //console.log('color',color);


    //doe hier een check of er geen inputs zijn geselecteerd
    //dan alle images lagen zien

    if(colors.checked === false){
       console.log("alle inputs staan uit");

    }
       //daarna: bepaalde images met ene kleur laten zien:
        //de foto laten zien met de betreffende kleur
        for(var i = 0; i < images.length; i++){
            if (images[i].classList.contains(color)) {
                if (this.checked) {
                    images[i].classList.add("show");
                } else {
                    images[i].classList.remove("show");
                }
            }
            images[i].classList.remove("initial");
        }

    //console.log("wie is this?",this)
};

for(var i = 0; i < colors.length; i++){
    colors[i].onchange = setColor;
}


