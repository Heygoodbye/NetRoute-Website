import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, Cable, Check, Gauge, LockKeyhole, MonitorDown, Network, RadioTower, ServerCog, ShieldCheck, Smartphone, Wifi, Zap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const features = [
  { icon: Network, title: "A network for every app", text: "Keep your game on Ethernet, downloads on your phone, and browsing on Wi-Fi—at the same time." },
  { icon: LockKeyhole, title: "Strict means strict", text: "If an assigned adapter drops, Strict Mode blocks that app instead of quietly falling back." },
  { icon: Gauge, title: "The real picture", text: "See live adapter bandwidth, per-app upload and download totals, and connection status." },
  { icon: RadioTower, title: "Race-free proxy path", text: "Use the built-in HTTP/HTTPS proxy when every connection must leave through the right adapter from packet one." },
  { icon: ServerCog, title: "Always on", text: "The Windows service keeps enforcing your rules after the window closes to the system tray." },
  { icon: ShieldCheck, title: "No VPN required", text: "Route locally between the adapters you already have. No tunnel, remote server, or subscription." },
];

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="hero hero-real">
      <div className="hero-copy">
        <div className="eyebrow"><span /> Per-app routing for Windows</div>
        <h1>One PC.<br /><em>Every route.</em></h1>
        <p className="hero-lede">Send each app through the connection you choose—phone hotspot, Wi-Fi, or Ethernet—all at once, without a VPN.</p>
        <div className="hero-actions"><Link className="button button-primary" href="/download"><MonitorDown size={18} /> Download for Windows</Link><Link className="button button-secondary" href="/docs">Read the docs <ArrowRight size={17} /></Link></div>
        <p className="requirements"><ShieldCheck size={15} /> Windows 10/11 · 64-bit · Administrator install</p>
      </div>
      <div className="hero-product">
        <div className="hero-halo" />
        <div className="screen-frame"><div className="screen-top"><i/><i/><i/><span>NetRoute · Dashboard</span></div><Image src="/netroute-dashboard.png" width={1714} height={969} sizes="(max-width: 900px) 100vw, 58vw" alt="NetRoute dashboard showing application routing rules, adapters, and real-time traffic" priority /></div>
        <div className="route-chip chip-wifi"><Wifi size={16}/><span><small>Browser</small>Wi-Fi</span><Check size={13}/></div>
        <div className="route-chip chip-phone"><Smartphone size={16}/><span><small>Downloads</small>Phone hotspot</span><Check size={13}/></div>
        <div className="route-chip chip-ethernet"><Cable size={16}/><span><small>Game</small>Ethernet</span><Check size={13}/></div>
      </div>
    </section>

    <section className="trust-strip" aria-label="Product qualities"><span><ShieldCheck size={17}/> No VPN required</span><span><Activity size={17}/> Live traffic data</span><span><Zap size={17}/> Background service</span><span><Network size={17}/> Per-app rules</span></section>

    <section className="section features-section" id="features">
      <div className="section-kicker">CONTROL THE CONNECTION</div><div className="section-heading"><h2>Your PC has options.<br/>Now your apps do too.</h2><p>Windows normally chooses one default route for everything. NetRoute gives you a precise rule for each application.</p></div>
      <div className="feature-grid">{features.map(({icon:Icon,title,text}, index)=><article className="feature-card" key={title}><span className="feature-number">0{index+1}</span><div className="feature-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section showcase-section">
      <div className="showcase-copy"><div className="section-kicker">THE ACTUAL APP</div><h2>Everything visible.<br/>Nothing simulated.</h2><p>The dashboard brings adapter health, application rules, strict-mode status, and real traffic together in one place.</p><ul><li><Check size={16}/> See what is active or blocked</li><li><Check size={16}/> Change adapters without editing Windows routes</li><li><Check size={16}/> Watch upload and download activity live</li></ul><Link href="/docs#creating-a-rule">See how to create a rule <ArrowRight size={16}/></Link></div>
      <div className="showcase-shot"><Image src="/netroute-dashboard.png" width={1714} height={969} sizes="(max-width: 900px) 100vw, 60vw" alt="NetRoute desktop application dashboard" loading="eager"/></div>
    </section>

    <section className="section paths-section">
      <div className="section-kicker">TWO ROUTING PATHS</div><div className="section-heading"><h2>Automatic when convenient.<br/>Exact when it counts.</h2><p>Choose the routing method that matches the application and how much first-connection precision matters.</p></div>
      <div className="path-grid"><article><span className="path-label">DEFAULT</span><div className="feature-icon"><Zap size={22}/></div><h3>Automatic routing</h3><p>WinDivert transparently catches matched connections and redirects them through your selected adapter. No in-app configuration needed.</p><Link href="/docs#automatic-routing">Understand the best-effort path <ArrowRight size={15}/></Link></article><article className="path-exact"><span className="path-label">FIRST-PACKET EXACT</span><div className="feature-icon"><RadioTower size={22}/></div><h3>Manual proxy</h3><p>Point apps with proxy support at NetRoute’s local HTTP/HTTPS proxy. NetRoute creates the outbound connection itself, avoiding the connection race.</p><Link href="/docs#manual-proxy">Set up the proxy path <ArrowRight size={15}/></Link></article></div>
    </section>

    <section className="section architecture"><div><div className="section-kicker">BUILT TO KEEP WORKING</div><h2>The window can close.<br/>Your rules keep running.</h2></div><div className="architecture-flow"><article><span>01</span><strong>NetRoute.App</strong><p>WPF dashboard, rule editor, settings, and tray controls.</p></article><ArrowRight/><article><span>02</span><strong>Routing Service</strong><p>The Windows service enforces every active rule in the background.</p></article></div></section>

    <section className="final-cta"><Image src="/netroute-logo.png" width={88} height={88} alt="NetRoute logo" loading="eager"/><div><span>NETROUTE FOR WINDOWS</span><h2>Put every app on the right connection.</h2></div><Link className="button button-primary" href="/download"><MonitorDown size={18}/> Download NetRoute</Link></section>
    <SiteFooter />
  </main>;
}
