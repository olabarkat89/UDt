import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import JavaImg from "../assests/img/java.svg";
import PythonImg from "../assests/img/python.svg";
import AndoriodImg from "../assests/img/android.svg";
import AngularImg from "../assests/img/angular.svg";
import NodeImg from "../assests/img/node.svg";
import ReactImg from "../assests/img/react.svg";
import DotnetImg from "../assests/img/dotnet.svg";
import IosImg from "../assests/img/ios.svg";
import FlutterImg from "../assests/img/flutter.svg";
import OdooImg from "../assests/img/odoo.svg";
import IbmImg from "../assests/img/ibm.svg";
import MicrosoftImg from "../assests/img/microsoft.svg";
import HpImg from "../assests/img/hp.svg";
import UiPathImg from "../assests/img/uipath.svg";
import frame from "../assests/img/frame.svg";
import frameOne from "../assests/img/frame-1.svg";
import frameTwo from "../assests/img/frame-2.svg";

const Technologies = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <div className="row mt-5 pt-5 paragraph">
        <div className="col-md-12">
          <div
            className="about-left wow animate animate__slideInUp"
            data-wow-duration="1500ms"
          >
            <h3 className="n-h3">
              <span className=""></span>
              {t("mobileApps_page_tech_use")}
            </h3>
            <div className="row g-4 pt-5">
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={FlutterImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={ReactImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={JavaImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0  w-100" src={DotnetImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={NodeImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={AngularImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={AndoriodImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={IosImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={PythonImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={MicrosoftImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={IbmImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={HpImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={OdooImg} />
                </div>
              </div>
              <div
                className="col-6 col-md-3 justify-content-center align-items-center d-flex single-item wow animate animate__fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="item-img">
                  <img className="m-0" src={UiPathImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12">
          <div className="sec-title white featureHead">
        <h3>{t("mobileApps_page_subtitle")}</h3>
        </div>
        </div>
        <div className="col-md-4 col-12  wow animate animate__fadeInLeft">
          <div className="technology-sec mt-5">
            <div className="item-img pb-4">
              <img className="m-0" src={frame} />
            </div>
            <h5 className="mb-5">{t("mobileApps_page_title2")} </h5>
            <p>{t("mobileApps_page_paragraph2")}</p>
          </div>
        </div>
        <div className="col-md-4 col-12 wow animanimate animate__fadeInBottom">
          <div className="technology-sec mt-5">
            <div className="item-img pb-4">
              <img className="m-0" src={frameOne} />
            </div>
            <h5 className="mb-5">{t("mobileApps_page_title3")}</h5>
            <p>{t("mobileApps_page_paragraph3")}</p>
          </div>
        </div>
        <div className="col-md-4 col-12 wow animanimate animate__fadeInRight">
          <div className="technology-sec mt-5">
            <div className="item-img pb-4">
              <img className="m-0" src={frameTwo} />
            </div>
            <h5 className="mb-5">{t("mobileApps_page_title4")}</h5>
            <p>{t("mobileApps_page_paragraph4")}</p>
          </div>
        </div>
        <div className="col-12 col-lg-6 m-auto mt-5 pt-5">
          <div className="sec-title  mb-0 featureHead">
          <p>{t("mobileApps_page_new_content")}
           </p>
           </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
