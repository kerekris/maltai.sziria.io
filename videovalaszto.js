var videok = ["https://www.youtube.com/embed/0SKUtLvvp9U?autoplay=1&cc_load_policy=1",
"https://www.youtube.com/embed/o9DCOMItk1o?autoplay=1&cc_load_policy=1",
"https://www.youtube.com/embed/SJX6_IBh4Gw?autoplay=1&cc_load_policy=1",
"https://www.youtube.com/embed/Dyk6Pr4VwFk?autoplay=1&cc_load_policy=1",
"https://www.youtube.com/embed/cKdffSuxCLk?autoplay=1&cc_load_policy=1"
];

var filmkeret = document.getElementById("filmkerete");

var filmKijeloles = document.getElementsByClassName("filmecskek");

filmkeret.src = "https://www.youtube.com/embed/0SKUtLvvp9U?ecver=1";

function valtas(x) {
    for (let szamok = 0; szamok< filmKijeloles.length; szamok++) {
      if (szamok==x){ filmkeret.src = videok[x]; filmKijeloles[x].style.display = "none"; continue;}
     filmKijeloles[szamok].style.display = "block";
    }
}