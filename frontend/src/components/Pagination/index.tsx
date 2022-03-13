import React, { useState } from "react";
import "./style.css";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";

type Props = {
  setPage: Function,
  data: MoviePage
}
const Pagination = ({ setPage, data }: Props) => {
  const [disabledPrevious, setDisablePrevious] = useState(true);

  const next = () => {
    const nextPage = data.number + 1;
    setPage(nextPage >= data.totalPages ? data.number : nextPage)
    setDisablePrevious(false)
  }
  
  const previous = () => {
    const previousPage = data.number;

    setPage(previousPage > 0 ? previousPage -1 : 0)

    previousPage < 2 && setDisablePrevious(true);

  }
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={disabledPrevious} onClick={previous}>
          <Arrow />
        </button>
        <p>{`${data.number+1} de ${data.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} onClick={next}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
