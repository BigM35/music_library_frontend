
import React, { Fragment } from 'react'




const DisplayMusic = (props) => {
    
    return (
        <Fragment>
            <table className="table table-sm">
                <thead>
                    <th>Entry ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </thead>
                <tbody>
                    {props.music.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td>
                                    <button onClick={() => props.delete(song.id)}> Delete </button>  
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>
    );
}

export default DisplayMusic;