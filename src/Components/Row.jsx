import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdChevronRight , MdChevronLeft } from "react-icons/md";
import Movie from './Movie';
// import requests from './Request';


function Row({title , FetchURL , rowID}) {

    const [movies, setMovies] = useState([]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        axios.get(FetchURL).then((response) => {
            // console.log(response)
          setMovies(response.data.results);
        });
      }, [FetchURL]);

      console.log(movies)
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
      </>
  );
}

export default Row