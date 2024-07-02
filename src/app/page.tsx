"use client"

import React from "react";
import { useState,useEffect } from "react";

import { MovieProps, MovieSingleProps } from '../../types';
import { Card } from "app/components/Card";
import { Modal } from "app/components/Modal";
import { Header } from "app/components/Header";
import { ButtonNextBack } from "app/components/ButtonNextBack";
import { getMoviesByPage, getCategegoriesPreview, fetchMovie, fetchNamesCategories } from "app/api";


type CategoryType = (string | null | undefined)[][];

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [data, setData] = useState<MovieProps[]>([]);
  const [movieSingle, setMovieSingle] = useState<MovieSingleProps>();
  const [category, setCategory] = useState<CategoryType>([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const movieModal = async(id: number) => {
    try {
      const movieData = await fetchMovie(id);
      setMovieSingle(movieData);
      handleShowModal();
      setModalActive(true);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };
 
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const moviesData = await getMoviesByPage(currentPage);
        const movieSingleCategories = moviesData.map((elem:MovieProps) => elem.genre_ids);
        const categoriesData = await getCategegoriesPreview();
        
        const namesCategories = await fetchNamesCategories(movieSingleCategories, categoriesData);
        
        setData(moviesData);
        setCategory(namesCategories);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPage])

  useEffect(() => {
    console.log("Category updated:", category);
  }, [category]);
  

  return (
    <section className="flex flex-col gap-10 px-8 lg:px10 w-full" >
      <Header /> 
      <section className="flex flex-col gap-5"  >
        {data.map((movie, index)=> (

          <div key={`mov-${movie.id}`} onClick={()=> movieModal(movie.id)}>        
          <Card 
            id={movie.id} 
            title={movie.title}
            description={movie.overview}  
            poster={movie.poster_path}
            vote_average={movie.vote_average}
            handleShowModal={handleShowModal}
            genre_ids={category.length > 0 ? category[index] : []} 
            />
            </div>
        ))}
      </section>
      <section className="flex gap-4 lg:justify-end lg:place-items-end pb-5">
        <ButtonNextBack onclick={prevPage} action="Anterior" />
        <ButtonNextBack onclick={nextPage} action="Siguiente" />
      </section>
      {modalActive && movieSingle && (
        <Modal
          id={movieSingle.id}
          title={movieSingle.title}
          poster={movieSingle.poster_path}
          vote_average={movieSingle.vote_average}
          genres={movieSingle.genres[0].name} 
          description={movieSingle.overview}
          handleShowModal={handleShowModal}
        />
      )}
    </section>
  );
}



