let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0; // camelCase: JavaScript'te currentWeapon gibi bir cümle ilk kelimesi küçük harfle başlayıp ikinci kelimesi büyük harfle başlayan değişken tanımına camelCase denir
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText =document.querySelector("#monsterHealth");
// initialize buttons
button1.onclick = goStore; // onclick Event: button1'e tıklandığnda......... işlemini yap
