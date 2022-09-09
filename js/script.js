/* night white */

let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enabledDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enabledDarkMode();
}

toggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enabledDarkMode();
  } else {
    disableDarkMode();
  }
};

/* heure */

var heuresDiv = document.querySelector(".heures");
var dateDiv = document.querySelector(".date");
var affichageHeure = function () {
  var today,
    annee,
    listeMois,
    mois,
    listeJours,
    jourNUmero,
    jourNom,
    heures,
    minutes,
    secondes,
    deuxChiffres;

  today = new Date();
  annee = today.getFullYear();
  listeMois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre ",
    "Novembre",
    "Decembre",
  ];

  mois = listeMois[today.getMonth()];
  jourNUmero = today.getDate();

  listeJours = [
    "Lundi",
    "Mardi",
    "Mecredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  jourNom = listeJours[today.getDay()];
  deuxChiffres = function (element) {
    if (element < 10) {
      return (element = "0" + element);
    } else {
      return element;
    }
  };

  heures = deuxChiffres(today.getHours());
  minutes = deuxChiffres(today.getMinutes());
  secondes = deuxChiffres(today.getSeconds());
  heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
  dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;
  setTimeout(affichageHeure, 1000);
};

affichageHeure();
