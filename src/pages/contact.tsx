import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return <main className="inner-page">
    <section className="inner-hero contact-hero">
      <div className="inner-copy"><div className="eyebrow">A gentle next step</div><h1>Let’s make room for a <em>conversation.</em></h1><p>This page is a contact and booking template. Add Melanie’s real destination before inviting anyone to reach out.</p></div>
      <div className="inner-image"><img src="/threshold-still-life.png" alt="An open doorway and flowering branch in warm daylight" width="1024" height="768" /></div>
    </section>
    <section className="section contact-layout">
      <div><div className="section-kicker">Contact details</div><h2>Make the next step <em>clear.</em></h2><p>Use the prompts below to add verified contact details or a real booking destination. No contact details have been invented.</p></div>
      <div className="contact-details">
        <div className="template-note"><strong>Template prompt — replace before publishing.</strong><br />Booking destination: [Add Melanie’s verified booking URL, if one exists.]</div>
        <div className="template-note"><strong>Alternative contact:</strong><br />[Add a verified email address or other approved contact method, if available.]</div>
        <p className="quiet-note">Remove any options that are not in use. Confirm what happens after someone makes contact and how quickly they can expect a reply.</p>
      </div>
    </section>
    <section className="section form-template">
      <div className="section-kicker">Optional enquiry form</div><h2>Form template, <em>not connected.</em></h2>
      <p>This example is intentionally non-submitting. It does not send, store, or display a success message. Connect it to an approved destination before enabling it.</p>
      <form className="template-form" onSubmit={(event) => event.preventDefault()} aria-describedby="form-status">
        <label>Your name<input type="text" name="name" placeholder="Add a name" disabled data-testid="input-contact-name" /></label>
        <label>Your email<input type="email" name="email" placeholder="Add an email address" disabled data-testid="input-contact-email" /></label>
        <label>What would you like to ask?<textarea name="message" rows={4} placeholder="Add a short note" disabled data-testid="input-contact-message" /></label>
        <button type="button" className="button" disabled aria-disabled="true" data-testid="button-contact-disabled">Form not connected <ArrowRight size={15} /></button>
        <p id="form-status" className="quiet-note">Template preview only. Fields are disabled and no message can be sent.</p>
      </form>
    </section>
    <section className="section cta"><div className="section-kicker">Keep exploring</div><h2>No rush to <em>decide.</em></h2><p>You can return to the coaching overview or read answers to common questions while contact details are being confirmed.</p><Link className="button" href="/faq" data-testid="link-contact-faq">Read the questions <ArrowRight size={15} /></Link></section>
  </main>;
}
