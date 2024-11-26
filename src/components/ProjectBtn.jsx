import React, {  useState } from "react";
import { useTranslation } from "react-i18next";


const ProjectBtn = ({ setItem, menuItems, filterItem, item }) => {

  const [t, i18n] = useTranslation();
  const actVal = i18n.language === "en-US" ? 'Websites' : 'مواقع الكترونية';
  const [active, setActive] = useState(actVal);
console.log("actVa", actVal, i18n.language)
  const filterFunction = (Val) => {
    filterItem(Val);
    setActive(Val);
  };
  const AllFilterFunction = (Val) => {
    setItem(item);
    setActive("All");
  };

  return (
    <div className="d-flex justify-content-center">
      <ul className="isotope-menu layout2">
        <li
          className={active === "All" && "active"}
          onClick={() => AllFilterFunction()}
        >
          
          {t("All")}
        </li>
        {menuItems.sort((a,b) => a?.localeCompare(b)).map((Val , id) => {
          return (
            <li
              onClick={() => filterFunction(Val)}
              key={Val.id}
              className={active === Val && "active"}
            >
              {Val}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectBtn;
