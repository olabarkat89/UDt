import React, { useEffect, useState } from "react";

import WOW from "wowjs";
import { BsArrowRight } from "react-icons/bs";

import ProjectBtn from "../components/ProjectBtn";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "../components/Technologies";
import ClientsSection from "../components/ClientsSection";
import { Helmet } from 'react-helmet';
const MobileApps = () => {
  const [t,i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [item, setItem] = useState([]);
  const [getClients, setGetClients] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [getContact, setGetContact] = useState([]);

  /* API From Mobile Page */
  /*
        useEffect(() => {
        axios
          .get(
            `https://api.udtech-sa.com/api/WebSite/GetMobileApps?languageId=${lang}`
          )
          .then((res) => {
            setApiData(res.data);
            setItem(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [lang]);
  */

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
        setItem(res.data);
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
      .get("https://api.udtech-sa.com/api/WebSite/GetPagesVideo")
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`,
        {
          params: {
            languageId: lang,
            // languageId: 1,
          },
        }
      )
      .then((res) => {
        setGetContact(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const menuItems = [...new Set(apiData.map((Val) => Val.category))];
  // const [swiperRef, setSwiperRef] = useState(null);
  const filterItem = (curcat) => {
    const newItem = apiData.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });


  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 500);
  }, []);

  return (
    <>
    
      <div>
      <Helmet>
        <title>تصميم وبرمجة أفضل تطبيقات الجوال بالسعودية | شركة UD-Tech</title>
        <meta name="description" content="تصميم وبرمجة أفضل تطبيقات الجوال بالسعودية. شركة UD-Tech تقدم خدمات تطوير التطبيقات بجودة عالية وأمان." />
        <meta name="keywords" content="UD-Tech, برمجة_المواقع_و_التطبيقات" />

      </Helmet>
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
      </div>
      <main className="creasoft-wrap">
        <div className="line_wrap">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>
        <section className="breadcrumbs mobile-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb-cnt">
                    <h1>{t("mobile_apps")}</h1>
                    <span>
                      <a href= {`/${i18n.language}`}>{t("home")}</a>
                      <BsArrowRight className="m-1" />
                      {t("mobile_apps")}
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
              src={video.video_MobileApps}
              controls
              autoPlay
              className="bread-video"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <section className="projectsPage project-area sec-mar ">
          <div className="container">
            
            <div className="wow animate slideInUp" data-wow-duration="1500ms">
              <div className="title-wrap">
                <div className="sec-title">
                  <h2>{t("mobileApps_page_title1")}</h2>
                  <p className="mt-3">{t("mobileApps_page_paragraph1")}</p>
                  <p className="mt-3">{t("mobileApps_page_paragraph12")}</p>
                  <p className="mt-3">{t("mobileApps_page_paragraph13")}</p>
                </div>
              </div>
              {/*<MobileAppBtn
                setItem={setItem}
                menuItems={menuItems}
                filterItem={filterItem}
                item={apiData}
              />
              <MobileAppCard item={item} />*/}
               <div className="title-wrap pt-5">
                                    <div className="sec-title white featureHead">
                                        {/* <h5>{t("project_page_case_study")}</h5> */}
                                        <h3>
                                            <span className=""></span>
                                            {t("project_page_project")}
                                        </h3>
                                        <p className="p">{t("home_project_paragraph")}</p>
                                    </div>
                                </div>
              <ProjectBtn
                setItem={setItem}
                menuItems={menuItems}
                filterItem={filterItem}
                item={apiData}
              />
              
              <ProjectCard item={item} />
              <div className="row text-center">
                <div className="MobApp buttons">
                  <div className="cmn-btn">
                    <a href= {`/${i18n.language}/${t("contact")}`}>{t("mobileApps_page_send_mail")}</a>
                  </div>
                  <div className="cmn-btn negtive-btn">
                    <a href={getContact.wurl} target="_blank" rel="noreferrer">
                      {t("company_profile")}
                    </a>
                  </div>
                  <div className="cmn-btn">
                    <a href={`tel:${getContact.mobile}`}>{t("call_us")}</a>
                  </div>
                </div>
              </div>
            </div>
            <Technologies />
          
          </div>
        </section>

        <ClientsSection />
        {/*<Newsletter /> */}
      </main>
    </>
  );
};

export default MobileApps;
