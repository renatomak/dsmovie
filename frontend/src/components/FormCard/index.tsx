/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/Validate";
import ButtonSubmitAlert from "./ButtonSubmitAlert/Index";
import "./style.css";

type Props = {
  movieId: string;
};
type User = {
  movieId: number;
  email: string;
  score: number;
};
const initialStateUser = {
  movieId: 0,
  email: "",
  score: 1,
};

const Alert = () => {
  return (
    <>
      <div className="alert alert-success alert-center" role="alert">
        Avaliação salva com sucesso! <br />
        Obrigado pela participação!!!
      </div>
    </>
  );
};

const FormCard = ({ movieId }: Props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>(initialStateUser);
  const [finished, setFinished] = useState(false);

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
  };

  const handleOnChange = ({ target }: any) => {
    const { name, value } = target;
    const id = parseInt(movieId, 10);
    setUser({ ...user, [name]: value, movieId: id });
    console.log(user);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) return;

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    };

    axios(config).then((response) => {
      setFinished(true);
    });

    console.log(email, score);
  };

  useEffect(() => {
    getMovie();
  }, [movieId]);

  useEffect(() => {
    setTimeout(() => {
      if (finished) {
        navigate("/");
      }
    }, 3000);
  }, [finished]);

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
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
            <select
              className="form-control"
              id="score"
              onChange={handleOnChange}
              name="score"
              value={user.score}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          {/* <ButtonSubmitAlert setFinished={setFinished}/> */}
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
      {finished ? <Alert /> : null}
    </div>
  );
};

export default FormCard;
