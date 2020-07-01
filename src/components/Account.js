import React from 'react';
import styles from './Account.module.css';

const Account = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>Account details</h1>
    <form>
      <label htmlFor="user_name" className={styles.inputLabel}>
        <span className={styles.labelText}>Username</span>
        <input name="user_name" type="" />
      </label>
      <label htmlFor="user_email" className={styles.inputLabel}>
        <span className={styles.labelText}>Email</span>
        <input name="user_email" type="email" />
      </label>
      <label htmlFor="user_password" className={styles.inputLabel}>
        <span className={styles.labelText}>Password</span>
        <input name="user_password" type="password" />
      </label>
      <label htmlFor="user_password_confirmation" className={styles.inputLabel}>
        <span className={styles.labelText}>Password confirmation</span>
        <input name="user_password_confirmation" type="password" />
      </label>
      <label htmlFor="user_current_password" className={styles.inputLabel}>
        <span className={styles.labelText}>Current password (required)</span>
        <input name="user_current_password" type="password" />
      </label>
      <button type="submit" className={styles.submitButton}>update</button>
    </form>
  </div>
);

export default Account;
