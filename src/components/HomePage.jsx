import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ShowCard } from "./";
import { fetchAllMovies } from "../api";
import { Loader } from "./";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllMovies()
      .then(({ data }) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          <h1 className="font-bold text-5xl text-center my-20">Show Maze</h1>
          <main className="flex justify-center mx-auto md:w-9/12">
            <section className="flex flex-wrap justify-center">
              {movies.length !== 0 &&
                movies.map((movie) => (
                  <Link to={`/movie/${movie.show.id}`} key={movie.show.id}>
                    <ShowCard movie={movie} />
                  </Link>
                ))}
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default HomePage;
