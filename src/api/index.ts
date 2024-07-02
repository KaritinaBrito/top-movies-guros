import { env } from "app/config/env";
import { GenreProps } from "../../types";

const url = env.BASE_URL;
const headers = {
  accept: 'application/json',
  Authorization: env.BEARER_KEY || '',
};
const options = {
  method: 'GET',
  headers: headers,
};
const ITEMS_PER_PAGE = 5;


export async function getMoviesByPage(page: number) {
  try {
    const response = await fetch(`${url}/movie/popular?language=en-US&page=${page}`, options);
    const data = await response.json();
    const movies = data.results.slice(0, ITEMS_PER_PAGE);
    return movies;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const fetchMovie = async (id_movie: number) => {
  try {
    const response = await fetch(`${url}/movie/${id_movie}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
};

export const getCategegoriesPreview = async () => {
  try {
    const response = await fetch(`${url}/genre/movie/list`, options);
    const categories = await response.json();
    const categoriesData = categories.genres;
    return categoriesData;
  } catch (error) {
    throw new Error('Error Fetching data')
  }
}

export function fetchNamesCategories(genre_ids: number[][], genre_data: GenreProps[]) {
  return genre_ids.map((idList) => {
    return idList.map((id: number) => {
      const movie = genre_data.find(item => item.id === id);
      return movie ? movie.name : null;
    });
  });
}