import React from 'react';
import Section from '../Section/Section';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import Link from '../Link/Link';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Section title="Contact Info" className={styles.contactInfo}>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: 123-456-7890</p>
      </Section>
      <Section title="Follow Us" className={styles.socialLinks}>
        <List>
          <ListItem><Link href="#facebook">Facebook</Link></ListItem>
          <ListItem><Link href="#twitter">Twitter</Link></ListItem>
        </List>
      </Section>
    </footer>
  );
}

export default Footer;