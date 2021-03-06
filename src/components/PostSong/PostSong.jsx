import React, { useState } from "react"
import "./PostSong.css"




const PostSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        }
        props.newSongProperty(newEntry)
    }
    
    return ( 
       
        <>
            <div className='modal-background'>
                <div className="modal-header">
                    <div className="modal-title">Add New Song Information</div>
                    <button className="close-button" onClick={() => props.closeModal(false)}> &times;</button>
                </div>
                <div className="modal-body">
                    <form className="FormGroup" onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input className="input-field" type="string" value={title} onChange={(event) => setTitle(event.target.value)} />
                        <label>Artist</label>
                        <input className="input-field" type="string" value={artist} onChange={(event) => setArtist(event.target.value)} />
                        <label>Album</label>
                        <input className="input-field" type="string" value={album} onChange={(event) => setAlbum(event.target.value)} />
                        <label>Release Date</label>
                        <input className="input-field" type="date" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
                        <label>Genre</label>
                        <input className="input-field" type="string" value={genre} onChange={(event) => setGenre(event.target.value)} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="footer"></div>
                <div className="close-button2">
                    <button className="close-button2" onClick={() => props.closeModal(false)}> Cancel</button>  
                </div>
            </div>
            <div id="overlay"></div>
        </>
    );
}
 
export default PostSong;