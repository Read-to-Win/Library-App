import featureImg from "../assets/feat1.jpg";
import featureImg2 from "../assets/feat2.jpg";
import featureImg3 from "../assets/feat3.jpg";
import featureImg4 from "../assets/feat4.jpg";
import featureImg5 from "../assets/feat5.jpg";
import featureImg6 from "../assets/feat6.jpg";

const Featured = () => {
  return (
    <section id="featured-books">
      <h1>Best Selling Books Ever</h1>
      <div id="feat">
        <div className="features">
          <img src={featureImg} />
          <h2>Stalight in His Eyes</h2>
          <p>Richard Worl</p>
          <br></br>
          <p1>$5.00</p1>
        </div>
        <div className="features">
          <img src={featureImg2} />
          <h2>Whale Harbor </h2>
          <p>Fiona </p>
          <br></br>
          <p1>$4.00</p1>
        </div>
        <div className="features">
          <img src={featureImg3} />
          <h2>The Chosen Girl</h2>
          <p>Elle Gray</p>
          <br></br>
          <p1>$6.00</p1>
        </div>
        <div className="features">
          <img src={featureImg4} />
          <h2>Chateau Escape</h2>
          <p>Kate Galley</p>
          <br></br>
          <p1>$9.00</p1>
        </div>
        <div className="features">
          <img src={featureImg5} />
          <h2>The Girl In Town</h2>
          <p>Elle Gray</p>
          <br></br>
          <p1>$5.00</p1>
        </div>
        <div className="features">
          <img src={featureImg6} />
          <h2>Turn Back Time</h2>
          <p>Sian</p>
          <br></br>
          <p1>$8.00</p1>
        </div>
      </div>
    </section>
  );
};

export default Featured;
