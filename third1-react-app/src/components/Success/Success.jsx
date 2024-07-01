import React from 'react';
import styles from './Success.module.scss';

const Success = ({ setPage, isBlackTheme }) => {
  console.log('Успех'); 

  return (
    <div className={`${styles.successContainer} ${isBlackTheme ? styles.blackTheme : ''}`}>
      <h2>Success!</h2>
      <p>You have successfully signed in.</p>
      <button onClick={() => setPage('home')} className={styles.homeButton}>Go to Home</button>
    </div>
  );
};

export default Success;
