import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../Section/Section";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import styles from "./Main.module.css";
import greeksalad from "../../assets/greeksalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemondessert from "../../assets/lemondessert.jpg";
import restaurent from "../../assets/restaurant.jpg";

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      console.log("Updating times for date:", action.date);
      return state.filter((time) => time !== "19:00");
    default:
      return state;
  }
}

const specials = [
  {
    id: 1,
    image: greeksalad,
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and feta cheese, garnished with garlic croutons.",
    price: "$12.99",
  },
  {
    id: 2,
    image: bruchetta,
    title: "Bruschetta",
    description:
      "Grilled bread smeared with garlic and seasoned with olive oil and salt.",
    price: "$5.89",
  },
  {
    id: 3,
    image: lemondessert,
    title: "Lemon Dessert",
    description:
      "Authentic lemon dessert made with sourced ingredients.",
    price: "$5.00",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Absolutely loved the food and atmosphere! Will come again.",
    author: "Jane D.",
  },
  {
    id: 2,
    text: "The Greek Salad is my favorite dish! So fresh and delicious.",
    author: "John S.",
  },
  {
    id: 3,
    text: "The staff was super friendly, and the desserts are to die for.",
    author: "Emily R.",
  },
];

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate("/booking");
  };

  return (
    <main className={styles.main}>
     <Section title="" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <button
              onClick={handleReservationClick}
              className={styles.reserveButton}
              aria-label="Reserve a Table"
            >
              Reserve a Table
            </button>
          </div>
          <div className={styles.heroImage}>
            <img
              src={restaurent}
              alt="Little Lemon Specials"
              className={styles.heroImg}
            />
          </div>
        </div>
      </Section>

      <Section title="Specials" id="specials-section" className={styles.specialsSection}>
        <List className={styles.specialsList}>
          {specials.map((special) => (
            <ListItem key={special.id} className={styles.specialsListItem}>
              <img
                src={special.image}
                alt={special.title}
                className={styles.specialImage}
              />
              <div className={styles.specialContent}>
              <h3 className={styles.specialTitle}>{special.title}</h3>
              <p className={styles.specialDescription}>{special.description}</p>
              <p className={styles.specialPrice}>{special.price}</p>
              <button className={styles.deliveryButton}>Order a delivery</button>
              </div>
            </ListItem>
          ))}
        </List>
      </Section>

      <Section title="Testimonials" className={styles.testimonialsSection}>
        <List className={styles.testimonialsList}>
          {testimonials.map((testimonial) => (
            <ListItem key={testimonial.id} className={styles.testimonialItem}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <p className={styles.testimonialAuthor}>- {testimonial.author}</p>
            </ListItem>
          ))}
        </List>
      </Section>
    </main>
  );
}

export default Main;