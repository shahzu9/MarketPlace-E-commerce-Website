"use client"; // This line is required for using hooks like useState

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for redirecting
import styles from './signup.module.css'; // Import the CSS module

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // State to show success message
  const router = useRouter(); // Initialize useRouter for redirecting

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form default submission behavior
    setShowMessage(true); // Show the success message

    // Redirect to login page with query parameter
    setTimeout(() => {
      router.push('/login?signupSuccess=true'); // Redirect to the login page with query parameter
    }, 1000); // Delay in milliseconds
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Sign Up</h2>
        
        {/* Show "Thanks for joining" message after form submission */}
        {showMessage && <p className={styles.thanksMessage}>Thanks for joining!</p>}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Username" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordInputGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={styles.input}
                required
              />
              <span onClick={togglePasswordVisibility} className={styles.showHideButton}>
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
        
        <div className={styles.signupText}>
          <p>
            Already have an account? <Link href="/login" className={styles.signupLink}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;