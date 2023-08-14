import React from "react";
import "./SceneContainer.css";
import { Link } from "react-router-dom";
import "./SceneContainer.css";

const SceneContainer = ({ imageUrl, title, description, url }) => {
  return (
    <Link to="/Meditate" state={{ url }} className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </Link>
  );
};

export default SceneContainer;
