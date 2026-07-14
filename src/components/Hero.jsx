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
