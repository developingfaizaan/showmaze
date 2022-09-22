import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { fetchMovie } from "../api";
import { Loader } from "./";

const ShowDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovie(id)
      .then(({ data }) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const stripHTML = (string) => string.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="flex justify-center mx-auto md:w-9/12 my-20 w-4/5">
          <Link to="/" className="hidden sm:block whitespace-nowrap">
            ← Go Back
          </Link>
          <div className="flex-col justify-center mx-auto">
            <figure className="rounded-md overflow-hidden">
              <img src={movie.image.medium} alt={movie.name} />
            </figure>
            <div className="py-5">
              <h2 className="text-5xl font-semibold my-2">{movie.name}</h2>
              <div className="flex my-5 gap-4">
                <span className="px-4 py-1 bg-cyan-100 hover:bg-cyan-200 text-gray-800 text-sm font-medium rounded-full">
                  {movie.type}
                </span>
                <span className="px-4 py-1 bg-cyan-100 hover:bg-cyan-200 text-gray-800 text-sm font-medium rounded-full">
                  {movie.language}
                </span>
                <span className="px-4 py-1 bg-cyan-100 hover:bg-cyan-200 text-gray-800 text-sm font-medium rounded-full">
                  {movie.status}
                </span>
              </div>
              <p className="max-w-2xl">{stripHTML(movie.summary)}</p>
              <button
                type="button"
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 my-6 transition duration-500 ease hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                <a href={movie.url} target="_blank" rel="noreferrer">
                  More Information
                </a>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShowDetail;
