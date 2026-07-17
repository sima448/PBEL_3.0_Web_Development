/*
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Discover Your Next Favorite Book</h1>
      <p>
        Explore Programming, Fiction, Science and History Books at One Place
      </p>
      <button onClick={() => navigate("/books")}>Shop Now</button>
    </section>
  );
}

export { Hero };

 import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Book</h1>

          <p>
            Explore Programming, Fiction, Science and History Books at One Place
          </p>

          <button onClick={() => navigate("/books")}>Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export { Hero };
*/

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const images = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Book</h1>

          <p>
            Explore Programming, Fiction, Science and History Books at One Place
          </p>

          <button onClick={() => navigate("/books")}>Shop Now</button>
        </div>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span key={index} onClick={() => setCurrent(index)}>
            {index === current ? "●" : "○"}
          </span>
        ))}
      </div>
    </section>
  );
}

export { Hero };