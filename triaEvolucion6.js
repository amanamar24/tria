// const readlineSync = require("readline-sync");

// // var nom = readlineSync.question("Com et dius? ");
// // console.log("Hola " + nom + "!");

// function mostrarHist(){
//     console.log("historia corta");
// }
// function acabarHist(){
//     console.log("final historia");
// }
// function adeu(){
//     console.log("adios");
// }
// mostrarHist();
// let seguir = readlineSync.question("quieres seguir: si/no ");

// if (seguir == "si")
//     acabarHist();
// else
//     adeu();
//     // prettier code formatter
//     //yarn add -d prettier
//     //afegir extension vs code
//     //configurar para formatear el guardar

const readlineSync = require("readline-sync");

const diagrama = [
  {
    text: "FUNCIONA ", //0
    si: 1,
    no: 2,
  },
  {
    text: "NO LO TOQUES", //1
    si: 10,
    no: 10,
  },
  {
    text: "LO HAS TOCADO", //2
    si: 3,
    no: 5,
  },
  {
    text: "BURRO", //3
    si: 4,
    no: 4,
  },
  {
    text: "LO SABE ALGUIEN", //4
    si: 6,
    no: 9,
  },
  {
    text: "NOS DARA PROBLEMAS?", //5
    si: 6,
    no: 7,
  },
  {
    text: "LA HAS CAGADO", //6
    si: 8,
    no: 8,
  },
  {
    text: "LANZALO", //7
    si: 10,
    no: 10,
  },
  {
    text: "PUEDES CULPAR A OTRO", //8
    si: 10,
    no: 6,
  },
  {
    text: "ESCONDELO", //9
    si: 10,
    no: 10,
  },
  {
    text: "SIN PROBLEMAS", //10
    si: 0,
    no: 0,
  },
];
//------------CODIGO OPTIMIZADO JSON
function msgActual() {
  return diagrama[msgActualIn].text;
}
function askOpt() {
  let res;
  if (diagrama[msgActualIn].si === diagrama[msgActualIn].no) {
    // to diferenciate between instruction and condition in my json
    // instruction have the same si no value
    //condition have diferente si no value
    res = readlineSync.question(`(siguiente instruccion por defecto : si) `);
  } else {
    res = readlineSync.question(` (si/no) `);
  }
  if (res === "si") return true;
  return false;
}
function nextView(res) {
  if (res) return diagrama[msgActualIn].si;
  else return diagrama[msgActualIn].no;
}
let msgActualIn = 0;
while (msgActualIn >= 0) {
  console.log(msgActual());
  msgActualIn = nextView(askOpt());
}
