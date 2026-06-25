import PackagesPricing from "./components/packages-pricing";
import ContactStatus from "./components/contact-status";

export default function Home() {
  return (
    <main className="landing">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar container">
        <a className="brand" href="#top">
          Cookie Services
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#services">Scope</a>
          <a href="#packages">Packages</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section container">
        <div className="hero-panel">
          <p className="eyebrow">Website Tracking & Cookie Compliance Audit</p>
          <h1>
            Discover Tracking Issues Before They Become Expensive Problems
          </h1>
          <p className="lead">
            Many organizations install a cookie banner and assume their website
            is compliant. Unfortunately, analytics, advertising pixels, and
            tracking technologies often continue collecting data before consent
            is given. A cookie banner alone does not guarantee compliance.
          </p>
          <p className="lead">
            Our audits identify tracking technologies, test consent behavior,
            and document how your website actually behaves in a real browser.
          </p>
          <div className="cta-group">
            <a className="button button-primary" href="#contact">
              Request an Audit
            </a>
            <a className="button button-secondary" href="#services">
              See What We Review
            </a>
          </div>

          <ul className="hero-highlights" aria-label="Audit highlights">
            <li>Manual testing in a real browser</li>
            <li>Evidence-backed findings</li>
            <li>Clear remediation guidance</li>
          </ul>
        </div>
      </section>

      <section id="services" className="section container section-divider">
        <h2>What We Review</h2>
        <div className="stack">
          <article className="card">
            <h3>Cookie Banner Validation</h3>
            <p>
              We verify whether your consent banner actually controls tracking
              technologies or simply displays a notice.
            </p>
          </article>

          <article className="card">
            <h3>Tracking Technology Identification</h3>
            <p>We identify and analyze:</p>
            <ul className="check-list">
              <li>Google Analytics (GA4)</li>
              <li>Google Tag Manager</li>
              <li>Meta Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>Microsoft Clarity</li>
              <li>Hotjar</li>
              <li>TikTok Pixel</li>
              <li>Other advertising and analytics technologies</li>
            </ul>
          </article>

          <article className="card">
            <h3>Consent Testing</h3>
            <p>We test how your website behaves when visitors:</p>
            <ul className="check-list">
              <li>Take no action</li>
              <li>Accept all cookies</li>
              <li>Reject all cookies</li>
            </ul>
          </article>

          <article className="card">
            <h3>Cookie & Storage Analysis</h3>
            <p>We review:</p>
            <ul className="check-list">
              <li>Browser cookies</li>
              <li>Local Storage</li>
              <li>Session Storage</li>
              <li>Third-party scripts</li>
              <li>Tracking identifiers</li>
            </ul>
          </article>

          <article className="card">
            <h3>Documentation Review</h3>
            <p>
              We compare observed tracking technologies against your privacy and
              cookie disclosures.
            </p>
          </article>
        </div>
      </section>

      <section className="section container section-divider" id="issues">
        <h2>Common Issues We Find</h2>
        <ul className="check-list">
          <li>Analytics firing before consent</li>
          <li>Marketing pixels loading despite &quot;Reject All&quot;</li>
          <li>Google Tag Manager misconfigurations</li>
          <li>Consent Mode implementation issues</li>
          <li>Legacy tracking scripts still active</li>
          <li>Missing cookie disclosures</li>
          <li>Tracking technologies omitted from privacy documentation</li>
          <li>Cookie banners that do not properly enforce user choices</li>
        </ul>
      </section>

      <section className="section container section-divider" id="process">
        <h2>How Our Audit Works</h2>
        <div className="grid">
          <article className="card">
            <h3>Step 1 - Website Review</h3>
            <p>
              We manually review your website using browser-based testing and
              network analysis tools.
            </p>
          </article>
          <article className="card">
            <h3>Step 2 - Consent Verification</h3>
            <p>
              We test multiple consent scenarios to determine what technologies
              load before and after user consent.
            </p>
          </article>
          <article className="card">
            <h3>Step 3 - Evidence Collection</h3>
            <p>
              We document findings with screenshots, network requests, and
              technical evidence.
            </p>
          </article>
          <article className="card">
            <h3>Step 4 - Findings Report</h3>
            <p>
              You receive a report outlining observations, potential risks, and
              recommended remediation steps.
            </p>
          </article>
        </div>
      </section>

      <section className="section container section-divider">
        <h2>Why Choose a Manual Audit?</h2>
        <p className="lead">
          Many scanning tools generate false positives or miss implementation
          issues. We focus on what your visitors actually experience, not just
          what an automated scanner reports.
        </p>
        <ul className="check-list">
          <li>Real browser behavior</li>
          <li>Consent enforcement</li>
          <li>Tracking requests</li>
          <li>Cookie creation</li>
          <li>User experience</li>
        </ul>
      </section>

      <PackagesPricing />

      <section className="section container section-divider" id="faq">
        <h2>What You&apos;ll Receive</h2>
        <div className="grid">
          <article className="card">
            <h3>Executive Summary</h3>
            <p>A high-level overview of findings and priorities.</p>
          </article>
          <article className="card">
            <h3>Technical Findings Report</h3>
            <p>Detailed documentation including:</p>
            <ul>
              <li>Technologies identified</li>
              <li>Cookies observed</li>
              <li>Tracking requests captured</li>
              <li>Screenshots</li>
              <li>Reproduction steps</li>
              <li>Recommendations</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section container section-divider">
        <h2>Frequently Asked Questions</h2>
        <div className="stack">
          <article className="card">
            <h3>Is this legal advice?</h3>
            <p>
              No. Our audits provide technical findings related to website
              tracking and consent behavior. We do not provide legal advice.
            </p>
          </article>
          <article className="card">
            <h3>Do you fix issues you discover?</h3>
            <p>
              Yes. Remediation assistance can be provided separately if
              requested.
            </p>
          </article>
          <article className="card">
            <h3>How long does an audit take?</h3>
            <p>
              Most audits are completed within a few business days, depending on
              scope.
            </p>
          </article>
          <article className="card">
            <h3>Will you need access to our website?</h3>
            <p>
              Most audits can be performed without website access. Additional
              access may be requested for remediation services.
            </p>
          </article>
        </div>
      </section>

      <section className="section container section-divider" id="contact">
        <h2>Request Your Audit</h2>
        <p className="lead">
          Want to understand how your website handles tracking and consent?
          Complete the form below and we&apos;ll contact you regarding next
          steps.
        </p>

        <ContactStatus />

        <form className="form" action="/api/contact" method="post">
          <input id="selected-package" name="selectedPackage" type="hidden" />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />

          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
          />

          <label htmlFor="website">Website URL</label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />

          <button className="button button-primary" type="submit">
            Request Audit
          </button>
        </form>

        <p className="disclaimer">
          Technical reviews and findings only. No legal advice is provided.
        </p>
      </section>

      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} Independent Compliance Studio. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
