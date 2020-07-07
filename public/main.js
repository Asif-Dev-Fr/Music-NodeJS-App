const search = async () => {

    let searched = document.getElementById('song').value;
    console.log(searched);

    const response = await fetch(`/api/${searched}`);
    const data = await response.json();
    //console.log(data);

    const songs = data.data;
    console.log(songs);

    songs.map((song) => {

        const result = document.createElement('div');
        result.style.width = '33.3333%';
        result.style.margin = '5px 0'

        document.getElementById('section-2').append(result);

        const artist = document.createElement('h2');
        artist.textContent = song.artist.name;
        artist.style.textAlign = 'center';
        
        const cover = document.createElement('img');
        cover.src = song.album.cover_medium; 
        cover.style.display = 'block';
        cover.style.margin = '0 auto';
 

        const title = document.createElement('h3');
        title.textContent = song.title;
        title.style.textAlign = 'center';
        title.style.margin = '5px 0';

        const previewSong = document.createElement('audio');
        previewSong.controls = 'controls';
        previewSong.src = song.preview;
        previewSong.style.width = '90%'
        previewSong.style.display = 'block';
        previewSong.style.margin = '0 auto';


        result.append(artist, cover, title, previewSong);




    });

}

const searchEvent = document.getElementById('searchButton');
searchEvent.addEventListener('click', search)