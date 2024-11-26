import React, { useEffect } from "react";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ item }) => {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });

  return (
    <section className="">
      <div className="container-fluid">
        <div className="row g-4 project-items">
          {item.map((Val) => {
            return (
              <div
                className="col-6 col-md-6 col-lg-4 single-item d-flex justify-content-center align-items-center wow animate animate__fadeInUp"
                data-wow-duration="500ms"
                key={Val.id}
              >
                <div className="item-img">

                  <a href={`/${i18n.language}/${t("project-details")}/${Val.id}`}>
                    <img src={Val.photoPath} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>{Val.title}</span>
                  <h4>{Val.project}</h4>
                  <div className="view-btn">
                    <a href={`/${i18n.language}/${t("project-details")}/${Val.id}`}>
                      {t("services_page_read_more")}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
