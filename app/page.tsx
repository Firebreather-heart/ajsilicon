"use client"

import { useState } from "react"

const nav = [
  ["Overview", "⌂"], ["My programmes", "▣"], ["Live classes", "◉"], ["Practice hub", "◒"], ["Progress", "↗"], ["Certificates", "◇"], ["Notifications", "○"], ["Help centre", "?"],
]
const programmeNav = ["Programme home", "Lessons", "Documents", "Recordings", "Exams"]

export default function Home() {
  const [active, setActive] = useState("Overview")
  const [programmeTab, setProgrammeTab] = useState("Programme home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const isProgramme = active === "My programmes"

  return <div className="app-shell">
    <header className="topbar">
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">☰</button>
      <div className="brand"><span className="brand-plate">A.J.</span><div><b>Silicon</b><small>Learning platform</small></div></div>
      <div className="top-context"><span>Enterprise Learning Platform</span><i>|</i><em>Lagos Campus · WAT</em></div>
      <div className="top-actions"><button aria-label="Notifications" className="icon-btn">♧<span className="dot" /></button><div className="profile"><span className="avatar">CE</span><span><b>Chinedu Eze</b><small>CISA Cohort 14</small></span><span>⌄</span></div></div>
    </header>
    <div className="layout">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="side-label">STUDENT WORKSPACE</div>
        <nav>{nav.map(([label, icon]) => <button key={label} className={active === label ? "nav-item active" : "nav-item"} onClick={() => { setActive(label); setMenuOpen(false) }}><span className="nav-icon">{icon}</span>{label}{label === "Notifications" && <span className="nav-badge">3</span>}</button>)}</nav>
        <div className="side-bottom"><div className="side-label">ACCOUNT</div><button className="nav-item" onClick={() => setActive("Settings")}><span className="nav-icon">⚙</span>Settings</button><button className="nav-item"><span className="nav-icon">↪</span>Sign out</button></div>
      </aside>
      <main className="main-content">
        <div className="breadcrumb">Home <span>/</span> {isProgramme ? "My programmes" : active}</div>
        {isProgramme ? <Programme tab={programmeTab} setTab={setProgrammeTab} /> : active === "Settings" ? <Settings /> : <Dashboard active={active} showAll={showAll} setShowAll={setShowAll} />}
      </main>
    </div>
  </div>
}

function Dashboard({ active, showAll, setShowAll }: { active: string; showAll: boolean; setShowAll: (v:boolean)=>void }) {
  if (active !== "Overview") return <div className="page-heading"><div><span className="eyebrow">STUDENT WORKSPACE</span><h1>{active}</h1><p>Everything you need to keep your learning moving forward.</p></div><button className="button primary">{active === "Live classes" ? "View calendar" : "Explore"}</button><div className="empty-panel"><div className="empty-icon">{active === "Notifications" ? "○" : "◇"}</div><h2>{active === "Notifications" ? "You’re all caught up" : `${active} overview`}</h2><p>Your activity and resources will appear here as you continue your learning journey.</p></div></div>
  return <>
    <section className="welcome"><div><span className="eyebrow">MONDAY, 05 OCTOBER 2026 · WAT</span><h1>Good morning, Chinedu</h1><p>Pick up where you left off or explore what’s next in your learning journey.</p></div><div className="quick-status"><span className="status-dot" />All systems operational</div></section>
    <section className="notice"><span className="notice-icon">i</span><div><b>Your CISA exam window opens in 18 days</b><p>Stay on track with your revision plan and complete your outstanding practice questions.</p></div><button>View exam plan →</button></section>
    <div className="section-head"><div><span className="eyebrow">CONTINUE LEARNING</span><h2>Active programme</h2></div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? "Show less" : "View all programmes"} →</button></div>
    <section className="programme-card"><div className="programme-accent" /><div className="programme-content"><div className="card-top"><div><span className="tag green">ACTIVE</span><span className="mono">COHORT 14 · 2026</span></div><button className="kebab">•••</button></div><h3>CISA Exam Preparation</h3><p className="muted">Certified Information Systems Auditor · Lagos Academic Hub</p><div className="progress-row"><div><span className="progress-label">Programme progress</span><strong>42%</strong></div><div className="progress-track"><span style={{width:"42%"}} /></div><small>8 of 19 modules completed</small></div><button className="button primary">Continue programme <span>→</span></button></div><div className="programme-meta"><div><span>Next up</span><b>IT Governance &amp; Management</b><small>Module 09 · 35 min read</small></div><div className="next-arrow">→</div></div></section>
    <div className="grid-2"><section className="card"><div className="section-head compact"><div><span className="eyebrow">UPCOMING</span><h2>Live classes</h2></div><button className="text-button">Calendar →</button></div><div className="class-row"><div className="date-box"><b>08</b><span>OCT</span></div><div><b>Revision Clinic: Information Security</b><p>Thursday · 17:00 WAT · 60 min</p><span className="tag blue">REGISTERED</span></div><button className="icon-btn">→</button></div><div className="class-row"><div className="date-box"><b>12</b><span>OCT</span></div><div><b>Ask the Faculty: CISA Exam Strategy</b><p>Monday · 16:00 WAT · 45 min</p></div><button className="icon-btn">→</button></div></section><section className="card"><div className="section-head compact"><div><span className="eyebrow">YOUR ACTIVITY</span><h2>At a glance</h2></div><button className="text-button">Progress →</button></div><div className="stats"><div><strong>68%</strong><span>Practice score</span><small className="up">↑ 8% this week</small></div><div><strong>12.5h</strong><span>Learning time</span><small>Last 30 days</small></div><div><strong>18</strong><span>Day streak</span><small className="up">Personal best</small></div></div></section></div>
    <section className="card activity"><div className="section-head compact"><div><span className="eyebrow">RECENT ACTIVITY</span><h2>Keep building momentum</h2></div><button className="text-button">See history →</button></div>{["Completed Module 08: Information Systems Operations","Scored 78% in Practice Set: Domain 2","Downloaded CISA Candidate Guide 2026"].map((item,i)=><div className="activity-row" key={item}><span className={`activity-dot dot-${i}`} /><div><b>{item}</b><p>{i === 0 ? "Today · 09:42 WAT" : i === 1 ? "Yesterday · 18:10 WAT" : "02 Oct 2026 · 14:26 WAT"}</p></div><span className="activity-arrow">→</span></div>)}</section>
  </>
}

function Programme({ tab, setTab }: { tab: string; setTab: (v:string)=>void }) { return <><div className="page-heading"><div><span className="eyebrow">MY PROGRAMME</span><h1>CISA Exam Preparation</h1><p>Certified Information Systems Auditor · Cohort 14</p></div><button className="button primary">Resume learning →</button></div><div className="programme-tabs">{programmeNav.map(item => <button className={tab === item ? "selected" : ""} onClick={() => setTab(item)} key={item}>{item}</button>)}</div>{tab === "Programme home" ? <div className="programme-hero"><div><span className="tag green">IN PROGRESS</span><h2>Build the confidence to pass your CISA exam.</h2><p>Work through the five domains, test your knowledge, and stay connected with your faculty.</p><button className="button primary">Continue at Module 09 →</button></div><div className="hero-progress"><strong>42%</strong><span>programme complete</span><div className="progress-track"><span style={{width:"42%"}} /></div><small>8 of 19 modules</small></div></div> : <div className="card"><h2>{tab}</h2><p className="muted">Your {tab.toLowerCase()} will be available here.</p></div>}</> }

function Settings() { return <div className="page-heading"><div><span className="eyebrow">ACCOUNT</span><h1>Settings</h1><p>Manage your account preferences and security.</p></div><div className="settings-layout"><div className="settings-nav"><button className="selected">Profile</button><button>Notifications</button><button>Security &amp; devices</button><button>Billing &amp; licences</button></div><div className="card settings-card"><span className="eyebrow">PROFILE DETAILS</span><h2>Personal information</h2><div className="form-grid"><label>First name<input defaultValue="Chinedu" /></label><label>Last name<input defaultValue="Eze" /></label><label>Email address<input defaultValue="chinedu.eze@example.com" /></label><label>Timezone<select defaultValue="WAT"><option>West Africa Time (WAT)</option></select></label></div><button className="button primary">Save changes</button></div></div></div> }
