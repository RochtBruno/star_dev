const people = document.getElementById("people");
const starships = document.getElementById("starship");
const planets = document.getElementById("planet");
const btn = document.getElementById("btn-phrase");
const phrase = document.getElementById("phrase");

fillCounters();

function fillCounters() {
  Promise.all([getData("people/"), getData("starships/"), getData("planets/")])
    .then((data) => {
      people.innerHTML = data[0].count;
      starships.innerHTML = data[1].count;
      planets.innerHTML = data[2].count;
    })
    .catch((err) => console.log(err));
}

function getData(param) {
  return fetch(`https://swapi.dev/api/${param}`).then((res) => res.json());
}

function loadPhrase() {
  return fetch("https://apiquotes.com/wp-json/v3/random")
    .then((data) => data.json())
    .then((json) => {
      phrase.innerHTML = `'${json[0].quote}' - ${json[0].author}`;
    })
    .catch((err) => console.log(err));
}
