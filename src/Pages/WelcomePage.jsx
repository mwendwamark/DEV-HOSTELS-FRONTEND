import React, { useEffect } from "react";
import WelcomeImage from "../assets/welcomePageImage.jpg";
import "../Styles/WelcomePage.css";
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WelcomePage = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    //reveal animations for specific elements
    ScrollReveal().reveal(".introduction-section-contents-header", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".introduction-section-contents-header h1", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".introduction-info div", {
      delay: 700,
      origin: "left",
      interval: 100,
    });
    ScrollReveal().reveal(".introduction-section-image", {
      delay: 800,
      origin: "right",
    });
  });
  return (
    <>
      <div className="welcome-page">
        <div className="introduction-section section">
          <div className="introduction-section-contents container">
            <div className="introduction-section-contents-header">
              <h1>
                Elevate your hostel hunting experience with "Dev~Hostels"
                <span>
                  "Effortlessly book affordable and comfortable student hostels,
                  prioritizing convenience and safety."
                </span>
              </h1>
              <p>
                <span>Dev~Hostels</span> is a seamless platform for students to
                find tailored accommodations. Easy exploration, comparison, and
                confident booking. Prioritizing convenience, affordability, and
                safety, ensuring a comfortable and welcoming environment for an
                enhanced educational journey
              </p>
              <div className="introduction-info">
                <div className="hostel-count">
                  <h2> 1642+</h2>
                  <p>Hostels</p>
                </div>

                <div className="student-count">
                  <h2> 2507+</h2>
                  <p>Students</p>
                </div>

                <div className="hosts-count">
                  <h2> 389+</h2>
                  <p>Hosts</p>
                </div>
              </div>
            </div>
            <div className="introduction-section-image">
              {" "}
              <img src={WelcomeImage} alt="homeimage" />
            </div>
          </div>

          <div className="what-we-offer container">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
