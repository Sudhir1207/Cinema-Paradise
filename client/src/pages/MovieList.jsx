import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components";

const MovieList = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  const navigator = useNavigate();

  return (
    <div>
      <main className="container">
        {title == "Your Guide to Great Movies" ? (
          <div className="bg-body-tertiary p-5 border mb-5">
            <h3 className="text-primary">Welcome to Cinema Paradise</h3>
            <p className="lead">
              Film lovers, assemble! Your ultimate movie haven is here
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigator("/movies/upcoming");
              }}
            >
              Explore Now
            </button>
          </div>
        ) : (
          ""
        )}
        <h5 className="text-danger py-3 border-bottom ">{title}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default MovieList;
