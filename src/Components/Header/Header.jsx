import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`headerContainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="headerContainerLeft">
        <ul className="headerListLeft">
          <li>
            <Link to="/">
              <img src="/Logo.svg" alt="logo image" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Support</Link>
          </li>
        </ul>
      </div>
      <div className="headerContainerRight">
        <IoSearch className="headerRightIcon" />
        <MdOutlineHelp className="headerRightIcon" />
        <MdShoppingCart className="headerRightIcon" />
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
