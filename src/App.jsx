import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic'
import PostSong from './components/PostSong/PostSong';
import SearchBar from './components/SearchBar/SearchBar';


const BASEURL = 'http://127.0.0.1:8000/music/'

function App() {

  const [songInfo, setSongInfo] = useState([]);
  const[addSong, setAddSong] = useState(false);
  
  useEffect(() => {
    getMusic();
  }, []);
  //GET
  async function getMusic() {
    try {
      let response = await axios.get(BASEURL)
      setSongInfo(response.data)
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
  //POST
  async function addNewSong(newSong){
    try{
      let response = await axios.post(BASEURL, newSong)
      let musicLibrary = [...songInfo, response.data];
      setSongInfo(musicLibrary);
    }catch(err){
      console.log(`Error: ${err}`);
    }
  }

  async function handleDelete(id){
    try{
      await axios.delete(`${BASEURL}${id}`)
      const filteredSongs = songInfo.filter(song => song.id !== id);
      setSongInfo(filteredSongs);
    }catch(err){
      console.log(`Error: ${err}`);
    }
  } 
  return (
    <Fragment>
        <SearchBar searchProp = {getMusic}/>
        <DisplayMusic music = {songInfo} delete = {handleDelete}/>
        <button className='openModalBtn'  onClick={() => {setAddSong(true)}}>Add New Song To Library</button>
        {addSong && <PostSong newSongProperty = {addNewSong} closeModal={setAddSong}/>}
    </Fragment>
  );
}

export default App;
