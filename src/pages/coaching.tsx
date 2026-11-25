import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function CoachingPage() {
  return <main className="inner-page">
    <section className="inner-hero coaching-hero">
      <div className="inner-copy"><div className="eyebrow">A collaborative conversation</div><h1>Coaching, at <em>your pace.</em></h1><p>Explore what a coaching practice could offer, with the real details ready for Melanie to add.</p></div>
      <div className="inner-image"><img src="/threshold-still-life.png" alt="Soft afternoon light on an open doorway" width="1024" height="768" /></div>
    </section>
    <section className="section intro">
      <div><div className="section-kicker">A place to explore</div><h2>What would feel useful <em>right now?</em></h2></div>
      <div className="intro-text"><p>Coaching can be a structured space to reflect, name what matters, and consider possible next steps. The conversation is shaped around your priorities—not a one-size-fits-all path.</p><p>Melanie’s actual offers and working arrangements should be described here once confirmed. Nothing on this page is a promise of specific outcomes.</p></div>
    </section>
    <section className="section offer-section">
      <div className="section-kicker">Current ways to work together</div><h2>Offers to be <em>confirmed.</em></h2>
      <p className="offer-intro">This is a publishing template, not a live service menu. Replace each prompt with details Melanie has confirmed, or remove any offer that is not available.</p>
      <div className="offer-list">
        <article className="offer-row"><span className="pillar-num">01</span><div><h3>[Add actual coaching offer]</h3><p>[Describe who it is for and what the conversation includes. Avoid guarantees.]</p></div><span className="offer-meta">Format: [confirm] · Price: [confirm]</span></article>
        <article className="offer-row"><span className="pillar-num">02</span><div><h3>[Add another offer, if applicable]</h3><p>[Add only verified session length, cadence, scope, and availability.]</p></div><span className="offer-meta">Format: [confirm] · Price: [confirm]</span></article>
      </div>
      <p className="template-note"><strong>Before publishing:</strong> confirm offer names, formats, session duration, pricing, cancellation terms, and availability. Do not publish placeholders.</p>
    </section>
    <section className="section process">
      <div className="section-kicker">A considered beginning</div><h2>Start with a question.<br /><em>Keep your choice yours.</em></h2>
      <p className="process-lead">A coaching relationship should begin with clear information and room to decide whether the fit feels right.</p>
      <div className="steps"><article className="step"><span className="step-no">01</span><h3>Get curious</h3><p>Name what you hope to explore, even if it is still taking shape.</p></article><article className="step"><span className="step-no">02</span><h3>Ask questions</h3><p>Clarify the format, expectations, boundaries, and cost before committing.</p></article><article className="step"><span className="step-no">03</span><h3>Choose freely</h3><p>Take time to decide whether coaching feels appropriate for you.</p></article></div>
    </section>
    <section className="section truth"><div><div className="section-kicker" style={{ color: '#edc75e' }}>Clear boundaries matter</div><h2>Coaching is not <em>clinical care.</em></h2></div><div className="truth-copy"><p>Life coaching can support reflection and goal-setting. It is not therapy, diagnosis, medical advice, or a substitute for care from a qualified health professional.</p><p>There are no guaranteed results. A coach and client should agree on scope and expectations before starting.</p></div></section>
    <section className="section cta"><div className="section-kicker">Want to ask something first?</div><h2>Information before <em>commitment.</em></h2><p>Contact destination and booking process are not configured yet. Use the template page to add the correct details before inviting enquiries.</p><Link className="button" href="/contact" data-testid="link-coaching-contact">See contact template <ArrowRight size={15} /></Link></section>
  </main>;
}
