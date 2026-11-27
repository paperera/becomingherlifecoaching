import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const ACCESS_CODE = 'nyana';
const ACCESS_SESSION_KEY = 'becoming-her-access-granted';

export function ComingSoonPage({ onUnlock }: { onUnlock: () => void }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passcode.trim().toLowerCase() !== ACCESS_CODE) {
      setError('That code didn’t open the door. Please try again.');
      return;
    }

    window.sessionStorage.setItem(ACCESS_SESSION_KEY, 'granted');
    onUnlock();
  };

  return (
    <main className="coming-soon">
      <section className="coming-soon-card" aria-labelledby="coming-soon-title">
        <img
          className="coming-soon-logo"
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Becoming Her butterfly logo"
          width="88"
          height="88"
        />
        <div className="coming-soon-brand">Becoming Her Life Coaching</div>
        <p className="coming-soon-eyebrow">A new chapter is taking shape</p>
        <h1 id="coming-soon-title">A little more room to <em>become.</em></h1>
        <p className="coming-soon-copy">
          We’re thoughtfully preparing a welcoming space for women considering
          what comes next. The full site will be here soon.
        </p>
        <div className="coming-soon-divider" aria-hidden="true"><span /></div>
        <form className="coming-soon-form" onSubmit={handleSubmit}>
          <label htmlFor="coming-soon-passcode">Have an access code?</label>
          <div className="coming-soon-form-row">
            <input
              id="coming-soon-passcode"
              type="password"
              autoComplete="current-password"
              value={passcode}
              onChange={(event) => {
                setPasscode(event.target.value);
                setError('');
              }}
              aria-describedby="coming-soon-error"
              required
            />
            <button type="submit">
              Enter <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
          <p className="coming-soon-error" id="coming-soon-error" role="status" aria-live="polite">
            {error}
          </p>
        </form>
        <p className="coming-soon-note">A thoughtful space is on its way.</p>
      </section>
    </main>
  );
}
