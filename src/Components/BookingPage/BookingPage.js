import React, { useState, useEffect } from "react";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./BookingPage.module.css";
import { fetchAPI, submitAPI } from "../../mocks/api";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const today = new Date();
  setLoading(true);
  try {
    const times = fetchAPI(today);
    console.log("Fetched times:", times); 
    setAvailableTimes(times || []);
  } catch (error) {
    console.error("Failed to fetch available times:", error);
    setError("Failed to load available times.");
  } finally {
    setLoading(false);
  }
}, []);

const updateTimes = (selectedDate) => {
    try {
        const times = fetchAPI(new Date(selectedDate));
        console.log("Updated times for date:", selectedDate, times);
        setAvailableTimes(times || []);
    } catch (error) {
        console.error("Failed to update available times:", error);
        setError("Failed to update times for the selected date.");
    }
};

const submitForm = (formData) => {
    try {
        const success = submitAPI(formData);
        if (success) {
            navigate("/confirmed");
        } else {
            setError("Failed to confirm booking. Please try again.");
        }
    } catch (error) {
        console.error("Submission error:", error);
        setError("An error occurred while submitting the booking.");
    }
};

  return (
    <div className={styles.bookingPage}>
      <h1 aria-label="Reserve a Table at Little Lemon">Reserve a Table</h1>
      <p aria-live="polite">Fill out the form to reserve your table at Little Lemon!</p>
      {error && <p role="alert" className={styles.error}>{error}</p>}
      {loading ? (
        <p>Loading available times...</p>
      ) : (
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}
        />
      )}
    </div>
  );
}

export default BookingPage;