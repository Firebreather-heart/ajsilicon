"use client"

import { useMemo, useState } from "react"

type Props = { screens: string[] }

const label = (value: string) => value.replace(/[_-]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())

export default function ScreenGallery({ screens }: Props) {
  const [selected, setSelected] = useState(screens[0] ?? "")
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => screens.filter((screen) => screen.toLowerCase().includes(query.toLowerCase())), [screens, query])
  return (
    <main className="gallery">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">A.J.</span><div><strong>Silicon</strong><small>Screen library</small></div></div>
        <div className="intro"><span className="eyebrow">REFERENCE BUILD</span><h1>Learning platform</h1><p>{screens.length} screens, organized by product flow.</p></div>
        <label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter screens..." aria-label="Filter screens" /></label>
        <nav className="screen-list" aria-label="Screens">{filtered.map((screen) => <button className={screen === selected ? "screen active" : "screen"} key={screen} onClick={() => setSelected(screen)}><span className="screen-index">{screen.match(/^\d+/)?.[0] ?? "•"}</span><span>{label(screen)}</span></button>)}</nav>
      </aside>
      <section className="preview"><header className="preview-bar"><div><span className="eyebrow">LIVE PREVIEW</span><h2>{label(selected)}</h2></div><a href={`/screens/${selected}.html`} target="_blank" rel="noreferrer">Open standalone ↗</a></header><div className="canvas"><iframe className="screen-frame" title={label(selected)} src={`/screens/${selected}.html`} /></div></section>
      <style jsx>{` .gallery{display:flex;height:100vh;overflow:hidden}.sidebar{width:330px;flex:0 0 330px;border-right:1px solid #26344d;background:#101a2b;padding:28px 18px 20px;display:flex;flex-direction:column;gap:24px}.brand{display:flex;align-items:center;gap:11px}.brand-mark{display:grid;place-items:center;width:40px;height:40px;background:#c7f36b;color:#101a2b;font-weight:800;font-size:12px;border-radius:11px}.brand strong{display:block;font-size:15px;letter-spacing:.01em}.brand small{display:block;margin-top:2px;color:#91a0b8;font-size:11px}.intro{padding:8px 8px 0}.eyebrow{color:#91a0b8;letter-spacing:.14em;font-size:10px;font-weight:700}.intro h1{font-size:25px;margin:9px 0 5px;letter-spacing:-.04em}.intro p{margin:0;color:#91a0b8;font-size:12px;line-height:1.5}.search{height:40px;border:1px solid #2d3c56;background:#172338;border-radius:9px;display:flex;align-items:center;padding:0 12px;color:#91a0b8}.search input{outline:0;border:0;background:transparent;color:#e7edf7;width:100%;margin-left:8px;font-size:12px}.screen-list{overflow:auto;display:flex;flex-direction:column;gap:3px;padding-right:3px}.screen{border:0;background:transparent;color:#aab7ca;text-align:left;border-radius:7px;padding:9px 10px;display:flex;gap:10px;align-items:center;font-size:11px;cursor:pointer}.screen:hover{background:#182740;color:#fff}.screen.active{background:#c7f36b;color:#101a2b;font-weight:700}.screen-index{width:22px;opacity:.65;font-family:monospace;font-size:10px}.preview{min-width:0;flex:1;background:#f2f5fa;display:flex;flex-direction:column}.preview-bar{height:82px;flex:0 0 82px;padding:18px 28px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d9e0ea;background:#fff}.preview-bar h2{color:#172338;font-size:16px;margin:4px 0 0;letter-spacing:-.02em}.preview-bar a{font-size:12px;color:#172338;text-decoration:none;border:1px solid #cbd4e1;border-radius:7px;padding:9px 12px}.canvas{flex:1;padding:18px;min-height:0}.screen-frame{display:block;border-radius:10px;box-shadow:0 8px 30px rgba(26,42,67,.14)}@media(max-width:800px){.sidebar{width:245px;flex-basis:245px;padding:18px 10px}.preview-bar{padding:14px 16px}.preview-bar a{font-size:0}.preview-bar a::after{content:'↗';font-size:14px}.canvas{padding:8px}}`}</style>
    </main>
  )
}
