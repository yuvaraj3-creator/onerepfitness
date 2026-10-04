'use client';

import {Clock,MapPin,Phone} from 'lucide-react';
import {FormEvent} from 'react';
import {Shell,PageHero} from '../../components/site';

export default function Contact(){
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');

    const whatsappMessage = `Hi One More Rep Fitness! 👋

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

    window.location.href = `https://wa.me/918489895767?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return <Shell>
    <PageHero eyebrow="GET IN TOUCH" title="READY FOR ONE MORE?" desc="Visit the gym, ask about membership or book a training enquiry."/>
    <section className="section">
      <div className="container grid contactGrid">
        <div className="card contactInfo">
          <div className="contactRow"><small>Address</small><MapPin color="#d9ff35"/><p>First Floor, 333, Market, Thiruvottiyur High Rd, Chennai 600019</p></div>
          <div className="contactRow"><small>Phone</small><Phone color="#d9ff35"/><p><a href="tel:+918489895767">+91 84898 95767</a></p></div>
          <div className="contactRow"><small>Hours</small><Clock color="#d9ff35"/><p>Daily · 5:30 AM – 1:30 AM</p></div>
          <a className="btn primary" href="https://www.google.com/maps/search/?api=1&query=One+More+Rep+Fitness+Tiruvottiyur+Chennai">GET DIRECTIONS</a>
        </div>
        <form className="card contactForm" onSubmit={handleSubmit}>
          <div className="eyebrow">ENQUIRY FORM</div>
          <h2 className="display">LET'S TALK.</h2>
          <div className="formGrid">
            <label>Name<input name="name" required placeholder="Your name"/></label>
            <label>Phone<input name="phone" required placeholder="Your phone"/></label>
            <label className="full">Email<input name="email" type="email" placeholder="you@example.com"/></label>
            <label className="full">Message<textarea name="message" placeholder="Tell us your goal..."/></label>
            <button type="submit" className="btn primary">SEND ENQUIRY →</button>
          </div>
        </form>
      </div>
    </section>
  </Shell>
}