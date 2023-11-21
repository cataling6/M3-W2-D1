const albums = [
  { id: 1, title: "Off the Wall", releaseYear: 1979, cover: "./assets/Off-the-wall.jpg", artist: "Michael Jackson", genre: "Pop", duration: 2543, tracks: 10 },
  { id: 2, title: "Thriller", releaseYear: 1982, cover: "./assets/mj-thriller-expanded-edition.jpg", artist: "Michael Jackson", genre: "Pop", duration: 2539, tracks: 9 },
  { id: 3, title: "Bad", releaseYear: 1987, cover: "./assets/mj-bad.jpg", artist: "Michael Jackson", genre: "Pop", duration: 2915, tracks: 11 },
  { id: 4, title: "Dangerous", releaseYear: 1991, cover: "./assets/mj-dangerous-expanded-edition.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4623, tracks: 14 },
  { id: 5, title: "History - Book 1", releaseYear: 1995, cover: "./assets/mj-history-past-present-and-future-book-i.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4298, tracks: 15 },
  { id: 5, title: "History - Book 2", releaseYear: 1995, cover: "./assets/mj-history-past-present-and-future-book-i.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4633, tracks: 15 },
  { id: 6, title: "Invincible", releaseYear: 2001, cover: "./assets/mj-invincible.jpg", artist: "Michael Jackson", genre: "Pop", duration: 4619, tracks: 16 },
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
          <img src="${albums[i].cover}">
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

    //document.querySelector("#focus").innerHTML = ``;
    console.log(albums[i].id);
  });
}
