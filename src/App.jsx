import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic'

const BASEURL = 'http://127.0.0.1:8000/music/'

function App() {

  const [songInfo, setSongInfo] = useState([]);

  useEffect(() => {
    getMusic();
  }, []);

  async function getMusic() {
    try {
      let response = await axios.get(BASEURL)
      console.log("GetMusic Response: ", response.data)
      setSongInfo(response.data)
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }



  return (
    <Fragment>
      <DisplayMusic.jsx music = {songInfo}/>
    {/* <DisplayMusic /> */}
    </Fragment>
  );
}

export default App;
