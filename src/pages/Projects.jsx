import React, { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";


import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";


import ProjectBtn from "../components/ProjectBtn";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const Projects = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [item, setItem] = useState([]);
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
       
        if(i18n.language === 'en-US')
        {setItem( res.data.filter((newVal) => {
          return newVal.category === 'Websites';
        }
        ));}
        else if (i18n.language === 'ar')
        {setItem( res.data.filter((newVal) => {
          return newVal.category === 'مواقع الكترونية';
        }
        ));}
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

  const menuItems = [...new Set(apiData.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = apiData.filter((newVal) => {
      return newVal.category === curcat;
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
                        {t("our_projects")}
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
                src={video.video_Projects}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          <section className="projectsPage project-area sec-mar pb-5">
            <div className="container">
              <div className="title-wrap">
                <div className="sec-title ProjectSec">
                  <h3 className="n-h3">
                    <span className=""></span>
                    {t("our_projects")}
                  </h3>
                  <span>{t("project_page_case_study")}</span>
                  
                  <p>{t("project_page_paragraph")}</p>
                </div>
              </div>
              <ProjectBtn
                setItem={setItem}
                menuItems={menuItems}
                filterItem={filterItem}
                item={apiData}
              />
              <ProjectCard item={item} />
            </div>
          </section>
          {/*<Newsletter /> */}
        </main>
      </div>
    </>
  );
};

export default Projects;
