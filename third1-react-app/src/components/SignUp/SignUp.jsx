
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SignUp.module.scss';

const SignUp = ({ setPage, isBlackTheme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
   
    setPage('success');
  };

  return (
    <div className={`${styles.signUpContainer} ${isBlackTheme ? styles.blackTheme : ''}`}>
      <form className={styles.signUpForm} onSubmit={handleSignUp}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <label>Confirm Password</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        <button type="submit" className={styles.signUpButton}>Sign Up</button>
        <div className={styles.signInLink}>
          <a href="#" onClick={() => setPage('signIn')}>Sign In</a>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  setPage: PropTypes.func.isRequired,
  isBlackTheme: PropTypes.bool.isRequired,
};

export default SignUp;
