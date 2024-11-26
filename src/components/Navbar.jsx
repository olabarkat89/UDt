import React, { useEffect, useState } from "react";
import "../assests/css/style.css";
import { Link, useLocation } from "react-router-dom";
import LogoDark from "../assests/img/logo.svg";
import arIcon from "../assests/img/sw-ar.svg";
import enIcon from "../assests/img/sw-en.svg";
import { BsPlus } from "react-icons/bs";
import { useTranslation } from "react-i18next";
// import { FaGlobe } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

import axios from "axios";
import ScrollToTop from "./ScrollToTop";


const Navbar = () => {  
  const [t, i18n] = useTranslation();

  // navbar scroll
  const [onScroll, setOnScroll] = useState(false);

  const addStickyClass = () => {
    if (window.scrollY >= 200) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };
  window.addEventListener("scroll", addStickyClass);
  // active class
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [addClass, setAddClass] = useState(false);
  const AddClassSlide = () => {
    setAddClass(!addClass);
  };

  // useEffect(() => {
  //   window.location.reload()
  // }, [userLang]);

  // const [isChecked, setIsChecked] = useState(false);
  // const checkbox = localStorage.getItem('imageSrc') === isChecked ? enIcon : arIcon;

  const [imageSrc, setImageSrc] = useState(arIcon);
  
  useEffect(() => {
    // Check if the new image source is stored in browser storage    
    const storedImageSrc = localStorage.getItem('newImageSrc');
    if (storedImageSrc) {
      setImageSrc(storedImageSrc);
      // Clear the stored image source to prevent it from being used on subsequent page loads
      localStorage.removeItem('newImageSrc');
    }
  }, []);

  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const toggleText = () => {
  
    if (i18n.language === "en-US") {
      localStorage.setItem('newImageSrc', enIcon);
      // window.location('/ar')
      window.location.assign('/ar')
      // window.location.reload();      
      i18n.changeLanguage("ar");
     
      // setIsChecked(!isChecked);
    } else if (i18n.language === "ar") {
      localStorage.setItem('newImageSrc', arIcon);
      window.location.assign('/en-US')
      // window.location.reload();
      i18n.changeLanguage("en-US");
      
      // setIsChecked(isChecked);
    }
  };
console.log("testtt",i18n.language )
  // const toggleImg =() => {
  //   if (i18n.language === "en-US") {
  //     <img src={arIcon} alt="Switch Language" />
  //   }
  //   else if (i18n.language === "ar"){

  //   }
  // };

  const [getContact, setGetContact] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`
      )
      .then((res) => {
        setGetContact(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetServices?languageId=${lang}`
      )
      .then((res) => {
        setApiData(res.data);
        console.log(res.data ,"result")
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  return (
    <div
      className={
        window.localStorage.i18nextLng === "en-US"
          ? "directionEN"
          : "directionAR"
      }
    >
      <ScrollToTop />
      <header
        className={
          onScroll
            ? "header-area position_top sticky"
            : "header-area position_top"
        }
      >
        <div className="site-logo">
          <div className="logo">
            <Link to={`/${i18n.language}`}>
              <img src={LogoDark} alt="UD-Tech" />
            </Link>
          </div>
        </div>
        <div className="main-menu">
          <nav className={addClass ? "main-nav slidenav" : "main-nav"}>
            <div className="mobile-menu-logo">
              {/* <Link to="/">
                <img src={LogoDark} alt="Sd" />
              </Link> */}
              <div className="remove">
                <BsPlus onClick={AddClassSlide} />
              </div>
            </div>
            <ul onClick={AddClassSlide}>
              <li>
                <Link to={`/${i18n.language}`} className={url === `/${i18n.language}`? " active" : ""}  >
                  {t("home")}
                </Link>
              </li>
              <li>
              {/* {url === `/${i18n.language}/${t("about")}` */}
                <Link to={`/${i18n.language}/${t("about")}`} className ={url === `/${i18n.language}/${t("about")}`? " active" : ""}  >
                  {t("about_us")}
                </Link>
              </li>
              <li>
              <Link to={`/${i18n.language}/${t("service")}`} className={url === `/${i18n.language}/${t("service")}`? " active" : ""}
                  >
                    {t("services")}
                  </Link>
              </li>
              {/*<li>
                <Link
                  to="/services"
                  className={url === "/services" ? " active" : ""}
                >
                  {t("services")}
                </Link>
            </li>*/}

              {/* <Dropdown>
                <Dropdown.Toggle variant=" primary" id="dropdown-basic">
                  <Link to={`/${i18n.language}/${t("service")}`} className={url === `/${i18n.language}/${t("service")}`? " active" : ""}
                  >
                    {t("services")}
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {apiData.map((e) => {
                    return (
                      <li className="list-service" key={e.id}>
                        <Dropdown.Item href={`/${i18n.language}/${t("service")}/`}>
                          {e.title}
                        </Dropdown.Item>
                      </li>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown> */}

              <li>
                <Link
                  to={`/${i18n.language}/${t("projects")}`} className={url === `/${i18n.language}/${t("projects")}`? " active" : ""}
                >
                  {t("our_projects")}
                </Link>
              </li>
              <li>
                <Link
                to={`/${i18n.language}/${t("clients")}`} className={url === `/${i18n.language}/${t("clients")}`? " active" : ""}
                >
                  {t("clients")}
                </Link>
              </li>
              <li>
                <Link
                to={`/${i18n.language}/${t("website")}`} className={url === `/${i18n.language}/${t("website")}` ? " active" : ""}
                >
                  {t("websites")}
                </Link>
              </li>
              <li>
                <Link
                 to={`/${i18n.language}/${t("mobile_app")}`} className={url === `/${i18n.language}/${t("mobile_app")}` ? " active" : ""}
                >
                  {t("mobile_apps")}
                </Link>
              </li>
              <li>
                <Link
                   to={`/${i18n.language}/${t("electronic_invoic")}`} className={url === `/${i18n.language}/${t("electronic_invoic")}`? " active" : ""}
                >
                  {t("electronic_invoice")}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${i18n.language}/${t("technologie")}`} className={url === `/${i18n.language}/${t("technologie")}` ? " active" : ""}
                >
                  {t("technologies")}
                </Link>
              </li>
              <li>
                <Link to={`/${i18n.language}/${t("blogg")}`} className={url === `/${i18n.language}/${t("blogg")}` ? " active" : ""}>
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${i18n.language}/${t("contact")}`} className={url === `/${i18n.language}/${t("contact")}` ? " active" : ""}
                >
                  {t("contact_us")}
                </Link>
              </li>
              <li></li>
              {/*
              <li>/
                {i18n.language === "en-US" && (
                  <Link
                    onClick={() => {
                      window.location.reload();
                      i18n.changeLanguage("ar");
                    }}
                  >
                    العربية
                  </Link>
                )}
              </li>
              <li>
                {i18n.language === "ar" && (
                  <Link
                    onClick={() => {
                      window.location.reload();
                      i18n.changeLanguage("en-US");
                    }}
                  >
                    English
                  </Link>
                )}
              </li>
              */}
            </ul>
            <div className="get-qoute spec-display d-flex justify-content-center d-lg-none d-block">
              <ul className="w-100">
                <li>
                  <a href={`tel:${getContact.mobile}`}>{t("call_us")}</a>
                </li>
                <li>
                  <a href={getContact.wurl} target="_blank" rel="noreferrer">
                    {t("company_profile")}
                  </a>
                </li>
                <li>
                  <a onClick={toggleText}>
                    <img height="17" src={imageSrc} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              {/*<div className="line-1"></div>
              <div className="line-2"></div>
              <Link to="/contact"> {t("call_us")}</Link>*/}
              <a href={`tel:${getContact.mobile}`}>{t("call_us")}</a>
            </div>
            <div className="cmn-btn negtive-btn">
              {/*<Link to="/about">{t("company_profile")}</Link>*/}
              <a href={getContact.wurl} target="_blank" rel="noreferrer">
                {t("company_profile")}
              </a>
            </div>
            <div className="cmn-btn grey-btn">
              <a onClick={toggleText}>
                <img height="17" src={imageSrc} />
              </a>
            </div>
          </div>
          <div className="mobile-menu" onClick={AddClassSlide}>
            <div to="" className="cross-btn">
              <span className="cross-top"></span>
              <span className="cross-middle"></span>
              <span className="cross-bottom"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
