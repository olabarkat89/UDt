
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";

import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Clients = () => {
  const [apiData, setApiData] = useState([]);
  const [t, i18n] = useTranslation();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [preLoader, setPreLoader] = useState(true);
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetClients?languageId=${lang}`
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
          <section className="breadcrumbs client-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>{t("clients")}</h1>
                      <span>
                        <a href={`/${i18n.language}`}>{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("clients")}
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
                src={video.video_Clients}
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
            className="why-choose sec-mar pb-5 wow animate animate__fadeIn"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div id="clientsSection" className="row g-4 ">
                {apiData.map((e) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3 single-item graphic ui" key={e.id}>
                      <div className="item-img">                        
                          <img src={e.photoPath} alt="" />                        
                      </div>
                      <div className="item-inner-cnt">
                        <h4>{e.name}</h4>
                        <div className="view-btn">
                          {/* <a href="/">View Website</a> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/*<Newsletter /> */}
        </main>
      </div>
    </>
  );
};

export default Clients;
