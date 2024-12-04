import React, { useEffect } from "react";
import '../Styles/Navbar.css';

function Navbar() {
  // This hook adds or removes the 'affix' class when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector('.nav').classList.add('affix');
      } else {
        document.querySelector('.nav').classList.remove('affix');
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="/">BEAT BOX</a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li><a href="/">Home</a></li>
              <li><a href="/">Content</a></li>
              <li><a href="/">Info</a></li>
              {/* <li><a href="/">Contact</a></li> */}
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <section className="home"></section>
    </div>
  );
}

export default Navbar;
