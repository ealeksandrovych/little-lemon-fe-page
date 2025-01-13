import React from "react";
import { Link } from "react-router-dom";
import styles from "./ConfirmedBooking.module.css";

function ConfirmedBooking() {
  return (
    <div className={styles.confirmedBooking} id="main-content" aria-live="polite">
      <h1 className={styles.heading} role="heading">Booking Confirmed!</h1>
      <p className={styles.message}>
        Your reservation has been successfully made. We look forward to seeing you!
      </p>
      <Link to="/" className={styles.link} aria-label="Return to the home page">
        Return to Home
      </Link>
    </div>
  );
}

export default ConfirmedBooking;