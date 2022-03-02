console.log("Szkriptben")
function init(){
    document.getElementById("elem").innerHTML="Hahó";

}

window.addEventListener("load,", init, false);

/* változó használata var, let, const */

var szoveg="Valami";
var szoveg2;
szoveg2 = "cs";

var a = "2";
var b = 3;
var osszeg =Number(a)+Number(b);
console.log(osszeg);

var logikai = false;

if(a === 2){
    console.log("Az a egy szám")
    console.log(typeof a)
}
else{
    console.log("Az a nem szám")
    console.log(typeof a)
}

var szin = "red";

switch(szin) {
    case "red":
        console.log("piros")
      break;
    case "green":
        console.log("zöld")
      break;
    case "blue":
        console.log("kék")
      break;
    case "purple":
        console.log("lila")
      break;
    default:
        console.log("Nem ismerem ezt a színt")
  }
if(a === 2){
    console.log("Az a egy szám")
}
else if(szin="red"){
    console.log("piros")
}
else if(szin="green"){
    console.log("zöld")
}
else if(szin="blue"){
    console.log("kék")
}
else if(szin="purple"){
    console.log("lila")
}
else{
    console.log("Nem ismerem ezt a színt")
}
