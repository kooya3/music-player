import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);
   
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_frnuYxGGhoF6IRrNYU2hCq5Pl9Ejw`)
        .then((res) => setCountry(res?.data?.location.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [country]);


    if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

    if (error && country !== '') return <Error />;
  

    return (
        <div>
{/* at_frnuYxGGhoF6IRrNYU2hCq5Pl9Ejw */}
        </div>
   )
    }

export default AroundYou;