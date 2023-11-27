import React, { useEffect, useState } from 'react'
import requests from './Request';
import axios from 'axios';

function Main() {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];
    
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
          setMovies(response.data.results);
        });
      }, []);
      console.log(movies)
  return (
    <div className='text-white'>Main</div>
  )
}

export default Main