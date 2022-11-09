import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./contact.css"

export default function Contact() {
  return (
    <>
      <Navbar/>
      <main className='contact background-pattern'>
        <section>
          <div className="contact-container">
            <div className='contact-head'>Impressum</div>
            <div className="contact-body">
              <span>Angaben gemäß § 5 TMG:</span>
              <span>Paul Grundey</span>
              <hr style={{height: "1px", color: "gray", backgroundColor: "gray", margin: "10px 0"}}/>
              <span>Kreisstraße 79</span>
              <span>06844 Dessau-Roßlau</span>
              <h3>KONTAKT:</h3>
              <span>Telefon: +49 175 5508267</span>
              <span>E-Mail: contact@solarisesports.org</span>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
