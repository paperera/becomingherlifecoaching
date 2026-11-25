import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const questions = [
  ['What kinds of things can coaching help me explore?', 'People bring many kinds of questions to coaching: transitions, confidence, boundaries, goals, or a desire to feel more aligned with their choices. Your priorities shape the conversation.'],
  ['Do I need a clear goal before I begin?', 'No. You can arrive with a question, a feeling, or simply a sense that you’re ready for something to shift. Getting clearer can be part of the process.'],
  ['What happens in a coaching conversation?', 'Coaching is generally a collaborative conversation. You bring what’s on your mind; together, you can reflect, explore possibilities, and consider actions that feel right for you.'],
  ['Is coaching therapy?', 'No. Coaching is distinct from therapy, medical care, and mental-health treatment. If you need clinical support, contact an appropriately qualified professional.'],
  ['How long are sessions, and what do they cost?', 'Those details have not been confirmed for this template. Add Melanie’s actual session lengths, formats, prices, and any relevant terms before publishing.'],
  ['How can I book or contact Melanie?', 'The contact and booking destination is not set up yet. Visit the contact page for the clearly marked template prompts.'],
];

export default function FaqPage() {
  return <main className="inner-page">
    <section className="faq-page-hero"><div className="section-kicker">Good to know</div><h1>Questions worth <em>asking.</em></h1><p>Clear information can make a next step feel easier. Here are a few starting points.</p></section>
    <section className="section faq faq-page">
      <div className="faq-intro"><div className="section-kicker">Before you decide</div><h2>Take the time you <em>need.</em></h2><p>These general answers describe coaching, not a specific offer. Melanie’s business details should be confirmed before this page goes live.</p></div>
      <div className="faq-list">{questions.map(([question, answer], index) => <details key={question}><summary data-testid={`faq-question-${index + 1}`}>{question}</summary><p>{answer}</p></details>)}</div>
    </section>
    <section className="section cta"><div className="section-kicker">Still wondering?</div><h2>Ask from a place of <em>curiosity.</em></h2><p>The contact destination is a template and needs Melanie’s verified contact or booking information before publication.</p><Link className="button" href="/contact" data-testid="link-faq-contact">View contact template <ArrowRight size={15} /></Link></section>
  </main>;
}
