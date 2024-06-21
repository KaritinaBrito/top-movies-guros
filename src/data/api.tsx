export const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    console.log(data);

    const movies = data.results;
    console.log(movies);
}

