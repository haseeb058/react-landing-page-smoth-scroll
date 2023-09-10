import React from "react";

import Card from "components/card";

import style from "./sidebar.module.scss";

const Sidebar = () => {
  const adminSidebarList = ["Home", "about", "contact-us"];

  return (
    <Card className={style.sidebarCard}>
      <div className={style.sideHeader}>
        <a href={"/"}>Demo</a>
      </div>
      <div className={style.listDiv}>
        <ul className={style.ul}>
          <ul className={style.ul}>
            {adminSidebarList.map((ele) => (
              <a href={ele} key={ele}>
                <li className={style.active}>{ele}</li>
              </a>
            ))}
          </ul>
        </ul>
      </div>
    </Card>
  );
};

export default Sidebar;
