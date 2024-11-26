import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";


import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import WOW from "wowjs";


import axios from "axios";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutHeroImg from "../assests/img/about-hero-img-min.png";
import AboutImgOne from "../assests/img/diagram.svg";
import AboutImgTwo from "../assests/img/brush.svg";
import AboutImgThree from "../assests/img/message-programming.svg";
import AboutSection from "../components/about-section";


const About = () => {
  const [t,i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [getHistory, setGetHistory] = useState([]);
  // const [getFeature, setGetFeature] = useState([]);
  // const [video, setVideo] = useState([]);
  const [preLoader, setPreLoader] = useState(true);
  // const [getContact, setGetContact] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`,
  //       {
  //         params: {
  //           languageId: lang,
  //           // languageId: 1,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setGetContact(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetAboutUs?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetCompanyHistory?languageId=${lang}`
      )
      .then((res) => {
        setGetHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.udtech-sa.com/api/WebSite/GetFeatures?languageId=${lang}`
  //     )
  //     .then((res) => {
  //       setGetFeature(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [lang]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.udtech-sa.com/api/WebSite/GetPagesVideo")
  //     .then((res) => {
  //       setVideo(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 1000);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="about">
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
          <section className="breadcrumbs about-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>{t("about_page_about_us")}</h1>
                      <span>
                        <a href={`/${i18n.language}`}>{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("about_page_about_us")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="getin-touch">
              <div className="row">
                <div className="col-12">
                  <div className="call-banner">
                    <img src={AboutHeroImg} alt="" />
                  </div>
                </div>
                <div className="col-12 px-3 px-md-5">
                  <div className="contact-form whyChooseUs">
                    <h4 className="pb-3">{t("about_page_why_choose")}</h4>
                    <h6>{apiData.title}</h6>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: `<div>${apiData.aboutDescription}</div>`,
                      }}
                    ></h6>

                    <div className="row pt-5 pb-3">
                      <div className="col-md-4">
                        <img src={AboutImgOne} alt="" className="" />
                        <span className="ps-3">
                          {t("about_page_superior_support")}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <img src={AboutImgTwo} alt="" className="" />
                        <span className="ps-3">
                          {t("about_page_unique_design")}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <img src={AboutImgThree} alt="" className="" />
                        <span className="ps-3">
                          {t("about_page_clean_code")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

<AboutSection />

          {/* features */}

          <Features />

          <section className="history-area sec-mar">
            <div className="container">
              <div className="title-wrap">
                <div className="sec-title featureHead">
                  <h5>{t("about_page_our_history")}</h5>
                  <h3>
                    <span className=""></span>
                    {t("about_page_ud_history")}
                  </h3>
                </div>
              </div>
              {getHistory.map(
                (post, id) => (
                  <div className=" row justify-content-center">
                    <div className="historySection col-6">
                      <h5 className="historyYear">{post.year}</h5>
                      <div className="box">
                        <div className="left">
                          <div className="circles"></div>
                        </div>
                        <div className="right"></div>
                      </div>
                      <h4>{post.title}</h4>
                      <h6>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${post.description}</div>`,
                          }}
                        ></p>
                      </h6>

                      <div className="history-thumb">
                        <img src={post.photoPath} alt="" />
                      </div>
                    </div>
                  </div>
                )
                // id % 2 ? (
                //   <div className="single-history" key={post.id}>
                //     <div
                //       className="history wow animate animate__fadeInLeft"
                //       data-wow-duration="1500ms"
                //     >
                //       <div className="circle">
                //         <div className="inner"></div>
                //       </div>
                //       <div className="history-thumb">
                //         <img src={post.photoPath} alt="" />
                //       </div>
                //     </div>
                //     <div
                //       className="history wow animate animate__fadeInRight"
                //       data-wow-duration="1500ms"
                //     >
                //       <div className="circle">
                //         <div className="inner"></div>
                //       </div>
                //       <div className="history-cnt">
                //         <div className="history-cnt-inner">
                //           <span>{post.year}</span>
                //           <h4>{post.title}</h4>
                //           <p
                //             dangerouslySetInnerHTML={{
                //               __html: `<div>${post.description}</div>`,
                //             }}
                //           ></p>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // ) : (
                //   <div className="single-history" key={post.id}>
                //     <div
                //       className="history wow animate animate__fadeInLeft"
                //       data-wow-duration="1500ms"
                //     >
                //       <div className="circle">
                //         <div className="inner"></div>
                //       </div>
                //       <div className="history-cnt">
                //         <div className="history-cnt-inner">
                //           <span>{post.year}</span>
                //           <h4>{post.title}</h4>
                //           <p
                //             dangerouslySetInnerHTML={{
                //               __html: `<div>${post.description}</div>`,
                //             }}
                //           ></p>
                //         </div>
                //       </div>
                //     </div>
                //     <div
                //       className="history wow animate animate__fadeInRight"
                //       data-wow-duration="1500ms"
                //     >
                //       <div className="circle">
                //         <div className="inner"></div>
                //       </div>
                //       <div className="history-thumb">
                //         <img src={post.photoPath} alt="" />
                //       </div>
                //     </div>
                //   </div>
                // )
              )}
            </div>
          </section>

          <Testimonials />

          {/*<Newsletter /> */}
        </main>
      </div>
    </>
  );
};

export default About;
