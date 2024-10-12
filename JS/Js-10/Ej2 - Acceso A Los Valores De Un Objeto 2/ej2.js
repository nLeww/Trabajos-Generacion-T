
let capitales = {
    Argentina: "Buenos Aires",
    Uruguay: "Montevideo"
};

let lugar = "Uruguay";

console.log(capitales['lugar']);    //undefined
console.log(capitales.lugar);       //undefined
console.log(capitales[lugar]);      //Montevideo
console.log(capitales['Argentina']);//Buenos Aires
console.log(capitales.Argentina);   //Buenos Aires
console.log(capitales[Argentina]);  //Argentina not defined
