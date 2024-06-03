 console.log("test")

let hoofd = document.querySelector ("#kaal")
let HaarKnopKort = document.querySelector ("#kort")
let HaarKnopLang = document.querySelector ("#lang")
let knopRoze = document.querySelector ("#roze")
let knopBlauw = document.querySelector ("#blauw")
let shirt = document.querySelector ("#shirtBase")
hoofd.src = "img/hoofd-base.pdf"
shirt.src = "img/shirt-base.pdf"


let hoofdStatus = "kaal"

 function haar(lengte){
    if(lengte == "kort"){
    hoofdStatus = "kort"
    hoofd.src = "img/haar-kort.pdf"
    } else if (lengte == "lang"){
    hoofdStatus = "lang"
    hoofd.src = "img/haar-lang.pdf"    
    }
    else if (lengte == "kaal"){
    hoofdStatus = "kaal"
    hoofd.src = "img/hoofd-base.pdf"
    }
 }


function haarKort (){
    haar ("kort")
}

HaarKnopKort.addEventListener('click', haarKort)


function haarLang (){
    haar("lang")

    }

HaarKnopLang.addEventListener('click', haarLang)

// ik had een probleem met het shirt veranderen, ik heb gevraagd aan chatgpt wat er fout is, uiteindelijk was ik regel 8 vergeten (https://chatgpt.com/share/10d41d5e-c3b8-4001-834a-e75f9af1e528)//



let shirtStatus = "shirtBase"

function hemd (kleur) {
    if (kleur == "blauw"){
    shirtStatus = "blauw"
    shirt.src = "img/shirt-blauw.pdf"
    }else if (kleur == "roze"){
    shirtStatus = "roze"
    shirt.src = "img/shirt-roze.pdf"
    }else if (kleur == "shirtBase"){
    shirtStatus = "shirtBase"
    shirt.src = "img/shirt-base.pdf"
    }
}

function shirtBlauw (){
hemd ("blauw")
    }

knopBlauw.addEventListener('click', shirtBlauw)

function shirtRoze () {
hemd ("roze")
    }

knopRoze.addEventListener('click', shirtRoze) 

// heb het geluid spelen gemaakt door dit filmpje=> https://youtu.be/3xlws5og44U?si=GeweRo71W0odgq1p //

let geluid = document.getElementById ("blauw");
let geluid2 = document.getElementById ("roze")

function speelAf() {
    let audio = new Audio("glitter.mp3");
    audio.play()
}

geluid.addEventListener('click', speelAf)
geluid2.addEventListener('click', speelAf)

let schaar = document.getElementById ("kort")
let schaar2 = document.getElementById ("lang")

function afspelen() {
    let audio = new Audio ("schaar.mp3")
    audio.play ()
}

schaar.addEventListener('click', afspelen)
schaar2.addEventListener('click', afspelen)