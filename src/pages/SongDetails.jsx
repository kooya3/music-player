import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';




const SongDetails = () => {
    const { songid, id: artistId } = useParams();

}

export default SongDetails;
