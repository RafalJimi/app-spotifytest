import React from "react";

import { TableContainer } from "../table.styled";
import { TableHeader } from "../tableHeader";
import { ListItem } from "../listItem";

export const PlaylistLayout = ({
  songs,
  favList,
  currentSongName,
  NowIsPlaying,
  playOrNot,
  handleAddSongToFav,
  handleDeleteSongFromFav,
  handleSetCurrentSong
}) => {
  return (
    <TableContainer>
      <div className="table">
        <TableHeader />
        {favList &&
          songs.map((song, i = 0) => (
            <div key={i++}>
              <ListItem
                id={i++}
                song={song}
                favList={favList}
                currentSongName={currentSongName}
                NowIsPlaying={NowIsPlaying}
                playOrNot={playOrNot}
                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                handleSetCurrentSong={handleSetCurrentSong}
              />
            </div>
          ))}
        <div style={{ height: "17px" }}></div>
      </div>
    </TableContainer>
  );
};
