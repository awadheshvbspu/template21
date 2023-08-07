import React from 'react';
import styles from './style';
import './App.css';
import  Navbar from "./component/Navbar";
import Hero from './component/Hero';
import Stats from './component/Stats';
import Business from './component/Business';
import Billing from './component/Billing';
import CardDeal from './component/CardDeal';
import Testimonials from './component/Testimonial';
import Client from './component/Client';
import CTA from './component/CTA';
import Footer from './component/Footer'

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  );
}

export default App;
