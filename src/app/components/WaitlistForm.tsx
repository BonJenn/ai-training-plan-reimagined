"use client";

import { ArrowRight, Check, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="waitlist-success" role="status">
        <span><Check size={22} /></span>
        <div>
          <strong>You&apos;re on the early-access list.</strong>
          <p>We&apos;ll send the next beta opening your way.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <div className="email-field">
        <Mail size={18} aria-hidden="true" />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <button type="submit" aria-label="Join the beta">
          Join beta <ArrowRight size={17} />
        </button>
      </div>
      <p>No credit card. No data lock-in. Just a better training week.</p>
    </form>
  );
}
