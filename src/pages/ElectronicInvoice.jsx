import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import Newsletter from "../components/Newsletter";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ElectronicImg from "../assests/img/electronic-invoice-img.png";

const ElectronicInvoice = () => {
  const [getInvoice, setGetInvoice] = useState([]);
  const [t, i18n] = useTranslation();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetElectronicInvoice?languageId=${lang}`
      )
      .then((res) => {
        setGetInvoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

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
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  const [preLoader, setPreLoader] = useState(true);

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
          <section className="breadcrumbs electronic-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>{t("electronic_invoice")}</h1>
                      <span>
                        <a href="/">{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("electronic_invoice")}
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
                src={video.video_Electronic}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          <section
            className="why-choose paragraph mt-5 wow animate animate__fadeIn"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 mb-5">
                  <img className="m-0 pe-4 ps-4" src={ElectronicImg} alt="" />
                </div>
                <div className="d-flex align-items-center col-12 col-md-6 mb-5">
                  {getInvoice.slice(0, 1).map((first) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                        data-wow-duration="1500ms"
                        key={first.id}
                      >
                        <h3>{first.title}</h3>

                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${first.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(1, 2).map((second) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                        data-wow-duration="1500ms"
                        key={second.id}
                      >
                        <h3>{second.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${second.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>
                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(2, 3).map((third) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                        data-wow-duration="1500ms"
                        key={third.id}
                      >
                        <h3>{third.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${third.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(3, 4).map((fourth) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                        data-wow-duration="1500ms"
                        key={fourth.id}
                      >
                        <h3>{fourth.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${fourth.description}</div>`,
                          }}
                        ></p>
                        {/*<img
                          className="m-0 border"
                          src={third.photoPath}
                          alt=""
                        />*/}
                      </div>
                    );
                  })}
                </div>
                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(6, 7).map((seventh) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                        data-wow-duration="1500ms"
                        key={seventh.id}
                      >
                        <h3>{seventh.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${seventh.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(4, 5).map((fifth) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                        data-wow-duration="1500ms"
                        key={fifth.id}
                      >
                        <h3>{fifth.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${fifth.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>
                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(5, 6).map((sixth) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                        data-wow-duration="1500ms"
                        key={sixth.id}
                      >
                        <h3>{sixth.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${sixth.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(7, 8).map((eighth) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                        data-wow-duration="1500ms"
                        key={eighth.id}
                      >
                        <h3>{eighth.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${eighth.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>
                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(8, 9).map((ninth) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInRight"
                        data-wow-duration="1500ms"
                        key={ninth.id}
                      >
                        <h3>{ninth.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${ninth.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12 col-md-6 my-5">
                  {getInvoice.slice(9, 10).map((tenth) => {
                    return (
                      <div
                        className="electrSec py-2 pe-4 ps-4 wow animate animate__fadeInLeft"
                        data-wow-duration="1500ms"
                        key={tenth.id}
                      >
                        <h3>{tenth.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `<div>${tenth.description}</div>`,
                          }}
                        ></p>
                      </div>
                    );
                  })}
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

export default ElectronicInvoice;
