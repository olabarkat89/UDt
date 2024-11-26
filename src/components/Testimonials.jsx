import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const [apiData, setApiData] = useState([]);
  const [t, i18n] = useTranslation();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetTestimonials?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  function starsCounter(stars) {
    const rows = [];
    for (let i = 0; i < stars; i++) {
      rows.push(
        <a href={`/${i18n.language}`}>
          <FaStar />
        </a>
      );
    }
    return rows;
  }

  const [swiperRef, setSwiperRef] = useState(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <section className="testimonial-area sec-mar-top">
        <div className="container-fluid p-0">
          <div className="title-wrap">
            <div className="sec-title white featureHead">
              <h5>{t("testimonial_title")}</h5>
              <h3>
                <span className=""></span>
                {t("testimonial_client_say")}
                </h3>
              
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-12 bg-light-blue d-flex justfiy-content-center align-items-center ps-5 pe-5">
            <div className="quote">
                            <FaQuoteRight />
                          </div>
              <h4>{t("testimonial_paragraph")}</h4>
            </div>
            <div className="col-md-9 col-12 bg-gridiant-blue">
            <div className="swiper testimonial-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.9}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              scrollbar={{ draggable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
              }}
              onSwiper={(swiper) => setSwiperRef(swiper)}
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
                  slidesPerView: 1.7,
                  spaceBetween: 50,
                },
              }}
            >
              {apiData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    {({ isActive }) => (
                      <div
                        className={
                          isActive
                            ? "swiper-slide swiper-slide-active"
                            : "swiper-slide"
                        }
                      >
                        <div className="single-testimonial">
                          
                          <div className="reviewer row">
                            <div className="col-md-2 col-4">
                              <img src={testimonial.photoPath} alt="" />
                            </div>
                            <div className="col-md-8 col-8">
                              <h6 className="pt-3 h6">
                                {testimonial.name}                              
                              </h6>                          
                              <h6 className="h5">{testimonial.category}</h6>
                            </div>
                            
                          </div>
                          
                          
                          <div className="stars">
                            {/* ToDo: map stars */}
                            {starsCounter(testimonial.starsCount)}
                          </div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `<div>${testimonial.comment}</div>`,
                            }}
                          ></p>
                         
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>            
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Testimonials;
