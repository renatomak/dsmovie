import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

const Listing = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const getMovies = async () => {
    const response = await axios.get(
      `${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`
    );
    const data = response.data as MoviePage;
    setPageNumber(data.number);
    setPage(data);
    console.log("data", data);
  };

  useEffect(() => {
    getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <>
      <Pagination setPage={setPageNumber} data={page} />
      <div className="container">
        <div className="row">
          {page.content.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listing;
