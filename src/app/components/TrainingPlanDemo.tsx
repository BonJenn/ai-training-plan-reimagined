"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Clock3,
  HeartPulse,
  MoonStar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

type Readiness = "fresh" | "balanced" | "fatigued";

const states = {
  fresh: {
    label: "Fresh",
    score: 86,
    workout: "Threshold builder",
    detail: "5 x 6 min at 10K effort",
    duration: "58 min",
    load: "72",
    risk: "Low",
    note: "Recovery is strong. Keep the full quality session.",
    trend: "up",
    breakdown: ["12m warm-up", "30m quality", "16m cool-down"],
    bars: [42, 58, 36, 72, 48, 64, 28],
    days: ["Easy", "Build", "Rest", "Tempo", "Easy", "Long", "Rest"],
  },
  balanced: {
    label: "Balanced",
    score: 72,
    workout: "Controlled threshold",
    detail: "4 x 6 min at 10K effort",
    duration: "49 min",
    load: "61",
    risk: "Low",
    note: "Sleep dipped slightly. One interval removed, goal preserved.",
    trend: "flat",
    breakdown: ["12m warm-up", "24m quality", "13m cool-down"],
    bars: [42, 58, 30, 61, 42, 58, 24],
    days: ["Easy", "Build", "Rest", "Tempo", "Easy", "Long", "Rest"],
  },
  fatigued: {
    label: "Fatigued",
    score: 48,
    workout: "Aerobic reset",
    detail: "Easy run + 4 relaxed strides",
    duration: "36 min",
    load: "34",
    risk: "Watch",
    note: "Fatigue is elevated. Quality moves to Friday after recovery.",
    trend: "down",
    breakdown: ["8m easy", "20m aerobic", "8m strides"],
    bars: [34, 38, 22, 30, 64, 52, 20],
    days: ["Easy", "Reset", "Rest", "Easy", "Tempo", "Long", "Rest"],
  },
} as const;

export function TrainingPlanDemo() {
  const [readiness, setReadiness] = useState<Readiness>("balanced");
  const [showDetails, setShowDetails] = useState(false);
  const current = states[readiness];

  return (
    <div className="plan-demo">
      <div className="demo-topbar">
        <div className="demo-athlete">
          <span>JB</span>
          <div>
            <small>WEDNESDAY, JUL 15</small>
            <strong>Good evening, Jonathan</strong>
          </div>
        </div>
        <span className="demo-live"><i /> LIVE</span>
      </div>

      <div className="readiness-control">
        <div>
          <span className="control-label">Set today&apos;s readiness</span>
          <div className="segmented-control" aria-label="Readiness level">
            {(Object.keys(states) as Readiness[]).map((key) => (
              <button
                className={readiness === key ? "active" : ""}
                key={key}
                onClick={() => setReadiness(key)}
                type="button"
                aria-pressed={readiness === key}
              >
                {states[key].label}
              </button>
            ))}
          </div>
        </div>
        <div className={`readiness-score score-${readiness}`}>
          <span>{current.score}</span>
          <small>READY</small>
        </div>
      </div>

      <div className="plan-main-grid">
        <div className="today-session">
          <div className="card-label"><Activity size={15} /> TODAY&apos;S SESSION</div>
          <h3>{current.workout}</h3>
          <p>{current.detail}</p>
          <div className="session-stats">
            <span><Clock3 size={16} /> {current.duration}</span>
            <span><HeartPulse size={16} /> Load {current.load}</span>
          </div>
          <div
            className={`session-detail-row ${showDetails ? "visible" : ""}`}
            aria-hidden={!showDetails}
          >
            {current.breakdown.map((item) => <span key={item}>{item}</span>)}
          </div>
          <button
            type="button"
            className="session-button"
            onClick={() => setShowDetails((visible) => !visible)}
            aria-expanded={showDetails}
          >
            {showDetails ? "Hide details" : "View session"} <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="signal-stack">
          <div className="signal-card">
            <div><MoonStar size={17} /><span>Recovery</span></div>
            <strong>{current.label}</strong>
          </div>
          <div className="signal-card">
            <div><ShieldCheck size={17} /><span>Injury risk</span></div>
            <strong>{current.risk}</strong>
          </div>
          <div className="signal-card">
            <div><BrainCircuit size={17} /><span>Plan change</span></div>
            <strong>{readiness === "fresh" ? "None" : readiness === "balanced" ? "1 edit" : "2 edits"}</strong>
          </div>
        </div>
      </div>

      <div className="coach-note">
        <span><Sparkles size={17} /></span>
        <div>
          <small>COACH CONSENSUS</small>
          <p>{current.note}</p>
        </div>
        {current.trend === "up" ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
      </div>

      <div className="week-card">
        <div className="week-heading">
          <div>
            <small>WEEKLY LOAD</small>
            <strong>{readiness === "fresh" ? "310" : readiness === "balanced" ? "286" : "249"} TSS</strong>
          </div>
          <span><Check size={14} /> Goal on track</span>
        </div>
        <div className="week-bars">
          {current.bars.map((height, index) => (
            <div className="bar-day" key={`${readiness}-${index}`}>
              <div className="bar-track">
                <span style={{ height: `${height}%` }} />
              </div>
              <small>{["M", "T", "W", "T", "F", "S", "S"][index]}</small>
            </div>
          ))}
        </div>
        <div className="week-labels">
          {current.days.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
        </div>
      </div>
    </div>
  );
}
