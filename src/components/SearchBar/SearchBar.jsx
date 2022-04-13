import React, { useState } from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';

const SearchBar = (props) => {
    const [searchTerm,  setSearchTerm] = useState('')



    function filterData() {
      
        props.searchProp.filter((music) => {
            if (searchTerm == '') {
                return music
            } else if(music.includes(searchTerm.toLowerCase())) {
                return music
            }
        }).DisplayMusic() 

    }
    return(
        <input type='text' placeholder="Search Music Library..." on onChange={event =>{setSearchTerm(event.target.value)}} />
    )

}
 
export default SearchBar;