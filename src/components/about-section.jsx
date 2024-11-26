import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import axios from "axios";
import { useTranslation } from "react-i18next";
import BestAwards from "../assests/img/best-awards.svg";

const AboutSection = () => {
  const [apiData, setApiData] = useState([]);
  const [t] = useTranslation();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [getContact, setGetContact] = useState([]);

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
  
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetAboutUs?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  
  return (
    <>
      
    <div className="container">
    <div className="col-12 d-flex justify-content-center">
      <div className="sec-title layout2 custom-about-titles">
        <span>{t("about_page_get_to_know")}</span>
        <h2>{t("about_page_about_us")}</h2>
      </div>
    </div>
  </div>

  <section
    className="about-blue-bg about-area sec-mar-bottom wow animate animate__slideInUp"
    data-wow-duration="1500ms"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="why-choose-left">
            <div className="choose-banner1">
              <img
                src={apiData.aboutPhotoPath}
                alt=""
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 or-2">
          <div className="about-left py-4">
            <div className="about-custom-title"
              dangerouslySetInnerHTML={{
                __html: `<div>${apiData.missionDescription}</div>`,
              }}
            ></div>
            {/* <div className="about-custom-title"
              dangerouslySetInnerHTML={{
                __html: `<div>${apiData.visionDescription}</div>`,
              }}
            ></div> */}
            <div>
              <div className="buttons">
                <div className="cmn-btn btn-brdr">
                  <a href={`tel:${getContact.mobile}`}>
                    {t("call_us")}
                  </a>
                </div>
                <div className="cmn-btn negtive-btn">
                  <a
                    href={getContact.wurl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("company_profile")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container transY-100">
    <div className="row">
      <div className="col-12 col-md-6"></div>
      <div className="col-12 col-md-6">
        <div className="d-flex">
          <div className="company-logo">
            <img src={BestAwards} alt="" />                   
          </div>
          <h4 className="align-self-center">
          {t("about_page_best_agency")}
          <span className="color-blue">{t("about_page_since")}</span>
        </h4>
          
        </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default AboutSection;
