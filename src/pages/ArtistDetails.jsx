import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  console.log("artistData:", artistData);
  console.log("songs:", artistData?.songs);

  const songs = artistData?.songs;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
  
      {songs ? (
        <RelatedSongs
          data={Object.values(songs)}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      ) : (
        <p className="md:flex hidden flex-col w-[340px] py-10 px-4 bg-[#281764] text-red-600 ble text-lg">No songs found for this artist.</p>
      )}
    </div>
  );
};

export default ArtistDetails;
