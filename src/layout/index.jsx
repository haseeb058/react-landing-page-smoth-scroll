import React from "react";

import style from "./layout.module.scss";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className={style.layoutWrapper}>
      <main>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
