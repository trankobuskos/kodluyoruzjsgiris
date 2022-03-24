// ********** let ve const ile Degisken Tanımlama *************

// var ile degisken tanımlamak; 
//var serverName="kodluyoruz.org" 
//console.log(serverName)

// let ile degiskeni bos tanımlamak;
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak; 
serverName="kodluyoruz.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanımlamak;
let password="1234";
console.log(password)

// degisken ataması yapmadan önce kullanmaya calismak;
/*  HATALI KULLANIM
console.log(fullName)
let fullName="Tranko Buskos";  //yüklendiği yerden önce kullanılmaya başlandı hatası
var fullName="Tranko Buskos"; // var ile undefined hatası görürüz.
*/
let fullName="Tranko"

// let ile tanımlanan degiskenin icerisindeki bilgiyi degistirmek;
fullName="Lorem Ipsum"
console.log(fullName)

// birlestirme veya ekleme islemi;
fullName= fullName+ " yeni bilgi"
console.log(fullName)

fullName="Sifirlandi"
fullName+=" ve yeni bilgi eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak;
//const serverPass; //çalışmaz

// const ile degisken tanimlamak;
const serverPass = "123454"
console.log(serverPass)
