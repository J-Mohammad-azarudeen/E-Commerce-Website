import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './ProductCard.css';
import cards from '../../card.js';


export default function ProductCard() {
  return (
    <div className="overflow-hidden fontnew" style={{width: "1850px", }}>
      <h1 className="text-center mt-5 mb-5 ms-5 " style={{fontSize:"60px"}}>Deals of the Day</h1>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-5" style={{width: "100vw", }}>
      {cards.map((card) => (
        <div
          className="d-flex justify-content-end align-items-center m-3 hover"
          key={card.id}
          style={{ width: "15rem", }}
        >
          <div className="card hover" style={{ width: "16rem"}}>
            <img src={card.image} className="card-img-top image" alt="..." style={{height:"100px",objectFit:"contain"}}/>
            <div className="card-body">
              <h5 className="card-title text-center">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#" className="btn btn-primary mx-2">
                {card.buttonText}
              </a>
               <a href="#" className="btn btn-primary">
                {card.addtocart}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}


   
 

  
