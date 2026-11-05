import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

// Mail Icon
const MailIcon = () => (
  <svg viewBox='0 0 24 24' className='footer-icon' fill='none' stroke='currentcolor' strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="1" />
    <path d="M2 5l10 8 10-8M2 19L7-7M22 19L-7-7" />
  </svg>
)

// 
const PlanetIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="7" />
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-20 12 12)" />
  </svg>
)

//
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10z" />
  </svg>
)

//
const OrbitIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="8" />
    <path d="M3 21L21 3" />
  </svg>
)

//
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

//
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon-sm" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 21l1.6-4.6A9 9 0 1112 21a9 9 0 01-4.4-1.1L3 21z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2-1.5 1z" />
  </svg>
)

//
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="social-icon" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

//
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
    <rect x="3" y="9" width="4" height="12" />
    <circle cx="5" cy="4.5" r="2.2" />
    <path d="M10 9h3.8v1.7c.6-1 1.9-2 3.9-2 3.3 0 4.3 2 4.3 5.3V21h-4v-6.2c0-1.6-.4-2.8-1.9-2.8s-2.1 1.2-2.1 2.8V21h-4z" />
  </svg>
)

const aboutLinks = ["About Us", "Comet Design Lab", "The Garage", "Find Your Silhouette"]

const quickLinks = ["Home", "Store Locator", "Return and Exchange Portal", "Contact Us", "Care", "FAQ", "Find Your Silhouette", "Brand Assets", "T&C", "Return Exchange and Refund Policy", "Privacy Policy", "Shipping Policy"]

const Footer = () => {
  return (
    // <div className='footer-container'>
    //   <div className='footer-element'>
    //     <h1>GET IN TOUCH</h1>
    //     <p>Whatsapp</p>
    //     <p>Support</p>
    //     <p>Gifting and Corporate Orders</p>
    //     <p>Marketing and Partnership</p>
    //     <p>Career</p>
    //     <br />
    //     <hr />
    //     <br />
    //     <h1>REACH US</h1>
    //     <p>3rd Floor, No.616, 15th Main Rd, 4th Block,<br />Koramangala, Bengaluru, Karnataka, India, 560034<br /><br />https://www.wearcomet.com<br />Above is the only official website of COMET. <br />We have no other domain.</p>
    //   </div>

    //   <div className='footer-element'>
    //     <h1>SOCIAL</h1>
    //     <br />
    //     <hr />
    //     <br />
    //     <h1>ABOUT US</h1>
    //     <p>ABOUT US</p>
    //     <p>COMET DESIGN LAB</p>
    //     <p>VAULT</p>
    //     <p>REFER AA FRIEND</p>
    //     <p>GIFT A COMET</p>
    //     <p>ONLY FEW LEFT</p>
    //     <p>THE GARAGE</p>
    //   </div>

    //   <div className='footer-element'>
    //     <h1>QUICK LINKS</h1>
    //     <p>HOME</p>
    //     <p>STORE LOCATOR</p>
    //     <p>RETURN AND EXCHANGE PORTAL</p>
    //     <p>CONTACT US</p>
    //     <p>CARE</p>
    //     <p>FAQ</p>
    //     <p>FIND YOUR SILLHOUTTE</p>
    //     <p>BRAND ASSETS</p>
    //     <p>T&C</p>
    //     <p>RETURN EXCHANGE AAND REFUND POLICY</p>
    //     <p>PRIVACY POLICY</p>
    //     <p>SHIPPING POLICY</p>
    //   </div>
    // </div>
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-heading">
            <MailIcon /> GET IN TOUCH
          </h2>
          <p className="footer-contact">
            <WhatsappIcon />
            <b>Whatsapp</b>: <a href="tel:+919606081463">+91 9606081463</a>
          </p>
          <p className="footer-contact">
            <b>Support</b>: <a href="mailto:hello@wearcomet.com">hello@wearcomet.com</a>
          </p>
          <p className="footer-contact">
            <b>Gifting and Corporate Orders</b>:<br />
            <a href="mailto:bulkorders@wearcomet.com">
              bulkorders@wearcomet.com
            </a>
          </p>
          <p className="footer-contact">
            <b>Marketing &amp; Partnership</b>:<br />
            <a href="mailto:partnerships@wearcomet.com">
              partnerships@wearcomet.com
            </a>
          </p>
          <p className="footer-contact">
            <b>Careers</b>: <a href="#">Apply Here</a>
          </p>
          //Horizontal line for partition.
          <hr className="footer-divider" />
          <h2 className="footer-heading">
            <PinIcon /> REACH US
          </h2>
          <p className="footer-text">
            3rd Floor, No.616, 15th Main Rd, 4th Block,
            <br />
            Koramangala, Bengaluru, Karnataka, India,
            <br />
            560034
          </p>
          <p className="footer-text">
            https://www.wearcomet.com
            <br />
            Above is the only official website of COMET.
            <br />
            We have no other domain.
          </p>
          <div className="footer-country">
            🇮🇳 India <span className="chevron">⌄</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h2 className="footer-heading">
            <PlanetIcon /> SOCIAL
          </h2>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>

          <hr className="footer-divider" />

          <h2 className="footer-heading">
            <SparkleIcon /> ABOUT US
          </h2>
          <ul className="footer-links footer-links-lg">
            {aboutLinks.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h2 className="footer-heading">
            <OrbitIcon /> QUICK LINKS
          </h2>
          <ul className="footer-links">
            {quickLinks.map((item) =>
              item === "Home" ? (
                <li key={item}>
                  <Link to="/">{item}</Link>
                </li>
              ) : (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        © 2026, <a href="#">Grails Marketing Private Limited. All Rights Reserved.</a>
      </p>
    </footer>
  );
}

export default Footer