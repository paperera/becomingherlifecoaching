import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return <main className="inner-page">
    <section className="inner-hero about-hero">
      <div className="inner-copy"><div className="eyebrow">A little about the person beside you</div><h1>Meet <em>Melanie Abney.</em></h1><p>A thoughtful place to share the story behind Becoming Her—and the values that guide the work.</p></div>
      <div className="inner-image"><img src="/threshold-still-life.png" alt="A sunlit threshold with a flowering branch" width="1024" height="768" /></div>
    </section>
    <section className="section story-grid">
      <div><div className="section-kicker">Melanie’s story</div><h2>Make this space <em>your own.</em></h2></div>
      <div className="story-copy">
        <p className="template-note"><strong>Template prompt — replace before publishing.</strong> Add Melanie’s verified personal story here, in her own words. Share only details she has approved for public use.</p>
        <p><strong>What brought you to this work?</strong><br />[Add a concise, truthful account of Melanie’s path to life coaching.]</p>
        <p><strong>What matters in your approach?</strong><br />[Describe the values and boundaries Melanie actually brings to coaching.]</p>
      </div>
    </section>
    <section className="section values-band"><div className="section-kicker">The feeling we’re making room for</div><h2>Curiosity over judgment.<br /><em>Progress at your pace.</em></h2><p>These are guiding ideas for this site—not claims about a specific outcome. Replace or refine them to reflect Melanie’s real practice.</p></section>
    <section className="section credentials">
      <div className="credential-number">01</div><div><div className="section-kicker">Background & training</div><h2>Only the <em>verified details.</em></h2><p className="template-note"><strong>Template prompt:</strong> List relevant education, training, credentials, memberships, or experience only after confirming names, dates, and current status. Remove this prompt when verified content is ready.</p></div>
    </section>
    <section className="section cta"><div className="section-kicker">Continue exploring</div><h2>Start with what feels <em>right.</em></h2><p>Learn what life coaching can involve, or browse a few answers before deciding whether to reach out.</p><Link className="button" href="/coaching" data-testid="link-about-coaching">Explore coaching <ArrowRight size={15} /></Link></section>
  </main>;
}
