import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

import WOW from "wowjs";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

import axios from "axios";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "../components/Technologies";

const TechnologiesImplmentations = () => {
  const [t,i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const [item, setItem] = useState([]);
  const [getClients, setGetClients] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);  
  const [getContact, setGetContact] = useState([]);

 
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
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  const [swiperRef, setSwiperRef] = useState(null);

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
                    <h1>{t("technologies")}</h1>
                    <span>
                      <a href={`/${i18n.language}`}>{t("home")}</a>
                      <BsArrowRight className="m-1" />
                      {t("technologies")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
        <section className="projectsPage project-area ">
          <div className="container">
           
            <Technologies />
          
          </div>
        </section>
      
      </main>
    </>
  );
};

export default TechnologiesImplmentations;
