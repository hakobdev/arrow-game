import React from "react";
import styles from "./Container.module.css";
import Props from "./Container.interface";

const Container: React.FC<Props> = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
