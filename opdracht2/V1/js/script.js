
//if (item) {
//    item.addEventListener('click', function(){
//        console.log('hoi');
//
//        document.getElementById("first").style.left = "-100%";
//        document.getElementById("second").style.left = "0";
//    });
//}
var images = document.querySelectorAll('img');
var next = document.querySelector('.right');
var previous = document.querySelector('.left');


function volgende(){
    var active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.nextElementSibling){
        active.nextElementSibling.classList.add('active');
    } else {
        document.querySelector('img:first-of-type').classList.add('active');
    }


};

function vorige(){
    var active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.previousElementSibling){
        active.previousElementSibling.classList.add('active');
    } else {
        document.querySelector('img:last-of-type').classList.add('active');
    }

};

next.addEventListener('click', volgende);
previous.addEventListener('click', vorige);


document.addEventListener('keydown', function(event){
    if (event.keyCode === 39){
        volgende();
    }
    if (event.keyCode === 37){
        vorige();
    }
});
