function ham(){
    console.log("lauft")
    document.getElementById("hamburger").classList.toggle("unshow")
    document.getElementById("hamburger").classList.toggle("show");
}

function button1(){
    console.log("lauft")
    document.getElementById("textButton1").classList.toggle("textUnshow1")
    document.getElementById("textButton1").classList.toggle("textShow1");
}

function button2(){
    console.log("lauft")
    document.getElementById("textButton2").classList.toggle("textUnshow2")
    document.getElementById("textButton2").classList.toggle("textShow2");
}

function white(){
    console.log("läuft");
    document.getElementById("main").className=("white");
}

function black(){
    console.log("läuft");
    document.getElementById("main").className=("black");
}
function rose(){
    console.log("läuft");
    document.getElementById("main").className=("rose");
}