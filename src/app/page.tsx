"use client"

import React from "react";
import { useState,useEffect } from "react";
import Image from "next/image";
import axios from 'axios';


import { MovieProps, MovieSingleProps } from '../../types';
import { Card } from "app/components/Card";
import { Modal } from "app/components/Modal";
import { REACT_BASE_URL, REACT_BEARER_KEY } from "../../api";


const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [data, setData] = useState<MovieProps[]>([]);
  const [idMovie, setIdMovie] = useState(0);
  const [movie, setMovie] = useState<MovieSingleProps>();
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  
  const api= axios.create({
    baseURL: REACT_BASE_URL,
    headers: {
      accept: 'application/json',
      Authorization: REACT_BEARER_KEY
    }
  })
  
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleShowModal = () => {
    setModalActive(!modalActive)
  };
 

  const fetchMovie = async (id_movie: number) => {
    try {
      const { data } = await api.get(`/movie/${id_movie}`);
      setMovie(data);
      console.log(movie)
      setModalActive(true);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    const getMoviesByPage = async (page: number) => {
      try {
        const { data } = await api.get(`/movie/popular?language=en-US&page=${page}`);
        const movies = data.results.slice(0, ITEMS_PER_PAGE);
        setData(movies);
      } catch (error) {
        throw new Error('Error Fetching data')
      }
    };


    const getCategegoriesPreview = async()=> {
      try {
        const { data } = await api.get('/genre/movie/list');
        const categories = data.genres;
        console.log(categories);
        setCategory(categories);
      } catch(error){
        throw new Error('Error Fetching data')
      }
    }
    
    getMoviesByPage(currentPage);
    getCategegoriesPreview();
    
    
  }, [currentPage]);

  
  return (
    <section className="flex flex-col gap-10 px-8 lg:px10 w-full" >
      
      <div  className="w-1/3 h-10 lg:h-20 relative ">
        <Image
          src="/header.png"
          alt="Logo"
          fill
          className="right-0"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className='font-bold text-guros-gray950'>
          Top movies en Guros
        </h1>
        <p className="font-normal text-guros-gray500 tracking-wide">
            Pirate ipsum arrgh bounty warp jack. Red keelhaul spirits on avast. Topsail chase pirate lanyard mizzen log me. Hogshead hearties brace black boom. Coast rig dead round or.
        </p>
      </div>
      <section className="flex flex-col gap-5"  >
        {data.map((movie)=> (

          <div key={`mov-${movie.id}`} onClick={() => fetchMovie(movie.id)}>        
          <Card 
            id={movie.id} 
            title={movie.title}
            description={movie.overview}  
            poster={movie.poster_path}
            vote_average={movie.vote_average}
            handleShowModal={handleShowModal}
            />
            </div>
        ))}
      </section>
      <section className="flex gap-4 lg:justify-end lg:place-items-end">
        <button onClick={prevPage} className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">Anterior</button>
        <button onClick={nextPage} className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">Siguiente</button>
      </section>
      {modalActive && movie && (
        <Modal
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          vote_average={movie.vote_average}
          genres={movie.genres[0].name} 
          description={movie.overview}
          handleShowModal={handleShowModal}
        />
      )}
    </section>
  );
}



