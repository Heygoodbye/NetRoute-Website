import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, FileCheck2, MonitorCog, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const directDownload = "https://github.com/Heygoodbye/NetRoute/releases/latest/download/NetRoute-Setup.exe";

export default function DownloadPage() {
  return <main><SiteHeader />
    <section className="download-hero">
      <div className="download-card">
        <Image src="/netroute-logo.png" width={108} height={108} alt="NetRoute logo" priority />
        <div className="download-copy"><div className="section-kicker">LATEST RELEASE · V1.0.0</div><h1>Download NetRoute</h1><p>Per-application network routing for Windows 10 and 11. One self-contained installer, no separate .NET runtime required.</p>
          <a className="button button-primary download-button" href={directDownload}><Download size={19}/> Download NetRoute-Setup.exe</a>
          <div className="download-meta"><span>Windows 10/11</span><i/> <span>64-bit</span><i/> <span>Administrator install</span></div>
        </div>
      </div>
      <div className="install-grid"><article><span>01</span><MonitorCog/><h2>Run the installer</h2><p>Open <code>NetRoute-Setup.exe</code> and approve the Windows administrator prompt.</p></article><article><span>02</span><ShieldCheck/><h2>Service starts</h2><p>The installer adds the app, registers the routing service, and creates a Start Menu entry.</p></article><article><span>03</span><FileCheck2/><h2>Create a rule</h2><p>Choose an application, select its adapter, and decide whether to enable Strict Mode.</p></article></div>
    </section>
    <section className="download-notes"><div><h2>Before you install</h2><p>Administrator approval is required because NetRoute installs a Windows Service to enforce rules in the background. That is the only elevated prompt in the normal setup.</p><ul><li><Check/> Installs to <code>Program Files\NetRoute</code></li><li><Check/> Optional Desktop shortcut</li><li><Check/> Clean uninstall from Settings → Apps</li></ul></div><aside><strong>About Windows SmartScreen</strong><p>A new or less frequently downloaded app can trigger a reputation warning. Confirm that the publisher and download source are what you expect before continuing.</p><a href="https://github.com/Heygoodbye/NetRoute/releases/latest" target="_blank" rel="noreferrer">View release details on GitHub <ArrowRight size={15}/></a></aside></section>
    <section className="download-help"><h2>Need help setting it up?</h2><p>The quick-start guide takes you from installation to your first routing rule.</p><Link className="button button-secondary" href="/docs#quick-start">Open quick start <ArrowRight size={16}/></Link></section>
    <SiteFooter />
  </main>;
}
