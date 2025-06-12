import featureImg from "../assets/feat1.jpg";
import featureImg2 from "../assets/feat2.jpg";
import featureImg3 from "../assets/feat3.jpg";
import featureImg4 from "../assets/feat4.jpg";
import featureImg5 from "../assets/feat5.jpg";
import featureImg6 from "../assets/feat6.jpg";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Featured = () => {
  return (
    <section id="featured-books">
      <h1 className="text-emerald-950 text-2xl ">Best Selling Books Ever</h1>
      <div id="feat">
        <div className="features bg-emerald-100">
          <img src={featureImg} />
          <h2>Stalight in His Eyes</h2>
          <p>Richard Worl</p>
          <br></br>
          <p1 className="flex text-emerald-950">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p1>
        </div>
        <div className="features bg-emerald-100">
          <img src={featureImg2} />
          <h2>Whale Harbor </h2>
          <p>Fiona </p>
          <br></br>
           <p1 className="flex text-emerald-950">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </p1>
        </div>
        <div className="features bg-emerald-100">
          <img src={featureImg3} />
          <h2>The Chosen Girl</h2>
          <p>Elle Gray</p>
          <br></br>
           <p1 className="flex text-emerald-950">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p1>
        </div>
        <div className="features bg-emerald-100">
          <img src={featureImg4} />
          <h2>Chateau Escape</h2>
          <p>Kate Galley</p>
          <br></br>
          <p1 className="flex text-emerald-950">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p1>
        </div>
        <div className="features bg-emerald-100">
          <img src={featureImg5} />
          <h2>The Girl In Town</h2>
          <p>Elle Gray</p>
          <br></br>
          <p1 className="flex text-emerald-950">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p1>
        </div>
        <div className="features bg-emerald-100">
          <img src={featureImg6} />
          <h2>Turn Back Time</h2>
          <p>Sian</p>
          <br></br>
          <p1 className="flex text-emerald-950">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
           <FaRegStarHalfStroke />
          </p1>
        </div>
      </div>
    </section>
  );
};

export default Featured;
