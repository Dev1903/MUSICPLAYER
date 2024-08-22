import React, { useState, useRef } from 'react';

const Player = () => {
    const [playing, setPlaying] = useState(null); // State to track which item is playing
    const [currentSong, setCurrentSong] = useState(null); // State to track the current song's source
    const audioRef = useRef(null); // Define audioRef with type null initially

    const handlePlayPause = (index, src) => {
        if (audioRef.current) { // Check if audioRef.current is not null
            if (playing === index) {
                audioRef.current.pause(); // Pause the song
                setPlaying(null); // Clear the playing state
            } else {
                if (playing !== null) {
                    audioRef.current.pause(); // Pause the previously playing song
                }
                if (src !== currentSong) {
                    audioRef.current.src = src; // Update the source if different
                    audioRef.current.play(); // Start playing the new song
                    setCurrentSong(src); // Update current song state
                } else {
                    audioRef.current.play(); // Resume playing the same song
                }
                setPlaying(index); // Update the playing state to the new song
            }
        }
    };

    const songs = [
        { img: 'udit.jpeg', title: 'chokhe name bristhi', artist: 'Udit Narayan', src: 'songs/chokhenamebrishti.mp3' },
        { img: 'alka.jpeg', title: 'tumi je amar', artist: 'Alka Yagnik', src: 'songs/tumijeamar.mp3' },
        { img: 'sanu.jpeg', title: 'phiriye dao', artist: 'Kumar Sanu', src: 'songs/phiriyedao.mp3' },
        { img: 'hemanta.jpeg', title: 'Amay prosno kore', artist: 'Hemanta Mukhopadhyay', src: 'songs/amayprosnokore.mp3' },
        { img: 'lata.jpeg', title: 'aj noy gungun', artist: 'Lata Mangeshkar', src: 'songs/ajnoygungun.mp3' },
        { img: 'sanu.jpeg', title: 'tujhe dekha to', artist: 'Kumar Sanu', src: 'songs/tujhedekhato.mp3' },
        { img: 'lata.jpeg', title: 'aaja re', artist: 'Lata Mangeshkar', src: 'songs/aajare.mp3' },
        { img: 'kishore.jpeg', title: 'roop tera', artist: 'Kishore Kumar', src: 'songs/rooptera.mp3' },
        { img: 'alka.jpeg', title: 'baazigar', artist: 'Alka Yagnik', src: 'songs/baazigar.mp3' },
        { img: 'rd.jpeg', title: 'mehbooba mehbooba', artist: 'R.D. Burman', src: 'songs/mehbooba.mp3' },
        { img: 'jawan.jpeg', title: 'jawan ttl. track', artist: 'Anirudh Ravichandra', src: 'songs/jawan.mp3' },
        { img: 'ramaiya.jpeg', title: 'Not Ramaiya Vastavaiya', artist: 'Anirudh Ravichandra', src: 'songs/ramaiya.mp3' },
        { img: 'chaleya.jpeg', title: 'chaleya', artist: 'Arijit Singh, Shilpa Rao', src: 'songs/chaleya.mp3' },
        { img: 'zinda.jpeg', title: 'zinda banda', artist: 'Anirudh Ravichandra', src: 'songs/zindabanda.mp3' },
        { img: 'tuhaikahan.jpeg', title: 'tu hai kahan', artist: 'AUR', src: 'songs/tuhaikahan.mp3' },
    ];

    const columnHeaders = [
        'BENGALI OLD SONGS',
        'HINDI OLD SONGS',
        'NEW HINDI HITS'
    ];

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='container'>
                    <div className='row justify-content-around'>
                        {[0, 1, 2].map((colIndex) => (
                            <div className='col-md-4 music-list' key={colIndex}>
                                <div className='container-fluid  music mt-4'>
                                    <h3 className='pt-4 pb-5'>{columnHeaders[colIndex]}</h3>
                                    {songs.slice(colIndex * 5, (colIndex + 1) * 5).map((song, rowIndex) => (
                                        <React.Fragment key={rowIndex}>
                                            <div className='row'>
                                                <div className="col-md-4">
                                                    <img src={`images/music/${song.img}`} alt={song.title} />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className='d-flex flex-column justify-content-center h-100'>
                                                        <h6>{song.title}</h6>
                                                        <p>{song.artist}</p>
                                                    </div>
                                                </div>
                                                <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                                    <button 
                                                        className='btn btn-secondary'
                                                        onClick={() => handlePlayPause(colIndex * 5 + rowIndex, song.src)}
                                                    >
                                                        <i className={`fa-solid ${playing === colIndex * 5 + rowIndex ? 'fa-pause' : 'fa-play'}`}></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {rowIndex < 4 && <hr />} {/* Add <hr /> if not the last item in the row */}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <audio ref={audioRef} />
        </div>
    );
};

export default Player;
