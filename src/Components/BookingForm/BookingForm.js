import React, { useState, useEffect } from "react";
import styles from "./BookingForm.module.css";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const isValidDate = date && new Date(date) >= new Date();
    const isValidGuests = guests > 0 && guests <= 10;
    const isValidForm = isValidDate && time && isValidGuests && occasion;
    setFormValid(isValidForm);
  };

  useEffect(() => {
    validateForm(); // Validate form when dependencies change
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      const formData = { date, time, guests, occasion };
      console.log("Submitting form data:", formData); // Debugging
      submitForm(formData);
      setDate("");
      setTime("");
      setGuests(1);
      setOccasion("");
    } else {
      console.error("Form validation failed."); // Debugging
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleGuestsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setGuests(value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  console.log("Available times:", availableTimes); // Debugging

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <label htmlFor="res-date" className={styles.label}>
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        className={styles.input}
        required
        min={new Date().toISOString().split("T")[0]}
        aria-label="Select a reservation date"
      />

      <label htmlFor="res-time" className={styles.label}>
        Choose time
      </label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange}
        className={styles.select}
        required
        aria-label="Select a reservation time"
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.length > 0 ? (
          availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No available times
          </option>
        )}
      </select>

      <label htmlFor="guests" className={styles.label}>
        Number of guests
      </label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleGuestsChange}
        className={styles.input}
        required
        aria-label="Number of guests"
        aria-invalid={guests < 1 || guests > 10}
      />
      {guests < 1 && (
        <p className={styles.errorMessage}>Guests must be at least 1.</p>
      )}
      {guests > 10 && (
        <p className={styles.errorMessage}>Guests cannot exceed 10.</p>
      )}

      <label htmlFor="occasion" className={styles.label}>
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        className={styles.select}
        required
        aria-label="Select an occasion"
      >
        <option value="" disabled>
          Select an occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        className={styles.button}
        disabled={!formValid}
        aria-label="Submit the reservation form"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;