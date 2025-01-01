import React from 'react';
import Section from './Section';
import List from './List';
import ListItem from './ListItem';
import Link from './Link';

function Footer() {
  return (
    <footer>
      <Section title="Contact Info" className="contact-info">
        <p>Email: info@littlelemon.com</p>
        <p>Phone: 123-456-7890</p>
      </Section>
      <Section title="Follow Us" className="social-links">
        <List>
          <ListItem><Link href="#facebook">Facebook</Link></ListItem>
          <ListItem><Link href="#twitter">Twitter</Link></ListItem>
        </List>
      </Section>
    </footer>
  );
}

export default Footer;