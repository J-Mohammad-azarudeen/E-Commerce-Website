import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from "../../assets/images/fish.jpg";
import boatimage from "../../assets/images/smallboat.jpg";
import towerimage from "../../assets/images/tower_fish.jpg";
import "./Carousal.css";
export default function Carousal() {
  return (
    <div className="container-fluid">
      <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image} className="d-block w-100"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={boatimage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={towerimage} className="d-block w-100" alt="..." />
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
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-QF2zF9RW0npF7rjz1N3U6J6bJq6+6jz9t9e9z9e9e9e9e9e9e9e9e9e9e9e9e9e9" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+AMrA0b1E6E+AMrA0b1E6E+AMrA0b1E6E+AMrA0b1E6E" crossorigin="anonymous"></script>
    </div>
  );
}