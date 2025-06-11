import About from "../components/About";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import NavBar from "../components/NavBar";


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Featured/>
      <About/>
      <Footer/>
      
    

      {/* <a href="" className="text-center">
        Explore Books
      </a> */}

      {/* <Home/> */}
    </div>
  );
};

export default Home;
