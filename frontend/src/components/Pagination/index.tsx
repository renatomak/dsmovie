import React from "react";
import "./style.css";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";

type Props = {
  setPage: Function,
  data: MoviePage
}
const Pagination = ({ setPage, data }: Props) => {

  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={data.first} onClick={() => setPage(data.number - 1)}>
          <Arrow />
        </button>
        <p>{`${data.number+1} de ${data.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={data.last} onClick={() => setPage(data.number + 1)}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
