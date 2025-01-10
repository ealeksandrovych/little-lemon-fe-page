import React from "react";
import BookingForm from "../BookingForm/BookingForm"; 
import styles from "./BookingPage.module.css";

function BookingPage() {
  return (
    <div className={styles.bookingPage}>
      <h1>Reserve a Table</h1>
      <p>Fill out the form to reserve your table at Little Lemon!</p>
      <BookingForm /> 
    </div>
  );
}

export default BookingPage;