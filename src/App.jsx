import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic'
import PostSong from './components/PostSong/PostSong';


const BASEURL = 'http://127.0.0.1:8000/music/'

function App() {

  const [songInfo, setSongInfo] = useState([]);

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
      <div>
        <DisplayMusic music = {songInfo} delete = {handleDelete}/>
        <PostSong newSongProperty = {addNewSong}/>
      </div>
    </Fragment>
  );
}

export default App;
