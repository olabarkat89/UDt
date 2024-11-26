import React, { useEffect, useState } from "react";

import { BsArrowRight, BsCheck } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [t,i18n] = useTranslation();

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <>
      <main className="creasoft-wrap">
        <div className="line_wrap">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb-cnt">
                    <h1>Pricing Plan</h1>
                    <span>
                      <a href= {`/${i18n.language}`}>Home</a>
                      <BsArrowRight className="m-1" />
                      Pricing
                    </span>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="priceing-plan sec-mar">
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title">
                <span>Getting Start</span>
                <h2>Pricing Plan</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="price-table-tab">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Pay Monthly
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Pay Yearly
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Small Business</h3>
                      <span>Single Business</span>
                      <strong>
                        $15.99<sub>/Per Month</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <BsCheck />
                          10 Pages Responsive Website
                        </li>
                        <li>
                          <BsCheck />
                          5PPC Campaigns
                        </li>
                        <li>
                          <BsCheck />
                          10 SEO Keyword
                        </li>
                        <li>
                          <BsCheck />5 Facebook Camplaigns
                        </li>
                        <li>
                          <BsCheck />2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href= {`/${i18n.language}/${t("contact")}`}>Pay Now</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Professional</h3>
                      <span>Small team</span>
                      <strong>
                        $99.99<sub>/Per Month</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <BsCheck />
                          10 Pages Responsive Website
                        </li>
                        <li>
                          <BsCheck />
                          5PPC Campaigns
                        </li>
                        <li>
                          <BsCheck />
                          10 SEO Keyword
                        </li>
                        <li>
                          <BsCheck />5 Facebook Camplaigns
                        </li>
                        <li>
                          <BsCheck />2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href=  {`/${i18n.language}/${t("contact")}`}>Pay Now</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Enterprice</h3>
                      <span>Large Team</span>
                      <strong>
                        $120.99<sub>/Per Month</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <BsCheck />
                          10 Pages Responsive Website
                        </li>
                        <li>
                          <BsCheck />
                          5PPC Campaigns
                        </li>
                        <li>
                          <BsCheck />
                          10 SEO Keyword
                        </li>
                        <li>
                          <BsCheck />5 Facebook Camplaigns
                        </li>
                        <li>
                          <BsCheck />2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href= {`/${i18n.language}/${t("contact")}`}>Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"

                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Small Business</h3>
                      <span>Single Business</span>
                      <strong>
                        $35.99<sub>/Per Year</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <BsCheck />
                          10 Pages Responsive Website
                        </li>
                        <li>
                          <BsCheck />
                          5PPC Campaigns
                        </li>
                        <li>
                          <BsCheck />
                          10 SEO Keyword
                        </li>
                        <li>
                          <BsCheck />5 Facebook Camplaigns
                        </li>
                        <li>
                          <BsCheck />2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href={`/${i18n.language}/${t("contact")}`}>Pay Now</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"

                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Professional</h3>
                      <span>Small team</span>
                      <strong>
                        $199.99<sub>/Per Year</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <BsCheck />
                          10 Pages Responsive Website
                        </li>
                        <li>
                          <BsCheck />
                          5PPC Campaigns
                        </li>
                        <li>
                          <BsCheck />
                          10 SEO Keyword
                        </li>
                        <li>
                          <BsCheck />5 Facebook Camplaigns
                        </li>
                        <li>
                          <BsCheck />2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href={`/${i18n.language}/${t("contact")}`}>Pay Now</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate animate__fadeInUp"

                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Enterprice</h3>
                      <span>Large Team</span>
                      <strong>
                        $220.99<sub>/Per Year</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <BsCheck />
                          10 Pages Responsive Website
                        </li>
                        <li>
                          <BsCheck />
                          5PPC Campaigns
                        </li>
                        <li>
                          <BsCheck />
                          10 SEO Keyword
                        </li>
                        <li>
                          <BsCheck />5 Facebook Camplaigns
                        </li>
                        <li>
                          <BsCheck />2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <a href={`/${i18n.language}/${t("contact")}`}>Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe-newsletter sec-mar-top">
          <div className="container">
            <div className="news-letter-content">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow animate animate__fadeInLeft"

                  data-wow-duration="1500ms"
                >
                  <div className="subscribe-cnt">
                    <span>Get In Touch</span>
                    <h3>Subscribe Our</h3>
                    <strong>Newsletter</strong>
                  </div>
                </div>
                <div
                  className="col-lg-6 wow animate animate__fadeInRight"

                  data-wow-duration="1500ms"
                >
                  <div className="subscribe-form">
                    <form action="#" method="post">
                      <input
                        type="email"
                        name="email"
                        placeholder="Type Your Email"
                      />
                      <input type="submit" value="connect" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<Newsletter /> */}
      </main>
    </>
  );
};

export default Pricing;
