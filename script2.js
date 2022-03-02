/* lista */

var tomb = [];
var tomb2 = [2, 3, 4, ,5];
var tomb3 = [4];
console.log(tomb.length); 
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0] = 12;
 
var txt ="";
for (let index = 0; index < tomb2.length; index++) {
    txt = tomb2[index] + ", "
}
console.log(txt);

var gyumolcs = ["alma", "málna", "barack", "ribizli", "paradicsom"];
var gyumszn = ["prios", "piros", "sárga", "piros", "piros"];
var arak = [240, 500, 300, 250, 500];
var i = 0;
while (i < gyumszn.length &&!(gyumszn[i]==="sárga")) {
    i++;
}

var vane= i < gyumszn.length;
console.log("Van sárga színű gyümolcs: ", vane)
/*piros színű gyümölcs értéke*/
var osszeg = 0;
for (let index = 0; index < gyumszn.length; index++) {
    if (gyumszn[index] ==="piros"){
        osszeg = arak[index]+ osszeg;
    }
}
console.log("összeg",osszeg)
/*Hány 300ft alatti termék van*/
    var db = 0;
    for (let index = 0; index < arak.length; index++) {
        if (arak[index]<300){
            db++;
        }
        
    }
    console.log("ennyid db van",db)
/*van-e 1000ft feletti termék? */
i = 0;
while (i < arak.length && !(arak[i]>1000)) {
    i++
}
var ezerfolott = i<arak.length;
if (ezerfolott){
    console.log("van")
}
else{
    console.log("nincs")
}