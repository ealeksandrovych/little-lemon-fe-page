import React from 'react';
import Section from '../Section/Section';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import Link from '../Link/Link';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer with contact and social media information">
      <Section title="Contact Info" className={styles.contactInfo} aria-labelledby="contact-title">
        <address>
          <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          <p>Phone: <a href="tel:123-456-7890">123-456-7890</a></p>
        </address>
      </Section>
     <Section title="Follow Us" className={styles.socialLinks}>
        <List>
          <ListItem>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
              aria-label="Visit our Facebook page"
            >
              Facebook
            </a>
          </ListItem>
          <ListItem>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
              aria-label="Visit our Twitter profile"
            >
              Twitter
            </a>
          </ListItem>
        </List>
      </Section>
    </footer>
  );
}

export default Footer;