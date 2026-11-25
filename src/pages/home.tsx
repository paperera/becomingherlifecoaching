import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function HomePage() {
  return <main>
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow reveal">A life that feels like yours</div>
        <h1 className="reveal-delay" id="hero-title">You’re allowed to want <em>more.</em></h1>
        <p className="reveal-delay">More room to hear yourself. More courage to choose what matters. A next chapter that begins with one honest question: what do I want now?</p>
        <p className="coach-byline">Life coaching with Melanie Abney</p>
        <div className="hero-actions reveal-delay">
          <Link className="button" href="/coaching" data-testid="link-home-coaching">Explore the approach <ArrowRight size={15} /></Link>
          <Link className="text-link" href="/about" data-testid="link-home-about">Meet Melanie</Link>
        </div>
      </div>
      <div className="hero-visual">
        <img src="/threshold-still-life.png" alt="Late-afternoon light falling across an open doorway and a blossoming branch" width="1024" height="768" fetchPriority="high" />
        <div className="hero-stamp" aria-hidden="true">There is<br />another way<br />forward</div>
        <div className="hero-note">A little space to begin again.</div>
      </div>
    </section>
    <div className="ticker" aria-label="Clarity, confidence, and self-trust">
      <span>Clarity <i /></span><span>Confidence <i /></span><span>Self-trust <i /></span><span>Room to become <i /></span>
    </div>
    <section className="section intro" id="approach">
      <div><div className="section-kicker">A gentle place to start</div><h2>You don’t have to have it all figured <em>out.</em></h2></div>
      <div className="intro-text">
        <p>Maybe something has shifted. Maybe the life you built no longer fits quite right. Or maybe there’s a quiet voice asking for change, and you’re ready to listen.</p>
        <p>Becoming Her Life Coaching is here for women considering what comes next. Coaching offers a supportive space to pause, reflect on what matters to you, and find a way forward that feels like your own.</p>
        <div className="pullquote">“You can begin before you feel completely ready.”</div>
      </div>
    </section>
    <section className="section change">
      <div className="change-visual"><img src="/threshold-still-life.png" alt="" width="1024" height="768" loading="lazy" /><div className="change-caption">A moment to meet yourself where you are.</div></div>
      <div className="change-content">
        <div className="section-kicker">Your life, your pace</div><h2>Change doesn’t have to start with a <em>grand plan.</em></h2>
        <p>It can start with noticing what feels heavy, what feels hopeful, and what you’ve been setting aside. Coaching isn’t about being told who to become. It’s a conversation that helps you hear your own answers more clearly.</p>
        <div className="pillars">
          <article className="pillar"><span className="pillar-num">01</span><div><h3>Make room for clarity</h3><p>Slow the noise and name what’s really asking for your attention.</p></div></article>
          <article className="pillar"><span className="pillar-num">02</span><div><h3>Reconnect with what matters</h3><p>Explore your values, your needs, and the kind of life you want to shape.</p></div></article>
          <article className="pillar"><span className="pillar-num">03</span><div><h3>Choose a next step</h3><p>Find a practical way forward that feels meaningful and manageable to you.</p></div></article>
        </div>
      </div>
    </section>
    <section className="section process" id="how-it-works">
      <div className="section-kicker">A simple way to begin</div><h2>Start with where you are.<br /><em>Go one step at a time.</em></h2>
      <p className="process-lead">There’s no perfect starting point. Coaching can be a thoughtful place to explore a question, a transition, or simply the feeling that something needs to change.</p>
      <div className="steps">
        <article className="step"><span className="step-no">01</span><h3>Notice</h3><p>Get curious about what’s happening now—without needing to judge it or solve everything at once.</p></article>
        <article className="step"><span className="step-no">02</span><h3>Explore</h3><p>Talk through what matters to you, what might be in the way, and what you’d like to feel more of.</p></article>
        <article className="step"><span className="step-no">03</span><h3>Move gently</h3><p>Consider a next step that fits your life today. Your direction and pace remain yours to choose.</p></article>
      </div>
    </section>
    <section className="section truth">
      <div><div className="section-kicker" style={{ color: '#edc75e' }}>A note on coaching</div><h2>Supportive, practical, and centered on <em>you.</em></h2></div>
      <div className="truth-copy"><p>Life coaching is a collaborative process for reflection, goal-setting, and personal growth. A coach may ask questions, listen, and help you consider options and actions that align with your own priorities.</p><p>It isn’t therapy, medical care, or a promise of specific results. If you need mental-health support, a licensed professional can help you find care suited to your needs.</p><div className="truth-note">No fixing. No one-size-fits-all path. Just a place to begin.</div></div>
    </section>
    <section className="section faq" id="questions">
      <div className="faq-intro"><div className="section-kicker">Good to know</div><h2>A few things you might be <em>wondering.</em></h2><p>It’s okay to have questions before taking a next step. Here are a few starting points.</p><Link className="text-link" href="/faq" data-testid="link-home-faq">Visit all questions</Link></div>
      <div className="faq-list">
        <details><summary data-testid="faq-home-question-1">What kinds of things can coaching help me explore?</summary><p>People bring many kinds of questions to coaching: transitions, confidence, boundaries, goals, or a desire to feel more aligned with their choices. Your priorities shape the conversation.</p></details>
        <details><summary data-testid="faq-home-question-2">Do I need a clear goal before I begin?</summary><p>No. You can arrive with a question, a feeling, or simply a sense that you’re ready for something to shift. Getting clearer can be part of the process.</p></details>
        <details><summary data-testid="faq-home-question-3">What happens in a coaching conversation?</summary><p>Coaching is generally a collaborative conversation. You bring what’s on your mind; together, you can reflect, explore possibilities, and consider actions that feel right for you.</p></details>
      </div>
    </section>
    <section className="section cta" id="begin">
      <div className="section-kicker">Your next chapter can start quietly</div><h2>You don’t need the whole map.<br /><em>Just a place to begin.</em></h2>
      <p>Take a moment with the approach, return to a question that stayed with you, or simply let the idea settle. Your next step belongs to you.</p>
      <Link className="button" href="/contact" data-testid="link-home-contact">Explore a next step <ArrowDown size={15} /></Link>
      <p className="cta-small">Contact and booking details are a template to complete before publishing.</p>
    </section>
  </main>;
}
