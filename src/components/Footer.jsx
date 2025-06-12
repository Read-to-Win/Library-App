import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer flex flex-row justify-centeritems-center bg-emerald-950 ">
      <div className="footer-container">
        <div className="footer-left">
          <h4 className="text-3xl text-amber-400 flex gap-3">
            <Link to="./contact"></Link>
            <FaBookOpenReader />
            ReadTo_Win
            <FaAward />
          </h4>
          <p>© 2025 Read to Win. All rights reserved.</p>

          {/* <p>
            <MdLocationOn /> 123 Reading Ave, Book City, 56789
          </p> */}
        </div>

        <div className="footer-newsletter">
          <p>Subscribe to our newsletter:</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
        {/* 
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div> */}

        <div className="footer-social">
          <p>Follow us:</p>
          <span className="flex flex-row gap-3">
            <FaFacebookF className="text-amber-400 cursor-pointer" />
            <FaTwitter className="text-amber-400 cursor-pointer" />
            <FaInstagram className="text-amber-400 cursor-pointer" />{" "}
          </span>
          <p className="flex items-ceneter gap-2 mt-1 cursor-pointer">
            <BsFillTelephoneInboundFill />
            +233 50 945 9284
          </p>
          <p className="flex items-center gap-2 cursor-pointer">
            <MdEmail /> info@readtowin.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
