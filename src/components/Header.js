import React, { useEffect, useRef } from "react";

import { header1, header2, header3, header4 } from "../image/index";
function Header({ setIsScrolled }) {
  const number = useRef(1);
  const radio1 = useRef();
  const radio2 = useRef();
  const radio3 = useRef();
  const radio4 = useRef();
  const header = useRef();
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (number.current === 1) {
        radio2.current.checked = true;
      } else if (number.current === 2) {
        radio3.current.checked = true;
      } else if (number.current === 3) {
        radio4.current.checked = true;
      } else {
        radio1.current.checked = true;
      }
      if (number.current === 4) {
        number.current = 1;
      } else {
        number.current++;
      }
    }, 5000);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
      },
      { threshold: 0.8 }
    );
    observer.observe(header.current);
    return () => {
      clearInterval(scrollInterval);
    };
  }, [setIsScrolled]);
  return (
    <header ref={header} id="home">
      <div className="header-contain">
        <h1>CINEMA</h1>
        <p> Search for your favorite movies and find the detailed information.</p>
      </div>
      <input ref={radio1} type="radio" className="hidden" name="radio-btn" id="radio1" />
      <input ref={radio2} type="radio" className="hidden" name="radio-btn" id="radio2" />
      <input ref={radio3} type="radio" className="hidden" name="radio-btn" id="radio3" />
      <input ref={radio4} type="radio" className="hidden" name="radio-btn" id="radio4" />
      <div className="slider">
        <div className="header-img first">
          <img src={header1} alt="header1"></img>
        </div>
        <div className="header-img">
          <img src={header2} alt="header2"></img>
        </div>
        <div className="header-img">
          <img src={header3} alt="header3"></img>
        </div>
        <div className="header-img">
          <img src={header4} alt="header4"></img>
        </div>
      </div>
      <div className="manual-btn container">
        <label htmlFor="radio1">
          <div></div>
        </label>
        <label htmlFor="radio2">
          <div></div>
        </label>
        <label htmlFor="radio3">
          <div></div>
        </label>
        <label htmlFor="radio4">
          <div></div>
        </label>
      </div>
    </header>
  );
}

export default React.memo(Header);
