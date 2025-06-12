import { Link } from "react-router";

const Hero = () => {
  return (
    <section id="hero">
      <div className="overlay">
        <h1>A Sword of Storms: Steels and Stones</h1>
        <button className="bg-emerald-950"><Link to="/books">Browse Books</Link></button>
      </div>
      <div className="background-container">{/* content goes here */}</div>
    
    </section>
  );
};

export default Hero;
