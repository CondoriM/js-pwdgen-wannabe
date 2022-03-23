// creare reparto nome

//chiedi nome utente
let useName = prompt("Please enter your name");
console.log(useName);
document.getElementById('name_user').innerHTML = useName;

//chiedi cognome utente
let useSurname = prompt("Please enter your surname");
console.log(useSurname);
document.getElementById('sur_name').innerHTML = useSurname;

//chiedi colore utente
let useColor = prompt("Please enter your fav color");
console.log(useColor);
document.getElementById('color_user').innerHTML = useColor;

const Password = useName + useSurname + useColor + 22;
console.log(Password);

document.getElementById('pas').innerHTML = Password;