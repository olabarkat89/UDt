import React, { useEffect, useState } from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectDetails = () => {
  const [apiData, setApiData] = useState([]);
  const { projectId } = useParams();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [showModal, setShowModal] = useState(false);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetProjectDetails?languageId=${lang}&Id=${projectId}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });

  const [swiperRef, setSwiperRef] = useState(null);
  const swiper = useSwiper();

  return (
    <>
      <main className="creasoft-wrap">
        <div className="line_wrap">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>
        <section className="breadcrumbs project-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb-cnt">
                    <h1>{t("our_projects")}</h1>
                    <span>
                      <a href={`/${i18n.language}`}>{t("home")}</a>
                      <BsArrowRight className="m-1" />
                      <Link to="/projects">{t("our_projects")}</Link>
                      <BsArrowRight className="m-1" />
                      {apiData.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Body>
            <video
              src={apiData.videoUrl}
              controls
              autoPlay
              className="bread-video"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <section className="project-details sec-mar-top pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-content">
                  <div className="project-thumb row">
                    <div className="col-12">
                      <img
                        src={apiData.photoPath}
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    <div className="card-spec-custom">
                      <div className="row">
                        <div className="col-6">
                          <h1 className="ProjectName">{apiData.project}</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                          <div className="tag">
                            <a href={`/${i18n.language}/${t("projects")}`}>{apiData.category}</a>
                          </div>
                        </div>
                        
                        <div className="col-12 pt-4">                          
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${apiData.description}</div>`,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="clinet-need">
                    <h4>Client Needs</h4>
                    <p>
                      The style and theme should match the current website
                      http://www.egenslab.com but be a little more punchy. Clean
                      and crisp is preference.
                    </p>
                    <p>
                      Our landing page will have more text than other landing
                      pages (we have already written this out at
                      http://egenslab.com) as our client's need education to
                      purchase this new service.
                    </p>
                    <p>
                      The landing page should start with punchy headlines and
                      less text and as you scroll down it will become more text
                      heavy for those wanting to learn more before clicking to
                      complete the contact form.
                    </p>
                  </div> */}
                  <div className="working-process">
                    {apiData.images?.length > 0 && <h4>Working Process</h4>}

                    <div className="swiper work-process-slide">
                      <div className="swiper-wrapper">
                        <Swiper
                          spaceBetween={1}
                          slidesPerView={1}
                          navigation={{
                            nextEl: ".swiper-button-next-c",
                            prevEl: ".swiper-button-prev-c",
                          }}
                          modules={[Navigation, Pagination, A11y]}
                          className="mySwiper"
                          loop={true}
                          autoplay={true}
                          onSwiper={(swiper) => setSwiperRef(swiper)}
                        >
                          {apiData.images?.length > 0 &&
                            apiData.images.map((slide) => {
                              return (
                                <SwiperSlide key={slide.id}>
                                  <div className="swiper-slide">
                                    <div className="work-thumb">
                                      <img src={slide} alt="" />
                                      {/* <div className="label">
                        <span>01. Brainstorming</span>
                    </div> */}
                                    </div>
                                  </div>
                                </SwiperSlide>
                              );
                            })}

                          {/* <SwiperSlide>
                            <div className="swiper-slide">
                              <div className="work-thumb">
                                <img src={WorkThumbnail} alt="" />
                                <div className="label">
                                  <span>01. Brainstorming</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide">
                              <div className="work-thumb">
                                <img src={WorkThumbnail} alt="" />
                                <div className="label">
                                  <span>02. Drawing</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide> */}
                        </Swiper>
                      </div>
                      <div className="arrow">
                        <div className="swiper-button-next-c">
                          <BsArrowRight />
                        </div>
                        <div className="swiper-button-prev-c">
                          <BsArrowLeft />
                        </div>
                      </div>
                    </div>
                    {/* <p>
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Etiam eu nibh elementum, accumsan ona neque ac,
                      aliquet nunc. In eu ipsum fringilla, accumsan purus vel,
                      pellentesque risus. Vivamus vehicula nl purus at eros
                      interdum, in dignissim nulla vestibulum. Nunc sit amet
                      finibus felis, ut egestas lacus. Sedan pellentesque quis
                      magna eu vestibulum. Ut sed commodo neque. Morbi erat nis
                    </p> */}
                  </div>
                  {/* <div className="check-lunch">
                    <h4>Check & Launch</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="check">
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Aenean vitae pharetra leo. Aliquam pri.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            In aliquet, quam vitae blandit temporg.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Aenean volutpat enim vitae tincidunta.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Felis at venenatis porttitor, nunc arcua.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Maximus felis quam vitae tortor phase.
                          </li>
                          <li>
                            <i>
                              <img src={CheckImg} alt="" />
                            </i>
                            Nulla vulputate urna quis ex pellentes.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <p>
                          Interdum et malesuada fames ac ante ipsum tobal primis
                          in faucibus. Etiam eu nibh elementum, tolda accumsan
                          ona In eu ipsum fringilla, accumsan pur neque ac,
                          aliquet nunc. In eu ipsum fringilla, wolan accumsan
                          purus vel, pellentesque risus. Vivamusa purus at eros
                          interdum, in dignissim nulla Ut sedal vestibulum. Nunc
                          sit amet finibus felis, ut egestas lacus. Sedan
                          commodo neque. Morbi erat niswole pellentesque quis
                          magna eu vestibulum.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/*
              <div className="col-lg-4">
                  <div className="breadcrumb-video">
                      <img src={VideoImg} alt="" />
                      <div className="video-inner">
                        <Link
                          className="video-popup"
                          href="#"
                          onClick={() => setShowModal(true)}
                        >
                          <FaPlay />
                        </Link>
                      </div>
                  </div>
              </div>
              */}

              {/* <div className="col-lg-4">
                <div className="sidebar-widget">
                  <div className="client-box">
                    <span>Client:</span>
                    <h5>Argova Josen</h5>
                  </div>
                  <div className="client-box">
                    <span>Company:</span>
                    <h5>Egens Theme</h5>
                  </div>
                  <div className="client-box">
                    <span>Location:</span>
                    <h5>7 Lake Street, London</h5>
                  </div>
                  <div className="client-box">
                    <span>Project Type:</span>
                    <h5>Desktop Mockup</h5>
                  </div>
                  <div className="client-box">
                    <span>Duration:</span>
                    <h5>6 Month</h5>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <div className="contact-info">
                    <h3>Need help?</h3>
                    <p>
                      Interdum et malesuada fames ac ante tolds alli ipsum
                      primis in faucibus. Etiam eu nibh.
                    </p>
                    <div className="cmpy-info">
                      <div className="icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="cnt">
                        <h5>Location</h5>
                        <p>
                          168/170, Avenue 01, Old York Drive Rich Mirpur DOHS,
                          Bangladesh
                        </p>
                      </div>
                    </div>
                    <div className="cmpy-info">
                      <div className="icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="cnt">
                        <h5>Phone</h5>
                        <a href="tel:05661111985">+880 566 1111 985</a>
                        <a href="tel:06571111576">+880 657 1111 576</a>
                      </div>
                    </div>
                    <div className="cmpy-info">
                      <div className="icon">
                        <FaEnvelope />
                      </div>
                      <div className="cnt">
                        <h5>Email</h5>
                        <a href="tell:info@example.com">info@example.com</a>
                        <a href="tell:info@support.com">info@support.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="project-slider">
                <h4>Related Project</h4>
                <div className="arrow">
                  <div className="review-swiper2-button-next">
                    <BsArrowRight />
                  </div>
                  <div className="review-swiper2-button-prev">
                    <BsArrowLeft />
                  </div>
                </div>
                <div className="swiper partner-slider">
                  <div className="swiper-wrapper">
                    <Swiper
                      navigation={{
                        nextEl: ".review-swiper2-button-next",
                        prevEl: ".review-swiper2-button-prev",
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
                          slidesPerView: 1,
                          spaceBetween: 50,
                        },
                        1204: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                      modules={[Navigation, Pagination, A11y]}
                      className="mySwiper"
                      loop={true}
                      autoplay={true}
                      onSwiper={(swiper) => setSwiperRef(swiper)}
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="single-item">
                            <div className="item-img">
                              <a href="/project-details">
                                <img src={Project1} alt="" />
                              </a>
                            </div>
                            <div className="item-inner-cnt">
                              <span>Software</span>
                              <h4>Desktop Mockup</h4>
                              <div className="view-btn">
                                <a href="/project-details">view details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="single-item">
                            <div className="item-img">
                              <a href="/project-details">
                                <img src={Project2} alt="" />
                              </a>
                            </div>
                            <div className="item-inner-cnt">
                              <span>Template</span>
                              <h4>Creative Agency</h4>
                              <div className="view-btn">
                                <a href="/project-details">view details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="single-item">
                            <div className="item-img">
                              <a href="/project-details">
                                <img src={Project3} alt="" />
                              </a>
                            </div>
                            <div className="item-inner-cnt">
                              <span>App</span>
                              <h4>Mobile Crypto Wallet</h4>
                              <div className="view-btn">
                                <a href="/project-details">view details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="single-item">
                            <div className="item-img">
                              <a href="/project-details">
                                <img src={Project3} alt="" />
                              </a>
                            </div>
                            <div className="item-inner-cnt">
                              <span>App</span>
                              <h4>Mobile Crypto Wallet</h4>
                              <div className="view-btn">
                                <a href="/project-details">view details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="single-item">
                            <div className="item-img">
                              <a href="/project-details">
                                <img src={Project3} alt="" />
                              </a>
                            </div>
                            <div className="item-inner-cnt">
                              <span>App</span>
                              <h4>Mobile Crypto Wallet</h4>
                              <div className="view-btn">
                                <a href="/project-details">view details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="single-item">
                            <div className="item-img">
                              <a href="/project-details">
                                <img src={Project3} alt="" />
                              </a>
                            </div>
                            <div className="item-inner-cnt">
                              <span>App</span>
                              <h4>Mobile Crypto Wallet</h4>
                              <div className="view-btn">
                                <a href="/project-details">view details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/*<Newsletter /> */}
      </main>
    </>
  );
};

export default ProjectDetails;
