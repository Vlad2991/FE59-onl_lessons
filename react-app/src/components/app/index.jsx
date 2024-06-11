import React from "react";
import { Header } from "../header";
import { Banner } from "../banner";
import styles from './index.css';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
    </React.Fragment>
  );
};
