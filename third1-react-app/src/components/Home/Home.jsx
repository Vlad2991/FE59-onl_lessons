import React from 'react';
import styles from './Home.module.scss';

const Home = ({ isBlackTheme }) => {
  return (
    <div className={`${styles.homeContainer} ${isBlackTheme ? styles.blackTheme : ''}`}>
      <h2>Welcome Home</h2>
      <p>This is the home page content.</p>
    </div>
  );
};

export default Home;