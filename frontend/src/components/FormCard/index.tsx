import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "utils/requests";
import "./style.css";

type Props = {
  movieId: string;
};
type User = {
  movieId: number,
  email: string,
  score: number
}
const initialStateUser = {
  movieId: 0,
  email: '',
  score: 1
}
const FormCard = ({ movieId }: Props) => {
  const [user, setUser] = useState<User>(initialStateUser);

  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    score: 0,
    count: 0,
    image: "",
  });

  const getMovie = async () => {
    const response = await axios.get(`${BASE_URL}/movies/${movieId}`);
    setMovie(response.data);
  }

  const handleOnChange = ({ target }: any) => {
    const { name, value } = target;
    const id = parseInt(movieId, 10)
    setUser({...user, [name]: value, movieId: id })
    console.log(user)
  }

  const save = async () => {
    const response = await axios.put(`${BASE_URL}/scores`, {...user})
    console.log(response)
  }

  useEffect(() => {
    getMovie();
  }, [movieId])

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form">
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={handleOnChange}
              name="email"
              value={user.email}
            />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score" onChange={handleOnChange} name="score" value={user.score}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="button" className="btn btn-primary dsmovie-btn" onClick={save}>
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
};

export default FormCard;
