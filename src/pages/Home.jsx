import React, { useState, useEffect } from "react";

import slideOne from "../assests/img/video/UD-Tech_WebsiteSliders_230812_Slider1-min.jpg";
import slideOneMob from "../assests/img/video/UD-Tech_WebsiteSliders_230812_Slider1-Mobile-min.jpg";
import slideTwo from "../assests/img/video/UD-Tech_WebsiteSliders_230812_Slider2-min.jpg";
import slideTwoMob from "../assests/img/video/UD-Tech_WebsiteSliders_230812_Slider2-Mobile-min.jpg";
import slideThree from "../assests/img/video/UD-Tech_WebsiteSliders_230812_Slider3-min.jpg";
import slideThreeMob from "../assests/img/video/UD-Tech_WebsiteSliders_230812_Slider3-Mobile-min.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import "swiper/css";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import { useMotionValue } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ClientsSection from "../components/ClientsSection";
import AboutSection from "../components/about-section";

const Home = () => {
  const [t,i18n] = useTranslation();

  const [servicesApiData, setServicesApiData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [getClients, setGetClients] = useState([]);
  const [getBlogsHome, setGetBlogsHome] = useState([]);
  const [getContact, setGetcontact] = useState([]);
  const [preLoader, setPreLoader] = useState(true);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`
      )
      .then((res) => {
        setGetcontact(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetClients?languageId=${lang}`
      )
      .then((res) => {
        setGetClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    axios
      .get(`https://api.udtech-sa.com/api/WebSite/GetBlogs?languageId=${lang}`)
      .then((res) => {
        setGetBlogsHome(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetServices?languageId=${lang}`
      )
      .then((res) => {
        setServicesApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetAboutUs?languageId=${lang}`
      )
      .then((res) => {
        setAboutData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
      )
      .then((res) => {
        setGetProjects(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  const [getProjects, setGetProjects] = useState([]);
  const [item, setItem] = useState([]);
  const menuItems = [...new Set(getProjects.map((Val) => Val.category))];
  const [swiperRef, setSwiperRef] = useState(null);
  const filterItem = (curcat) => {
    const newItem = getProjects.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

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

  // cursor style
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e) => {};
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
  });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
  });
  return (
    <>
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
      <main className="creasoft-wrap layout2">
        <div className="line_wrap layout2">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>
        <section className="hero-area">
          <div className="verticale-social">
            <ul className="vertical-media">
              <li>
                <a href={getContact.turl} target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href={getContact.iurl} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={getContact.lurl} target="_blank" rel="noreferrer">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="hero-wrapper">
            <Swiper
              className="mySwiper-c"
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}            
            >
              <SwiperSlide>                
                <img id="bigScreen"  src={slideOne} alt="" />
                <img id="smallScreen" src={slideOneMob} alt="" />
              </SwiperSlide>
              <SwiperSlide>                
                <img id="bigScreen" src={slideTwo} alt="" />
                <img id="smallScreen" src={slideTwoMob} alt="" />
              </SwiperSlide>
              <SwiperSlide>              
                <img id="bigScreen" src={slideThree} alt="" />
                <img id="smallScreen"  src={slideThreeMob} alt="" />
              </SwiperSlide>
              {/*<div>
                <SwiperSlide>
                  
                </SwiperSlide>              
                <SwiperSlide>
                  
                </SwiperSlide>
                <SwiperSlide>
                                             
                </SwiperSlide>
              </div>*/}
              
            </Swiper>
            {/* <div className="container">              
              <video
                className="second-slide"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
              >
                <source
                  src={IntroVideo}
                  type='video/webm; codecs="vp8, vorbis"'
                />
              </video>
              <video
                id="smallScreen"
                className="second-slide"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
              >
                <source
                  src={IntroVideoMob}
                  type='video/webm; codecs="vp8, vorbis"'
                />
              </video>
            </div>*/}
          </div>
        </section>
        <div>
          <section className="services-area layout2 sec-mar">
            <div className="container">
              <div
                className="title-wrap wow animate animate__fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="sec-title white featureHead">
                  <h5>{t("services_page_our_solutions")}</h5>
                  <h3>
                    <span className=""></span>
                    {t("services_page_services")}
                  </h3>

                  <p className="p" data-aos="flip-left">
                    {t("services_page_home_paragraph")}
                  </p>
                  {/* <div className="-partnerslider-navi.gator d-flex">
                    <div className="swiper-button-prev-c" onClick={prevHandler}>
                      <BsChevronLeft />
                    </div>
                    <div className="swiper-button-next-c" onClick={nextHandler}>
                      <BsChevronRight />
                    </div>
                  </div> */}
                </div>
              </div>
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="homeSwiper"
                centeredSlides={true}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    spaceBetween: 50,
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1204: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {servicesApiData.map((service) => {
                  return (
                    <SwiperSlide key={service.id}>
                      <div
                        className="swiper-slide wow animate animate__fadeInUp "
                        data-wow-duration="1500ms"
                        style={{ height: "250px" }}
                      >
                        <div
                          className="single-service h-100"
                          style={{ height: "100%" }}
                        >
                          <div className="icon" style={{ height: "50%" }}>
                            <img src={service.photoPath} alt={service.title} />
                          </div>
                          <h4>{service.title}</h4>
                          <p
                            className="limit-words limit-words-20"
                            dangerouslySetInnerHTML={{
                              __html: `<div>${service.description}</div>`,
                            }}
                          ></p>
                          <div className="read-btn text-center">
                            <a href={`/service-details/${service.id}`}>
                              {t("services_page_read_more")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="buttons mt-3">
                    <div className="cmn-btn negtive-btn">
                      <a href="/services">{t("services_all")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* About section */}
        <AboutSection />

        {/* Features section */}
        <Features />

        {/* projects */}
        <section className="project-area sec-mar">
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title white featureHead">
                <h5>{t("project_page_case_study")}</h5>
                <h3>
                  <span className=""></span>
                  {t("project_page_project")}
                </h3>
                <p className="p">{t("home_project_paragraph")}</p>
              </div>
            </div>
            {/*
              <ProjectBtn
                setItem={setItem}
                menuItems={menuItems}
                filterItem={filterItem}
                item={getProjects}
              />
              <ProjectCard item={item} />

              {getProjects.slice(3).map((project) => {
                return ( <ProjectCard item={item} />);
              })}
            
            */}

            <div className="row project-items">
              {getProjects.slice(0, 6).map((project) => {
                return (
                  <div
                    className="col-6 col-md-6 col-lg-4 single-item d-flex justify-content-center align-items-center wow animate animate__fadeInUp "
                    data-wow-duration="500ms"
                    key={project.id}
                  >
                    <div className="item-img">
                      <a href={`/project-details/${project.id}`}>
                        <img
                          className="maxH-300"
                          src={project.photoPath}
                          alt={project.title}
                        />
                      </a>
                    </div>
                    <a
                   
                      href={`/${i18n.language}/${t("project-details")}/${project.id}`}
                      className="cursorP"
                    >
                      <div className="item-inner-cnt">
                        <h4>{project.project}</h4>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="buttons mt-3">
                    <div className="cmn-btn">
                      <a href= {`/${i18n.language}/${t("projects")}`}>{t("projects_all")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* partners   */}
        <ClientsSection />
        {/* testimonials */}
        <Testimonials />
        <section className="blog-area py-5">
          <div className="container">
            <div
              className="title-wrap wow animate animate__fadeInUp"
              data-wow-duration="1500ms"
            >
              <div className="sec-title white featureHead">
                <h5>{t("home_blog_all")}</h5>
                <h3>
                  <span className=""></span>
                  {t("home_blog_latest")}
                </h3>
                <p className="p">{t("home_blog_paragraph")}</p>
              </div>
            </div>
            <div className="row gy-4">
              {getBlogsHome.slice(0, 3).map((blog) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                    data-wow-duration="1500ms"
                    key={blog.id}
                  >
                    <div className="single-blog h-100">
                      <div className="blog-thumb">
                      
                        <a href={`/${i18n.language}/${t("blog-details")}/${blog.id}`}>
                          <img src={blog.photoPath} alt="" />
                        </a>
                        {/*
                        <div className="tag">
                          <a href="/projects">{blog.category}</a>
                        </div>
                      */}
                      </div>
                      <div className="blog-inner">
                        {/*
                        <div className="author-date">                          
                          <a href="/">
                            {t("by")}, {blog.blogAuthor}
                          </a>
                          <a href="/">{blog.blogDate}</a>                         
                        </div>
                         */}
                        <h4>
                   
                          <a href={`/${i18n.language}/${t("blog-details")}/${blog.id}`}>{blog.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="buttons mt-3">
                    <div className="cmn-btn negtive-btn">
                      <a href=     {`/${i18n.language}/${t("blogg")}`}>{t("read_more")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<Newsletter /> */}
      </main>
    </>
  );
};

export default Home;
