import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ setPage, isBlackTheme, handleChangeTheme }) => {
  return (
    <header className={styles.header}>
      <h1>Blogcards</h1>
      <nav>
        <a href="#" onClick={() => setPage("home")}>Home</a>
        <a href="#" onClick={() => setPage("blog")}>Blog</a>
        <a href="#" onClick={() => setPage("signIn")}>Sign In</a>
        <a href="#" onClick={() => setPage("signUp")}>Sign Up</a>
      </nav>
      <button className={styles.headerButton} onClick={handleChangeTheme}>
        {isBlackTheme ? "Light Theme" : "Dark Theme"}
      </button>
    </header>
  );
};

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
  isBlackTheme: PropTypes.bool.isRequired,
  handleChangeTheme: PropTypes.func.isRequired,
};

export default Header;
