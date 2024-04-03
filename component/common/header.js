import React from "react";
import styles from "../../styles/layout.module.css";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [fix, setFix] = useState(false);

  return (
    <header>
      <div className="header">
        <div className={fix? `${styles.header} fixed laptop`:`${styles.header} laptop`} >
          Freelancer
          {/* <div className="container"></div> */}
        </div>
      </div>
    </header>
  );
}
