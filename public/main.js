const search = async (e) => {

    e.preventDefault();

    const searched = document.getElementById('song').value;

    const response = await fetch(`/api/${searched}`);
    const data = await response.json();

    const songs = data.data;
    // console.log(songs);
    
    let result = '';
    songs.map(song => {
        
        const artist = `<h2 class=artist-name >${song.artist.name}</h2>`;
        const cover = `<img class="album-cover" src="${song.album.cover_medium} alt="${song.title}">`;
        const title = `<h3 class="song-title">${song.title}</h3>`;
        const previewSong = `<audio class="song-preview" controls src="${song.preview}"></audio>`
  

        result += `<div class='song'>
                        ${artist}
                        ${cover}
                        ${title}
                        ${previewSong}
                    </div>`;
        document.getElementById("section-2").innerHTML = result;
    })

    document.querySelector('form').reset();
    
}

const searchEvent = document.querySelector('form');
searchEvent.addEventListener('submit', search)