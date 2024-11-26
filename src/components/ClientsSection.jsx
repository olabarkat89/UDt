import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

import { useTranslation } from "react-i18next";
import i18next from "i18next";


const ClientsSection = () => {
  const [t, i18n] = useTranslation();

  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [getClients, setGetClients] = useState([]);
  
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  const [swiperRef, setSwiperRef] = useState(null);

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

  return (
    <>
    <section className="our-partner">
          <div className="container">
          <div className="row pt-5">
            <div className="col-6 client-sec">
              <h6 className="clients-h6">
              {t("about_page_satisfied_customers")}
              </h6>
              <span className=""></span>
              <h4 className="clients-h4">                
                {t("mobileApps_page_our_partners")}
                
              </h4>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center justify-content-end">
                <div className="buttons mt-auto">
                  <div className="cmn-btn trans-btn">                      
                    <a href={`/${i18n.language}/${t("clients")}`}>{t("clients_all")}</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
            <div className="row align-items-center mb-5 pb-5">
              <div className="col-lg-3">
                <div className="sec-title white layout2">                  
                  <div className="-partnerslider-navigator d-flex">
                    <div className="swiper-button-prev-c" onClick={prevHandler}>
                      <BsChevronLeft />
                    </div>
                    <div className="swiper-button-next-c" onClick={nextHandler}>
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div id="clientsSection" className="col-lg-9">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={4.5}
                  centeredSlides={true}
                  navigation={false}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                  scrollbar={{ draggable: true }}
                  loop={true}
                  autoplay={{                    
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  // autoplay={true}
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
                      slidesPerView: 2.7,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {getClients.map((client) => {
                    return (
                      <div className="swiper partner-slider" key={client.id}>
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <div className="single-partner single-item graphic ui">
                              <div className="item-img">                                
                                  <img src={client.photoPath} alt="" />                                
                              </div>
                              <div className="item-inner-cnt">
                                <h4 className="d-flex">{client.name}</h4>
                                <div className="view-btn">
                                  {/* <a href="/">View Website</a> */}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default ClientsSection;
