import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import WOW from "wowjs";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [preLoader, setPreLoader] = useState(true);
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetServices?languageId=${lang}`
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

  useEffect(() => {
    axios
      .get("https://api.udtech-sa.com/api/WebSite/GetPagesVideo")
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <section className="breadcrumbs services-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>{t("services_page_services")}</h1>
                      <span>
                        <a href={`/${i18n.language}`}>{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("services_page_services")}
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
                src={video.video_Services}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          <section className="services-grid mt-5 pb-5">
            <div className="container">
              <div className="pb-5">
                
                  <div className="servcies-head-pragraph">
                    <span className=""></span>
                    <span className="services-title">{t("services_page_our_solutions")}</span>
                  </div>                  
                  
                  <h4 className="pt-4 services-title-h4">{t("services_page_services")}</h4>
                  <p className="services-title-p">{t("services_page_paragraph")}</p>
                
              </div>
              <div className="row g-4 pt-4">
                {apiData.map((e) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                      data-wow-duration="1500ms"
                      key={e.id}
                    >
                      <div className="single-service h-100">                        
                        <div className="icon">
                          <img src={e.photoPath} alt="" />
                        </div>
                        <h4>{e.title}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${e.description}</div>`,
                          }}
                        ></p>
                        <div className="read-btn text-center">
                     
                          <a href={`/${i18n.language}/${t("service-details")}/${e.id}`}>
                            {t("services_page_read_more")}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/*<Testimonials />*/}
          {/*<Newsletter /> */}
        </main>
      </div>
    </>
  );
};

export default Services;
