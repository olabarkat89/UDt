import React, { useEffect, useState } from "react";

import CallCenter from "../assests/img/contact-min.png";
import { BsArrowRight } from "react-icons/bs";
import {
  FaGoogleDrive,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "../components/Newsletter";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CallIcon from "../assests/img/call.svg";
import SmsIcon from "../assests/img/sms.svg";
import LocationIcon from "../assests/img/location.svg";

const ContactUs = () => {
  
  const [t,i18n] = useTranslation();
  const [preLoader, setPreLoader] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [apiData, setApiData] = useState([]);
  const [messagesSubmit, setMessageSubmit] = useState("");
  const [errorMessagesSubmit, setErrorMessageSubmit] = useState("");
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const PostMessage = (e) => {
    e.preventDefault();
    axios
      .post("https://api.udtech-sa.com/api/WebSite/SendContactUs", {
        name,
        email,
        subject,
        message,
      })
      .then((response) => {
        setMessageSubmit(response.data);
      })
      .catch((err) => {
        setErrorMessageSubmit(err.response.data.message);
      });
  };

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
  }, [apiData, lang]);
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
          <section className="breadcrumbs contact-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>{t("contact_us")}</h1>
                      <span>
                        <a href={`/${i18n.language}`}>{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("contact_us")}
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
                src={video.video_Contacts}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <section className="contact-area py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-7">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        className="brdr-rdis-20"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3503421209366!2d39.17810381421185!3d21.57224367437963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d19c274486c1%3A0x3bf6242bc980369c!2sUD-Tech%20United%20Diamond%20Technology!5e0!3m2!1sen!2seg!4v1677317107987!5m2!1sen!2seg"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="contact-left">
                    <div className="sec-title layout2">
                      <h6>{t("contact_page_contact_us")}</h6>
                    </div>
                    <div className="informations">
                      <h6 className="contact-h6">{t("contact_us")}</h6>
                      <div className="single-info">
                        <div className="pe-3">
                          <img src={CallIcon} alt="" />
                        </div>
                        <div className="info arabicMob">
                        <a href={`tel:${apiData.mobile}`}>{apiData.mobile}</a>
                          {/* <Link href={`tel:${apiData.mobile}`}>
                            {apiData.mobile}
                          </Link> */}
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="ps-3">
                          <img src={SmsIcon} alt="" />
                        </div>
                        <div className="info">
                          <Link to={`mailto:${apiData.email}`}>
                            {apiData.email}
                          </Link>
                        </div>
                      </div>
                      <div className="single-info">
                        <div className="ps-3">
                          <img src={LocationIcon} alt="" />
                        </div>
                        <div className="info">
                          <p>{apiData.address}</p>
                        </div>
                      </div>
                    </div>
                    <ul className="social-follow pt-5">
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
              </div>
              <hr className="mt-5 custom-divider" />

              <div className="getin-touch">
                <div className="row">
                  <div className="col-12">
                    <div className="call-banner">
                      <img src={CallCenter} alt="" />
                    </div>
                  </div>
                  <div className="col-12 px-3 px-md-5">
                    <div className="contact-form">
                      <h3>{t("contact_page_questions")}</h3>
                      <form method="post" onSubmit={PostMessage}>
                        <div className="row">
                          <div className="col-12 d-flex justify-content-center">
                            <input
                              type="text"
                              placeholder={t("contact_page_enter_name")}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="col-12 d-flex justify-content-center">
                            <input
                              className="text-AR"
                              type="email"
                              placeholder={t("contact_page_email")}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="col-12 d-flex justify-content-center">
                            <input
                              type="text"
                              placeholder={t("contact_page_subject")}
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                          <div className="col-12 d-flex justify-content-center">
                            <textarea
                              cols="30"
                              rows="10"
                              placeholder={t("contact_page_message")}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                          <div className="col-12 d-flex justify-content-center">
                            <input
                              type="submit"
                              value={t("contact_page_submit")}
                            />
                          </div>
                        </div>
                      </form>
                      <h5 className="mt-3 text-success">{messagesSubmit}</h5>
                      <h5 className="mt-3 text-danger">
                        {errorMessagesSubmit}
                      </h5>
                    </div>
                  </div>
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

export default ContactUs;
