import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <div><Link className="footer-brand" href="/"><Image src="/netroute-logo.png" width={28} height={28} alt="" /> NetRoute</Link><p>Your apps. Your connections. Your control.</p></div>
    <div className="footer-links"><Link href="/download">Download</Link><Link href="/docs">Documentation</Link><a href="https://github.com/Heygoodbye/NetRoute" target="_blank" rel="noreferrer">GitHub</a></div>
    <p className="copyright">Windows is a trademark of Microsoft. NetRoute is an independent application.</p>
  </footer>;
}
