import React from 'react';
import './Favoritesong.scss'
import {Song} from './Song'

export const Favoritesong = (props) => {

    const {favoriteSongs} = props
    const loading = <h1></h1>

    return(
        <div className='fave-song-body'>
            
                <h1>Favorite Songs List</h1>
            <div className='categories'>
                <h4>Song</h4>
                <h4>Artist</h4>
                <h4>Time</h4>
            </div>
            <div className='fave-song-panel'>{favoriteSongs === undefined ? loading : favoriteSongs.map((song) => {
                return ( 
                    <Song song={song} selectSong={props.selectSong} deleteSong={props.deleteSong} handleToggle={props.handleToggle} history={props.history} />
                )
            })}</div>
        </div>
    )
}