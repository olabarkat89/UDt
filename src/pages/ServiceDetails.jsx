import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [apiData, setApiData] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [showModal, setShowModal] = useState(false);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetServiceDetails?languageId=${lang}&Id=${serviceId}`
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
      <main className="creasoft-wrap">
        <div className="line_wrap">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>
        <section className="breadcrumbs services-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb-cnt">
                    <h1>
                      {apiData.title}                    
                    </h1>
                    <span>
                      <a href={`/${i18n.language}`}>{t("home")}</a>
                      <BsArrowRight className="m-1" />
                      <Link to="/services">{t("services")}</Link>
                      <BsArrowRight className="m-1" />
                      
                      {apiData.title}
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
              src={apiData.videoUrl}
              controls
              autoPlay
              className="bread-video"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <section className="service-details mt-4 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details-content">
                  <h3 className="n-h3 mb-5">
                    <span className=""></span>
                    {apiData.title}
                  </h3>
                  <img src={apiData.photoPath} alt="" className="img-fluid" />
                  <h3>
                    {t("service_details")}                    
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `<div>${apiData.description}</div>`,
                    }}
                  ></p>

                  {/* <p>
                    ut, hendrerit vel tortor. In pharetra lectus luctus ornare
                    sollicitudin. Pellentesque at neque nec justo sokal
                    porttitor egestas nec eget ex.Etiam suscipit neque elit,
                    hendrerit laoreet quam ultrices id. Proin nec tolde lacinia
                    ligula, sed laoreet ex. Sed nisl ligula, euismod vel justo
                    scelerisque,
                  </p>
                  <p>
                    vestibulum ultricies tellus. volv Pellentesque vel turpis
                    vitae urna tincidunt hendrerit at ut est. Sed eget feugiat
                    felis. Integer sed ornare sem, eget porttitor nisi. Nunc
                    erat sapien, porta laoreet gravida ac,
                  </p> */}
                </div>
              </div>
              {/*<div className="col-lg-4 order-md-2 order-sm-1 mb-0 mb-sm-3">
                <div className="breadcrumb-video">
                    <img src={VideoImg} alt="" />
                    <div className="video-inner">
                      <Link
                        className="video-popup"
                        href="#"
                        onClick={() => setShowModal(true)}
                      >
                        <FaPlay />
                      </Link>
                    </div>
                </div>
              </div>*/}
            </div>
            {/* <div className="service-items sec-mar-top">
              <div className="service-details-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-details">
                      <h4>
                        <span>01</span>Brainstroming & Wirefarme
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona
                        vestibulum ultricies tellus. volv Pellentesque vel tu
                        neque ac, aliquet nunc. In eu ipsum fringilla, accumsan
                        purus vel, tourbakaniv pellentesque risus. Vivamus
                        vehicula nl hendrerit vel tortor. In pharetra lectus
                        purus at eros interdum, in dignissim nulla vestibulum.
                        Nunc sit amet finibuson felis, ut egestas lacus. Sedan
                        pellentesque quis magna eu vestibulum. Olangb
                        pellentesque quis magna eu vestibulum. Ut sed commodo
                        neque. Morbi erat nisi, vehicula quis faucibus il
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-details-thumb">
                      <img src={Thumb} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details-item">
                <div className="row">
                  <div className="col-lg-6 or-2">
                    <div className="single-details-thumb">
                      <img src={Thumb2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-details">
                      <h4>
                        <span>02</span>UI Design
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona
                        vestibulum ultricies tellus. volv Pellentesque vel tu
                        neque ac, aliquet nunc. In eu ipsum fringilla, accumsan
                        purus vel, tourbakaniv pellentesque risus. Vivamus
                        vehicula nl hendrerit vel tortor. In pharetra lectus
                        purus at eros interdum, in dignissim nulla vestibulum.
                        Nunc sit amet finibuson felis, ut egestas lacus. Sedan
                        pellentesque quis magna eu vestibulum. Olangb
                        pellentesque quis magna eu vestibulum. Ut sed commodo
                        neque. Morbi erat nisi, vehicula quis faucibus il
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-details">
                      <h4>
                        <span>03</span>Final Developing
                      </h4>
                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Etiam eu nibh elementum, accumsan ona
                        vestibulum ultricies tellus. volv Pellentesque vel tu
                        neque ac, aliquet nunc. In eu ipsum fringilla, accumsan
                        purus vel, tourbakaniv pellentesque risus. Vivamus
                        vehicula nl hendrerit vel tortor. In pharetra lectus
                        purus at eros interdum, in dignissim nulla vestibulum.
                        Nunc sit amet finibuson felis, ut egestas lacus. Sedan
                        pellentesque quis magna eu vestibulum. Olangb
                        pellentesque quis magna eu vestibulum. Ut sed commodo
                        neque. Morbi erat nisi, vehicula quis faucibus il
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-details-thumb">
                      <img src={Thumb3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/*<Newsletter /> */}
      </main>
    </>
  );
};

export default ServiceDetails;
