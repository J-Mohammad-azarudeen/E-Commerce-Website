import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import image from 'src/assets/photorealistic-wild-tuna-day-celebration_23-2151307884.avif';

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}