import React from 'react';
import styles from './BookingPage.module.css';

function BookingPage() {
  return (
    <div className={styles.bookingPage}>
      <h1>Reserve a Table</h1>
      <p>Fill out the form to reserve your table at Little Lemon!</p>
    </div>
  );
}

export default BookingPage;