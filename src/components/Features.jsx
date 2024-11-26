import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Features = () => {
  const [apiData, setApiData] = useState([]);
  const [t] = useTranslation();
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetFeatures?languageId=${lang}`
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
      <section className="features-area">
        <div className="container">
          <div
            className="title-wrap wow animate__animated animate__fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="sec-title white featureHead">
              <h5>{t("features_care_study")}</h5>

              <h3>
                <span className=""></span>
                {t("features_our_numbers")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row rounded-card-blue g-4">
          {apiData.map((feature) => {
            return (
              <div
                className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
                data-wow-duration="1500ms"
                key={feature.id}
              >
                <div className="single-feature">
                  <div className="feature-inner">
                    <div className="icon">
                      <img src={feature.photoPath} alt="" />
                    </div>
                    <span>+</span>
                    <CountUp className="counter" end={`${feature.counter}`}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                    
                    <h4>{feature.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
