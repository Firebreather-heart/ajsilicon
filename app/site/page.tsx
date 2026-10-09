'use client'

import { useState } from 'react'

const programmes = [
  { code: 'ISACA / CGEIT', title: 'Certified in the Governance of Enterprise IT', detail: 'Lead digital governance with confidence', tone: 'blue' },
  { code: 'ISACA / CRISC', title: 'Risk and Information Systems Control', detail: 'Turn uncertainty into informed action', tone: 'dark' },
  { code: 'A.J. SILICON', title: 'IT Governance Leadership Programme', detail: 'Build the capability your organisation needs', tone: 'lime' },
]

export default function PublicWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell" suppressHydrationWarning>
      <header className="site-nav">
        <div className="site-nav-inner">
          <a className="site-logo" href="#top" aria-label="A.J. Silicon home"><span>A.J.</span><b>Silicon</b></a>
          <nav className={menuOpen ? 'site-links open' : 'site-links'} aria-label="Main navigation">
            <a href="#programmes" onClick={() => setMenuOpen(false)}>Programmes</a>
            <a href="#enterprise" onClick={() => setMenuOpen(false)}>Enterprise Training</a>
            <a href="#verification" onClick={() => setMenuOpen(false)}>Certificate Verification</a>
            <a href="#methodology" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="verify-link" href="#verification">Verify Certificate</a>
            <a className="login-link" href="/screens/05_log_in.html">Log in</a>
            <a className="apply-button" href="#programmes">Explore programmes</a>
            <button className="menu-button" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">PROFESSIONAL CERTIFICATION AND IT GOVERNANCE</p>
            <h1>Make better decisions.<br /><em>Build what lasts.</em></h1>
            <p className="hero-text">Practical learning for the people responsible for technology, risk and governance. Gain the clarity to lead with confidence in a changing world.</p>
            <div className="hero-actions"><a className="primary-button" href="#programmes">View programmes <span>→</span></a><a className="text-button" href="#methodology">How we teach <span>↗</span></a></div>
            <div className="hero-proof"><span className="proof-mark">✓</span><span><b>Trusted by ambitious teams</b><small>Designed for work, not just exams</small></span></div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of connected systems">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="art-core"><span>AJ</span><small>GOVERNANCE<br />IN MOTION</small></div>
            <span className="node node-a">RISK</span><span className="node node-b">PEOPLE</span><span className="node node-c">SYSTEMS</span>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div><span>Built for people who own the outcome.</span><b>Governance</b><b>Risk</b><b>Technology</b><b>Leadership</b></div></section>

      <section className="programmes section" id="programmes">
        <div className="section-heading"><div><p className="kicker">LEARNING THAT MOVES WITH YOU</p><h2>Choose your next<br /><em>meaningful step.</em></h2></div><p>Whether you are preparing for certification or building capability across a team, every programme connects the standard to the work.</p></div>
        <div className="programme-grid">{programmes.map((programme) => <article className={`programme-card ${programme.tone}`} key={programme.title}><div className="card-top"><span>{programme.code}</span><span>↗</span></div><div><h3>{programme.title}</h3><p>{programme.detail}</p></div><a href="/screens/14_programme_detail.html">View programme <span>→</span></a></article>)}</div>
      </section>

      <section className="method section" id="methodology"><div className="method-visual"><span className="visual-label">01 / PRACTICE</span><div className="visual-lines"><i /><i /><i /></div><strong>LEARN<br />IN CONTEXT.</strong></div><div className="method-copy"><p className="kicker">A DIFFERENT KIND OF CLASSROOM</p><h2>Less theory.<br /><em>More judgement.</em></h2><p>We turn frameworks into decisions you can make on Monday morning. Our learning blends expert instruction, honest case studies and deliberate practice.</p><a className="text-button" href="#enterprise">Discover our approach <span>↗</span></a></div></section>

      <section className="enterprise section" id="enterprise"><div><p className="kicker">FOR ORGANISATIONS</p><h2>Capability is your<br /><em>competitive edge.</em></h2></div><div className="enterprise-panel"><p>Build a common language for risk and technology. Equip your teams with practical capability that scales from one leader to your whole organisation.</p><a className="primary-button" href="/screens/15_corporate_training_enquiry.html">Talk to our team <span>→</span></a></div></section>

      <section className="verification section" id="verification"><div><p className="kicker">CERTIFICATE VERIFICATION</p><h2>Proof that<br /><em>travels with you.</em></h2></div><form className="verification-form" onSubmit={(event) => event.preventDefault()}><label htmlFor="certificate">Enter a certificate number</label><div><input id="certificate" placeholder="e.g. AJS-2025-0001" /><button type="submit">Verify <span>→</span></button></div><small>Verification is public and does not require an account.</small></form></section>

      <footer className="site-footer" id="contact"><div className="footer-top"><a className="site-logo footer-logo" href="#top"><span>A.J.</span><b>Silicon</b></a><p>Professional certification and IT governance training for people building what lasts.</p><div className="footer-links"><a href="#programmes">Programmes</a><a href="#enterprise">Enterprise</a><a href="#verification">Verification</a><a href="/screens/18_contact.html">Contact</a></div></div><div className="footer-bottom"><span>© 2025 A.J. Silicon. All rights reserved.</span><span>Privacy   Terms</span></div></footer>

      <style jsx>{` .site-shell{background:#faf8ff;color:#131b2e;min-height:100vh;font-family:Arial,sans-serif}.site-nav{height:68px;background:#141c29;color:#fff;position:sticky;top:0;z-index:20;border-bottom:1px solid #3f4756}.site-nav-inner{max-width:1280px;margin:auto;height:100%;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:24px}.site-logo{display:flex;align-items:center;gap:8px;color:#fff;text-decoration:none;font-size:18px;letter-spacing:-.04em}.site-logo span{background:#fff;color:#141c29;padding:5px 7px;border-radius:3px;font-size:14px;font-weight:700}.site-logo b{font-weight:500}.site-links{display:flex;gap:4px;margin-right:auto;margin-left:26px}.site-links a,.login-link,.verify-link{color:#c5cbd8;text-decoration:none;padding:10px 11px;font-size:13px}.site-links a:hover,.login-link:hover{color:#fff}.nav-actions{display:flex;align-items:center;gap:7px}.verify-link{color:#93c5fd}.apply-button,.primary-button{background:#000;color:#fff;padding:13px 17px;text-decoration:none;font-size:13px;display:inline-flex;gap:15px;align-items:center}.apply-button{background:#dbe2f5;color:#141c29;padding:11px 14px}.menu-button{display:none;background:none;color:white;border:0;font-size:24px}.hero{background:#141c29;color:#fff;min-height:580px;display:flex;align-items:center}.hero-inner{max-width:1280px;width:100%;margin:auto;padding:80px 28px;display:flex;justify-content:space-between;align-items:center;gap:50px}.hero-copy{max-width:650px}.kicker{font-size:11px;letter-spacing:.16em;font-weight:700;color:#61708a;margin:0 0 18px}.hero .kicker{color:#93a8c9}.hero h1,.section h2{font-size:clamp(42px,6vw,78px);line-height:.98;letter-spacing:-.07em;margin:0;font-weight:600}.hero h1 em,.section h2 em{font-style:normal;color:#c7f36b}.hero-text{font-size:18px;line-height:1.55;color:#b6c0d0;max-width:550px;margin:28px 0}.hero-actions{display:flex;align-items:center;gap:20px}.text-button{color:inherit;text-decoration:none;font-size:13px}.text-button span{margin-left:9px}.hero-proof{display:flex;gap:10px;align-items:center;margin-top:65px;color:#d4dae4}.proof-mark{background:#c7f36b;color:#141c29;width:25px;height:25px;border-radius:50%;display:grid;place-items:center;font-size:13px}.hero-proof b,.hero-proof small{display:block}.hero-proof small{font-size:11px;color:#8491a6;margin-top:3px}.hero-art{width:430px;height:430px;position:relative;flex:none}.orbit{position:absolute;border:1px solid #435470;border-radius:50%;inset:55px 0;transform:rotate(35deg)}.orbit-two{inset:0 55px;transform:rotate(-35deg)}.orbit-three{inset:35px;transform:rotate(90deg);border-color:#607b9d}.art-core{position:absolute;inset:145px;border-radius:50%;background:#c7f36b;color:#141c29;display:grid;place-items:center;text-align:center}.art-core span{font-size:40px;font-weight:700;letter-spacing:-.1em}.art-core small{font-size:9px;letter-spacing:.12em;font-weight:700;margin-top:-35px}.node{position:absolute;background:#202e46;border:1px solid #607b9d;padding:7px 9px;font-size:9px;letter-spacing:.12em;color:#dbe2f5}.node-a{top:34px;right:40px}.node-b{bottom:43px;left:10px}.node-c{bottom:96px;right:4px}.trust-strip{background:#dbe2f5;color:#141c29}.trust-strip>div{max-width:1280px;margin:auto;padding:20px 28px;display:flex;align-items:center;gap:30px;font-size:13px}.trust-strip b{font-size:12px;letter-spacing:.08em}.section{max-width:1280px;margin:auto;padding:105px 28px}.section-heading{display:flex;justify-content:space-between;gap:50px;align-items:end;margin-bottom:46px}.section-heading>p{max-width:340px;color:#596274;line-height:1.6;font-size:15px}.section h2{font-size:52px}.programme-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.programme-card{min-height:330px;padding:25px;display:flex;flex-direction:column;justify-content:space-between}.programme-card.blue{background:#dbe2f5}.programme-card.dark{background:#141c29;color:#fff}.programme-card.lime{background:#c7f36b}.card-top{display:flex;justify-content:space-between;font-size:10px;letter-spacing:.12em;font-weight:700}.programme-card h3{font-size:28px;line-height:1.05;letter-spacing:-.05em;max-width:260px;margin:0 0 9px}.programme-card p{font-size:13px;color:#657086}.dark p{color:#b6c0d0}.programme-card a{color:inherit;text-decoration:none;font-size:12px;font-weight:700}.programme-card a span{margin-left:12px}.method{display:grid;grid-template-columns:1.05fr 1fr;gap:100px;align-items:center}.method-visual{height:420px;background:#141c29;color:#c7f36b;position:relative;padding:28px;overflow:hidden}.visual-label{font-size:10px;letter-spacing:.12em;color:#93a8c9}.visual-lines{position:absolute;inset:85px 0 0 -35px;display:flex;gap:25px;transform:rotate(-25deg)}.visual-lines i{display:block;width:42px;height:430px;background:#273a59}.method-visual strong{position:absolute;bottom:28px;left:28px;font-size:42px;letter-spacing:-.07em;line-height:.9}.method-copy p:not(.kicker){color:#596274;line-height:1.7;max-width:450px;margin:25px 0 30px}.enterprise{background:#dbe2f5;max-width:none;padding-left:max(28px,calc((100% - 1224px)/2));padding-right:max(28px,calc((100% - 1224px)/2));display:flex;justify-content:space-between;gap:60px;align-items:end}.enterprise-panel{max-width:390px}.enterprise-panel p{font-size:17px;line-height:1.55;margin:0 0 25px}.verification{display:flex;justify-content:space-between;align-items:end;gap:60px}.verification-form{width:430px}.verification-form label{display:block;font-size:13px;font-weight:700;margin-bottom:9px}.verification-form>div{display:flex}.verification-form input{flex:1;border:1px solid #aeb7c6;background:#fff;padding:14px;font:inherit}.verification-form button{border:0;background:#141c29;color:#fff;padding:0 18px}.verification-form small{display:block;color:#70798a;font-size:11px;margin-top:10px}.site-footer{background:#141c29;color:#fff;padding:55px max(28px,calc((100% - 1224px)/2)) 25px}.footer-top{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:50px;padding-bottom:55px}.footer-top p{color:#aeb8c9;line-height:1.6;font-size:13px;max-width:250px}.footer-links{display:grid;gap:12px}.footer-links a{color:#c8d0dd;text-decoration:none;font-size:13px}.footer-bottom{border-top:1px solid #3f4756;padding-top:18px;display:flex;justify-content:space-between;color:#7f8a9d;font-size:11px}@media(max-width:800px){.site-nav-inner{padding:0 18px}.site-links{display:none;position:absolute;top:68px;left:0;right:0;margin:0;padding:15px 18px;background:#141c29;border-bottom:1px solid #3f4756;flex-direction:column}.site-links.open{display:flex}.verify-link,.login-link{display:none}.apply-button{display:none}.menu-button{display:block}.hero-inner{padding:65px 22px;display:block}.hero-art{width:270px;height:270px;margin:55px auto 0}.art-core{inset:90px}.art-core span{font-size:28px}.art-core small{font-size:7px}.hero-text{font-size:16px}.hero-proof{margin-top:38px}.trust-strip>div{padding:18px 22px;gap:17px;flex-wrap:wrap}.trust-strip span{width:100%}.section{padding:70px 22px}.section-heading,.method,.enterprise,.verification{display:block}.section-heading>p{margin-top:25px}.section h2{font-size:43px}.programme-grid{grid-template-columns:1fr}.programme-card{min-height:260px}.method-visual{height:300px;margin-bottom:38px}.method-visual strong{font-size:34px}.enterprise-panel{margin-top:30px}.verification-form{width:auto;margin-top:32px}.footer-top{grid-template-columns:1fr;gap:24px}.footer-bottom{gap:14px;flex-direction:column}.hero-actions{flex-wrap:wrap}}`}</style>
    </main>
  )
}
