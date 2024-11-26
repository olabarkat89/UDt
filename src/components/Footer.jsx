import React, { useEffect, useState } from "react";
import Logo from "../assests/img/logo.svg";
import LogoWhite from "../assests/img/logo-white.svg";
import {
  FaTwitter,
  FaInstagram,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGoogleDrive,
} from "react-icons/fa";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import CallIconW from "../assests/img/wcall.svg";
import SmsIconW from "../assests/img/wsms.svg";
import LocationIconW from "../assests/img/wlocation.svg";

const Footer = () => {
  const [t, i18n] = useTranslation();
  const [apiData, setApiData] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`
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
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href={`/${i18n.language}`}>
                      <img src={LogoWhite} alt="" />
                    </a>
                  </div>
                  <p>{t("footer_paragraph1")}</p>
                  <ul className="social-media-icons p-0">
                    <li>
                      <a href={apiData.lurl} target="_blank" rel="noreferrer">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.turl} target="_blank" rel="noreferrer">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.wurl} target="_blank" rel="noreferrer">
                        <FaGoogleDrive />
                      </a>
                    </li>
                    <li>
                      <a href={apiData.iurl} target="_blank" rel="noreferrer">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4">
                <div className="footer-widget">
                <h4>{t("footer_our_quick_links")}</h4>
                  <ul className="footer-menu p-0">
                  <ul className="footer-menu p-0">
                   

                    <li>
                      <a href={`/${i18n.language}/${t("clients")}`}> {t("clients")}</a>
                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("website")}`}> {t("websites")}</a>


                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("mobile_app")}`}> {t("mobile_apps")}</a>

                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("electronic_invoic")}`}> {t("electronic_invoice")}</a>

                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("technologie")}`}> {t("technologies")}</a>

                    </li>
                  

                  </ul>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2">
                <div className="footer-widget">
                <h4>{t("footer_Other")}</h4>
                  <ul className="footer-menu p-0">
                    <li>
                      <a href={`/${i18n.language}/${t("about")}`}>{t("about_us")}</a>
                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("service")}`}>{t("services")}</a>
                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("projects")}`}>{t("our_projects")}</a>
                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("blogg")}`}>{t("blog")}</a>
                    </li>
                    <li>
                      <a href={`/${i18n.language}/${t("contact")}`}>{t("contact_us")}</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>{t("footer_our_contacts")}</h4>
                  <div className="number">
                    <div className="num-icon">
                      <img src={CallIconW} alt="" />
                    </div>
                    <div className="phone">
                      <a href={`tel:${apiData.mobile}`}>{apiData.mobile}</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <img src={SmsIconW} alt="" />
                    </div>
                    <div className="email">
                      <a href={`mailto:${apiData.email}`}>{apiData.email}</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <img src={LocationIconW} alt="" />
                    </div>
                    <p>{apiData.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="copy-txt text-center">
                  <span>
                    {t("copyright")} 2023 <b>UD-Tech Software Company</b>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                {/* 
                <ul className="footer-bottom-menu">
                  <li>
                    <a href="/">{t("footer_privacy")}</a>
                  </li>
                  <li>
                    <a href="/">{t("footer_terms")}</a>
                  </li>
                </ul>
              */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="whatsapp-button EN">
        <ul className="social-media-icons">
          <li>
            <a href={`https://wa.me/${apiData.mobile}`}>
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>

      {/*<!-- Google Tag Manager (noscript) -->*/}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KXBF57L"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      {/*<!-- End Google Tag Manager (noscript) -->*/}
    </>
  );
};

export default Footer;
