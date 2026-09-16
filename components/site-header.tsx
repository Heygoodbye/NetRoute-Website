import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="NetRoute home">
      <Image className="brand-logo" src="/netroute-logo.png" width={36} height={36} alt="" priority />
      <span>NetRoute</span>
    </Link>
    <nav className="nav-links" aria-label="Primary navigation">
      <Link href="/#features">Features</Link><Link href="/docs">Documentation</Link><a href="https://github.com/Heygoodbye/NetRoute" target="_blank" rel="noreferrer">GitHub</a>
    </nav>
    <Link className="nav-download" href="/download">Download <ArrowRight size={15} /></Link>
  </header>;
}
