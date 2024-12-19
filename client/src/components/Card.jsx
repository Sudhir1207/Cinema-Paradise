import React from "react";
import { Link } from "react-router-dom";
import backup from "../assets/img_avatar1.png";
import "../index.css";

const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={backup} alt="" />
        <div className="card-body">
          <h5 className="card-title text-primary">Movie Title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Cras venenatis euismod malesuada.
            Curabitur ut sapien convallis tempor.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i>
              7.21 | 250 Reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
