import React, { useEffect, useState } from "react";

import { BsArrowRight, BsHouseDoor } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import ErrImg from "../assests/img/404.png";
import { useTranslation } from "react-i18next";
const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  const [preLoader, setPreLoader] = useState(true);
  const [t,i18n] = useTranslation();

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        {preLoader && (
          <div className="preloader">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <main className="creasoft-wrap">
          <div className="line_wrap">
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
          </div>
          <section className="breadcrumbs">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>Error</h1>
                      <span>
                        <a href={`/${i18n.language}`}>Home</a>
                        <BsArrowRight className="m-1" />
                        Error
                      </span>
                      {/* <div className="breadcrumb-video">
                        <img src={VideoImg} alt="" />
                        <div className="video-inner">
                          <a
                            className="video-popup"
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          >
                            <FaPlay />
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="back-to-home sec-pad">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="error-wrapper">
                    <img src={ErrImg} alt="" />
                    <h3>Sorry We Can't Find That Page!</h3>
                    <p>
                      Donec bibendum enim ut elit porta ullamcorper. Vestibulum
                      Nai quam nulla, venenatis eget dapibus ac, catali topuny
                      wekemdini iaculis vitae nulla. Morbi mattis nec mi ac
                      mollis.
                    </p>
                    <div className="home-btn">
                      <a href={`/${i18n.language}`}>
                        <BsHouseDoor />
                        Back To Home
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<Newsletter /> */}
        </main>
      </div>
    </>
  );
};

export default Error;
