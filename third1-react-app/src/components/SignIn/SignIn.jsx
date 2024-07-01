import React from 'react';
import styles from './SignIn.module.scss';

const SignIn = ({ setPage, isBlackTheme }) => {
  const handleSignIn = (e) => {
    e.preventDefault(); 

    console.log('Sign in attempted!'); 
  };

  return (
    <div className={`${styles.signInContainer} ${isBlackTheme ? styles.blackTheme : ''}`}>
      <form onSubmit={handleSignIn}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
        </div>
        <button type="submit" className={styles.signInButton}>Sign In</button>
      </form>
      <div className={styles.signUpLink}>
        Don’t have an account? <a href="#" onClick={() => setPage('signUp')}>Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;
