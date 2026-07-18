import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

   const slides = [
     {
       image: banner1,
       title: "Discover Your Next Favorite Book",
       subtitle:
         "Explore Programming, Fiction, Science and History Books at One Place",
     },
     {
       image: banner2,
       title: "Learn New Skills Every Day",
       subtitle: "Programming, Web Development, Python, React and More",
     },
     {
       image: banner3,
       title: "A World of Knowledge Awaits",
       subtitle: "Find Best-Selling Books from Top Authors Around the World",
     },
     {
       image: banner4,
       title: "Special Offers on Top Books",
       subtitle:
         "Get Amazing Discounts and Exclusive Deals on Your Favorite Books",
     },
   ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{slides[current].title}</h1>

          <p>{slides[current].subtitle}</p>

          <button onClick={() => navigate("/books")}>Shop Now</button>
        </div>
      </div>

      <button
        className="prev-btn"
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
      >
        ❮
      </button>

      <button
        className="next-btn"
        onClick={() =>
          setCurrent(current === slides.length - 1 ? 0 : current + 1)
        }
      >
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} onClick={() => setCurrent(index)}>
            {index === current ? "●" : "○"}
          </span>
        ))}
      </div>
    </section>
  );
}

export { Hero };