import React from "react";
import DarkModeToggle from "./_darkmode_toggle/darkmodeToggle";
import styles from "./header.module.css";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function header({ title, subtitle, isHomepage }) {
  return (
    <div className={styles.header_home_conatainer}>
      <Helmet>
        {isHomepage === true ? (
          <title>Toolzar-X</title>
        ) : (
          <title>{`${title} ${subtitle} - ToolZar X`}</title>
        )}
      </Helmet>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {isHomepage === false ? (
          <Link style={{ marginLeft: -5, marginRight: 5 }} to="/">
            <ArrowLeft className={styles.header_backarrow} size="30" />
          </Link>
        ) : (
          ""
        )}
        <div className={styles.header_home_title}>
          <h1 style={isHomepage === false ? { fontSize: "20px" } : {}}>
            {isHomepage === false ? title : "Toolzar X"}
          </h1>
          <p>{isHomepage === false ? subtitle : "That's all you need!"}</p>
        </div>
      </div>
      <div className={styles.header_home_toggle}>
        <DarkModeToggle />
      </div>
    </div>
  );
}
