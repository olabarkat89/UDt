import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import PhoneIcon from "../assests/img/phone-icon.svg";
import axios from "axios";

const CallToUsWedigt = () => {
  const [t, i18n] = useTranslation();
  const [getContact, setGetContact] = useState([]);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;

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

  return (
    <>
      <div className="sidebar-banner mb-5">
        <div className="card card-custom">
          <img className="card-img-top angle" src={PhoneIcon} alt="" />
          <div className="card-body">
            <h5 className="card-title">
              {t("blog_page_any_projectNew")}              
            </h5>
            <div className="text-center">
              <a href={`tel:${getContact.mobile}`}>{getContact.mobile}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToUsWedigt;
