import React, { useEffect } from "react";

const MovieList = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <main className="container">
        <h5 className="text-danger py-3 border-bottom ">{title}</h5>
      </main>
    </div>
  );
};

export default MovieList;
