import Image from "next/image";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bike,
  Bot,
  BrainCircuit,
  CalendarSync,
  Check,
  ChevronRight,
  CircleGauge,
  CloudSun,
  Database,
  Dumbbell,
  Footprints,
  HeartPulse,
  LockKeyhole,
  Menu,
  MessageCircleMore,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Waves,
  Watch,
  Zap,
} from "lucide-react";
import { TrainingPlanDemo } from "./components/TrainingPlanDemo";
import { WaitlistForm } from "./components/WaitlistForm";

const problems = [
  {
    quote: "My plan falls apart when I miss one workout.",
    title: "A week that can move",
    copy: "Sessions shift around travel, fatigue, and real life without losing sight of your goal.",
    icon: CalendarSync,
  },
  {
    quote: "I have data everywhere, but no clear answer.",
    title: "One view of your fitness",
    copy: "Training, recovery, sleep, and health signals come together before the plan changes.",
    icon: Database,
  },
  {
    quote: "I never know whether to push or back off.",
    title: "Decisions you can understand",
    copy: "See what changed, why it changed, and what your next session is meant to accomplish.",
    icon: CircleGauge,
  },
];

const dataSources = [
  { name: "Garmin", detail: "Recovery + workouts", icon: Watch, tone: "blue" },
  { name: "Strava", detail: "Training history", icon: Activity, tone: "coral" },
  { name: "Apple Health", detail: "Sleep + vitals", icon: HeartPulse, tone: "mint" },
  { name: "Intervals.icu", detail: "Fitness + fatigue", icon: CircleGauge, tone: "violet" },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    copy: "Bring your training and recovery data into one athlete profile.",
  },
  {
    number: "02",
    title: "Understand",
    copy: "Independent AI coaches analyze the same signals from different angles.",
  },
  {
    number: "03",
    title: "Adapt",
    copy: "Your week updates as your fitness, fatigue, and schedule change.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI Training Plan home">
          <span className="brand-mark" aria-hidden="true">
            <Activity size={20} strokeWidth={2.5} />
          </span>
          <span>
            <strong>AI TRAINING</strong>
            <small>PLAN</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#why">Why it works</a>
          <a href="#demo">Live demo</a>
          <a href="#how">How it works</a>
        </nav>

        <div className="header-actions">
          <a className="text-link desktop-only" href="#demo">
            Product tour
          </a>
          <a className="button button-dark button-small" href="#waitlist">
            Join the beta <ArrowRight size={16} />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <Menu size={22} />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#why">Why it works</a>
              <a href="#demo">Live demo</a>
              <a href="#how">How it works</a>
              <a href="#waitlist">Join the beta</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/endurance-dawn.webp"
          alt="An endurance athlete running on a mountain road at dawn"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <div className="hero-copy">
            <div className="beta-label">
              <span /> Private beta open
            </div>
            <h1>
              Training that changes
              <br />
              <em>when your life does.</em>
            </h1>
            <p>
              One adaptive plan built from your workouts, recovery, schedule,
              and goals. Know what to do today and why it matters.
            </p>
            <div className="hero-actions">
              <a className="button button-acid" href="#waitlist">
                Build my plan <ArrowRight size={18} />
              </a>
              <a className="button button-ghost" href="#demo">
                See it adapt <ArrowDown size={18} />
              </a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={17} />
              <span>Your data stays yours. Export or delete it anytime.</span>
            </div>
          </div>

          <div className="hero-signal" aria-label="Current athlete readiness">
            <span className="signal-icon">
              <Zap size={18} fill="currentColor" />
            </span>
            <div>
              <small>Today&apos;s signal</small>
              <strong>Ready to build</strong>
            </div>
            <span className="signal-score">82</span>
          </div>
        </div>
        <div className="sport-rail" aria-label="Supported training modes">
          <span>Built for</span>
          <div><Footprints size={18} /> Run</div>
          <div><Bike size={18} /> Ride</div>
          <div><Waves size={18} /> Swim</div>
          <div><Dumbbell size={18} /> Strength</div>
        </div>
      </section>

      <section className="problem-section section-pad" id="why">
        <div className="page-shell">
          <div className="section-intro split-heading">
            <p className="eyebrow">The plan should fit the athlete</p>
            <h2>Your training app knows your miles. It should know you.</h2>
            <p className="intro-copy">
              Most plans are written once and left behind. AI Training Plan
              keeps reading the signals and rebuilding the week around you.
            </p>
          </div>

          <div className="problem-grid">
            {problems.map(({ quote, title, copy, icon: Icon }) => (
              <article className="problem-card" key={title}>
                <Icon size={24} />
                <blockquote>{quote}</blockquote>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-section section-pad" id="demo">
        <div className="page-shell demo-layout">
          <div className="demo-copy">
            <p className="eyebrow eyebrow-light">Live product preview</p>
            <h2>Your plan should react before your body has to.</h2>
            <p>
              Change the readiness signal and watch the session, weekly load,
              and recovery guidance update together.
            </p>
            <ul className="check-list">
              <li><Check size={18} /> Recovery-aware workouts</li>
              <li><Check size={18} /> Automatic schedule changes</li>
              <li><Check size={18} /> Clear reasons for every adjustment</li>
            </ul>
          </div>
          <TrainingPlanDemo />
        </div>
      </section>

      <section className="data-section section-pad">
        <div className="page-shell data-layout">
          <div className="data-copy">
            <p className="eyebrow">One athlete profile</p>
            <h2>Every signal has a seat at the table.</h2>
            <p>
              Your watch sees the run. Your health app sees the sleep. We put
              the full picture together before changing the plan.
            </p>
            <a className="inline-link" href="#how">
              See how the system thinks <ChevronRight size={17} />
            </a>
          </div>

          <div className="source-board" aria-label="Connected data sources">
            <div className="source-core">
              <span><BrainCircuit size={26} /></span>
              <small>ATHLETE MODEL</small>
              <strong>Always current</strong>
            </div>
            {dataSources.map(({ name, detail, icon: Icon, tone }) => (
              <div className={`source-item source-${tone}`} key={name}>
                <span><Icon size={21} /></span>
                <div>
                  <strong>{name}</strong>
                  <small>{detail}</small>
                </div>
                <Check size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="consensus-section section-pad">
        <div className="page-shell consensus-layout">
          <div className="consensus-visual" aria-label="AI coach consensus preview">
            <div className="coach-line">
              <span className="coach-avatar coach-blue"><Bot size={20} /></span>
              <div>
                <small>LOAD COACH</small>
                <p>Fitness is rising. Keep the quality session.</p>
              </div>
            </div>
            <div className="coach-line">
              <span className="coach-avatar coach-coral"><HeartPulse size={20} /></span>
              <div>
                <small>RECOVERY COACH</small>
                <p>Sleep is down. Reduce the final interval.</p>
              </div>
            </div>
            <div className="consensus-arrow"><RefreshCw size={19} /></div>
            <div className="consensus-result">
              <div>
                <span><Sparkles size={17} /> CONSENSUS</span>
                <h3>Keep the work. Trim the risk.</h3>
                <p>4 x 6 min at threshold, down from 5 reps.</p>
              </div>
              <span className="confidence">92%<small>confidence</small></span>
            </div>
          </div>

          <div className="consensus-copy">
            <p className="eyebrow">More than one opinion</p>
            <h2>Two coaches challenge the plan before you follow it.</h2>
            <p>
              Independent AI models review load, recovery, and goals. Their
              recommendations are combined into one clear session you can
              question, edit, or accept.
            </p>
            <div className="explain-row">
              <MessageCircleMore size={22} />
              <span>
                <strong>Ask why.</strong>
                Every change comes with the reasoning behind it.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section section-pad" id="how">
        <div className="page-shell">
          <div className="section-intro centered-intro">
            <p className="eyebrow">A continuous training loop</p>
            <h2>Connect once. Improve every week.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="loop-line" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="comparison-section section-pad">
        <div className="page-shell">
          <div className="comparison-heading">
            <p className="eyebrow eyebrow-light">Less guessing. More useful training.</p>
            <h2>A living plan, not another static calendar.</h2>
          </div>
          <div className="comparison-table" role="table" aria-label="Training plan comparison">
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">What changes</span>
              <span role="columnheader">Traditional plan</span>
              <span role="columnheader">AI Training Plan</span>
            </div>
            {[
              ["Missed workout", "You figure it out", "Week reshuffles automatically"],
              ["Recovery drops", "Plan stays the same", "Intensity adjusts before training"],
              ["Training data", "Locked in one app", "Your full athlete profile"],
              ["Plan decisions", "Hidden rules", "Clear reasoning you can question"],
            ].map(([label, oldWay, newWay]) => (
              <div className="comparison-row" role="row" key={label}>
                <strong role="cell">{label}</strong>
                <span role="cell">{oldWay}</span>
                <span className="comparison-win" role="cell"><Check size={17} /> {newWay}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section section-pad">
        <div className="page-shell founder-layout">
          <div className="quote-mark">“</div>
          <blockquote>
            I built AI Training Plan because I was tired of switching between
            five apps and still guessing if my training load was right. The
            data was there. The decision wasn&apos;t.
          </blockquote>
          <div className="founder-meta">
            <strong>Thomas Prommer</strong>
            <span>Ironman, ultra runner, software architect</span>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad" id="waitlist">
        <div className="page-shell cta-layout">
          <div>
            <p className="eyebrow">Private beta</p>
            <h2>Bring your training into focus.</h2>
            <p>
              Join the early group helping shape a smarter way to plan, adapt,
              and train.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-main">
          <a className="brand brand-footer" href="#top" aria-label="AI Training Plan home">
            <span className="brand-mark" aria-hidden="true"><Activity size={20} /></span>
            <span><strong>AI TRAINING</strong><small>PLAN</small></span>
          </a>
          <p>Adaptive coaching for athletes who live in the real world.</p>
          <nav aria-label="Footer navigation">
            <a href="#why">Why it works</a>
            <a href="#demo">Live demo</a>
            <a href="#how">How it works</a>
          </nav>
        </div>
        <div className="page-shell footer-bottom">
          <span>© 2026 AI Training Plan</span>
          <div>
            <span><LockKeyhole size={14} /> Private by design</span>
            <span><CloudSun size={14} /> Built for real life</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
