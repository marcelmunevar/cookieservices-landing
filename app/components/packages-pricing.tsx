"use client";

import { useMemo, useState } from "react";

type PackageInfo = {
  id: "homepage" | "website" | "custom";
  name: string;
  price: string;
  cadence: string;
  summary: string;
  includes: string[];
  bestFor: string[];
};

const PACKAGES: PackageInfo[] = [
  {
    id: "homepage",
    name: "Homepage Audit",
    price: "$199",
    cadence: "one-time",
    summary: "Focused review of homepage tracking and consent behavior.",
    includes: [
      "Homepage consent and tracking review",
      "Cookie banner validation",
      "Summary findings document",
    ],
    bestFor: ["Small businesses", "Initial assessments", "Quick risk reviews"],
  },
  {
    id: "website",
    name: "Website Audit",
    price: "$600",
    cadence: "one-time",
    summary: "Broader review across key pages and user journeys.",
    includes: [
      "Up to 5 key pages or templates",
      "Detailed technical findings report",
      "Evidence pack with screenshots and requests",
    ],
    bestFor: [
      "Marketing websites",
      "Lead generation websites",
      "Organizations seeking a complete assessment",
    ],
  },
  {
    id: "custom",
    name: "Custom Audit",
    price: "$1000+",
    cadence: "scope-based",
    summary: "For larger websites and more complex environments.",
    includes: [
      "Multi-domain and e-commerce coverage",
      "Funnel and logged-in journey testing",
      "Custom remediation roadmap",
    ],
    bestFor: [
      "E-commerce websites",
      "Multi-brand setups",
      "Advanced tag stacks",
    ],
  },
];

export default function PackagesPricing() {
  const [openId, setOpenId] = useState<PackageInfo["id"] | null>(null);

  const setSelectedPackage = (packageName: string) => {
    const field = document.getElementById(
      "selected-package",
    ) as HTMLInputElement | null;

    if (!field) {
      return;
    }

    field.value = packageName;
  };

  const activePackage = useMemo(
    () => PACKAGES.find((item) => item.id === openId) ?? null,
    [openId],
  );

  return (
    <section className="section container section-divider" id="packages">
      <h2>Packages & Pricing</h2>
      <p className="lead">
        Choose a package based on scope. Need deeper coverage? Custom pricing is
        available for complex environments.
      </p>

      <div className="pricing-grid compact-pricing-grid">
        {PACKAGES.map((item) => {
          const isFeatured = item.id === "website";

          return (
            <article
              key={item.id}
              className={`card price-card ${isFeatured ? "featured" : ""}`}
            >
              {isFeatured ? (
                <p className="price-badge">Most Requested</p>
              ) : null}
              <p className="price-label">{item.name}</p>
              <p className="price">{item.price}</p>
              <p className="price-note">{item.cadence}</p>
              <p className="package-summary">{item.summary}</p>
              <ul>
                {item.includes.slice(0, 2).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="package-actions">
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => setOpenId(item.id)}
                >
                  More Information
                </button>
                <a
                  className={`button ${
                    isFeatured ? "button-primary" : "button-secondary"
                  }`}
                  href="#contact"
                  onClick={() => setSelectedPackage(item.name)}
                >
                  Choose Plan
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {activePackage ? (
        <div
          className="package-modal-backdrop"
          role="presentation"
          onClick={() => setOpenId(null)}
        >
          <section
            className="package-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="package-modal-head">
              <h3 id="package-modal-title">{activePackage.name}</h3>
              <button
                className="package-modal-close"
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <p className="price">{activePackage.price}</p>
            <p className="price-note">{activePackage.cadence}</p>
            <p>{activePackage.summary}</p>

            <p className="modal-subtitle">Includes</p>
            <ul>
              {activePackage.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <p className="modal-subtitle">Best For</p>
            <ul>
              {activePackage.bestFor.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div className="package-actions">
              <a
                className="button button-primary"
                href="#contact"
                onClick={() => setSelectedPackage(activePackage.name)}
              >
                Request This Package
              </a>
            </div>
          </section>
        </div>
      ) : null}
    </section>
  );
}
