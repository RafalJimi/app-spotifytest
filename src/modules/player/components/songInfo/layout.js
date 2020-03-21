import React from "react";

import { SongInfoContainer } from "./layout.styled";

export const SongInfoLayout = ({ currentPlayedSong }) => {
  return (
    <SongInfoContainer>
      <div className="songAlbum">
        {currentPlayedSong.artistName && (
          <img src={currentPlayedSong.artworkUrl30} alt="album" />
        )}
      </div>
      {currentPlayedSong.artistName && (
        <div className="songTitle">
          {" "}
          <p>{currentPlayedSong.trackName}</p>
        </div>
      )}
      {currentPlayedSong.artistName && (
        <div className="songArtist">
          {" "}
          <p>{currentPlayedSong.artistName}</p>
        </div>
      )}
    </SongInfoContainer>
  );
};