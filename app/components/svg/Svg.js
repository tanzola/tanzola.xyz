import * as React from "react";
import styles from './Svg.module.css';

function Svg(props) {
  return (
    <>
      <div className={styles.footerLogo}>{props.icon}</div>
    </>
  )
}

export default Svg