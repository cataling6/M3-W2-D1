const albums = [
  {
    id: 1,
    title: "Off the Wall",
    releaseYear: 1979,
    cover: "./assets/Off-the-wall.jpg",
    artist: "Michael Jackson",
    genre: "Pop",
    duration: 2543,
    tracks: [
      {
        tId: 1,
        tName: "Don't Stop 'Til You Get Enough",
        tDuration: 365,
      },
      {
        tId: 2,
        tName: "Rock with You",
        tDuration: 220,
      },
      {
        tId: 3,
        tName: "Workin' Day and Night",
        tDuration: 314,
      },
      {
        tId: 4,
        tName: "Get on the Floor",
        tDuration: 277,
      },
      {
        tId: 5,
        tName: "Off the Wall",
        tDuration: 246,
      },
      {
        tId: 6,
        tName: "Girlfriend",
        tDuration: 184,
      },
      {
        tId: 7,
        tName: "She's Out of My Life",
        tDuration: 218,
      },
      {
        tId: 8,
        tName: "I Can't Help it",
        tDuration: 269,
      },
      {
        tId: 9,
        tName: "I'ts the Falling in Love",
        tDuration: 227,
      },
      {
        tId: 10,
        tName: "Burn This Disco Out",
        tDuration: 221,
      },
    ],
  },
  { id: 2, title: "Thriller", releaseYear: 1982, cover: "./assets/mj-thriller-expanded-edition.jpg", artist: "Michael Jackson", genre: "Pop", duration: 2539, tracks: 9 },
  { id: 3, title: "Bad", releaseYear: 1987, cover: "./assets/mj-bad.jpg", artist: "Michael Jackson", genre: "Pop", duration: 2915, tracks: 11 },
  { id: 4, title: "Dangerous", releaseYear: 1991, cover: "./assets/mj-dangerous-expanded-edition.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4623, tracks: 14 },
  { id: 5, title: "History - Book 1", releaseYear: 1995, cover: "./assets/mj-history-past-present-and-future-book-i.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4298, tracks: 15 },
  { id: 6, title: "History - Book 2", releaseYear: 1995, cover: "./assets/mj-history-past-present-and-future-book-i.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4633, tracks: 15 },
  { id: 7, title: "Invincible", releaseYear: 2001, cover: "./assets/mj-invincible.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4619, tracks: 16 },
];

// const immagine = document.querySelector("#img");
// const titolo = document.querySelector(".card-title");
// const artista = document.querySelector("#artista");
// const genere = document.querySelector("#genere");
// const duration = document.querySelector("#durata");
const rowJS = document.querySelector("#js");

function generaAlbum() {
  for (let i = 0; i < albums.length; i++) {
    let ore = Math.floor(albums[i].duration / 3600);
    let minuti = Math.floor((albums[i].duration % 3600) / 60);
    let secondi = albums[i].duration % 60;
    rowJS.innerHTML += ` <div class="col-xl-3 col-md-4 col-6">
        <div class="card card-effect">
          <img class="img-thumbnail" src="${albums[i].cover}">
          <div class="card-body">
            <h4 class="card-title">${albums[i].title}</h4>
            <p>Artista: <span id="artist">${albums[i].artist}</span></p>
            <p>Genere: <span id="genre">${albums[i].genre}</span></p>
            <p>Anno: <span id="genre">${albums[i].releaseYear}</span></p>
            <p>Durata: <span id="duration">${ore}h, ${minuti}minuti e ${secondi}secondi</span></p>
            <a href="#focus" class="btn btn-primary">Dettagli...</a>
          </div>
        </div>
      </div>`;
  }
}

generaAlbum();

// function creaDettaglioAlbum() {
//   focus.arguments;
// }
const button = document.querySelectorAll(".btn-primary");
const focus = document.querySelector("#dettagli-album");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    //console.log("si strunz");
    if (focus) {
      focus.remove();
    }

    document.querySelector("#focus").innerHTML = ` <div class="album">
        <div class="testa flex-row">
          <div class="d-flex">
            <div class="album-img img-thumbnail p-2 m-3">
              <img src="${albums[i].cover}" />
            </div>
            <div class="tracks">
              <ul id="lista"></ul>`;
    for (let j = 0; j <= albums[i].tracks.length; j++) {
      document.querySelector("#lista").innerHTML += `<li>${j + 1} - ${albums[i].tracks[j].tName}</li>`;
    }
    console.log("AAA");
    document.querySelector(".album-details").innerHTML += ` 
            <ul>
              <li>${albums[i].artist}</li>
              <li>${albums[i].genre}</li>
              <li>${albums[i].title}</li>
            </ul>
          </div>`;
  });
}
