import rslibLogo from "../../asset/rslib-logo.svg";
import "../og-1/Og1.css";
import "../og-6/Og6.css";
import "./Og8.css";

const LightTrails = () => (
  <div className="og1-light-trails" aria-hidden="true">
    <i className="og1-trail og1-trail-a" />
    <i className="og1-trail og1-trail-b" />
    <i className="og1-trail og1-trail-c" />
    <i className="og1-trail og1-trail-d" />
    <i className="og1-trail og1-trail-e" />
  </div>
);

const SparkField = () => (
  <div className="og1-spark-field" aria-hidden="true">
    {Array.from({ length: 18 }, (_, index) => (
      <i key={index} />
    ))}
  </div>
);

const Portal = () => (
  <div className="og1-portal" aria-hidden="true">
    <div className="og1-portal-haze" />
    <div className="og1-portal-arc" />
    <div className="og1-portal-core">
      <div className="og1-portal-disc">
        <div className="og1-logo-glow" />
        <img src={rslibLogo} alt="" />
      </div>
    </div>
    <div className="og1-orbit og1-orbit-one" />
    <div className="og1-orbit og1-orbit-two" />
  </div>
);

export const Og8 = () => (
  <main id="rslib-og-8" className="og-canvas og1 og6 og8">
    <div className="og1-ambient og1-ambient-top" aria-hidden="true" />
    <div className="og1-ambient og1-ambient-bottom" aria-hidden="true" />
    <div className="og1-grain" aria-hidden="true" />
    <SparkField />
    <LightTrails />

    <section className="og1-copy">
      <p className="og1-date">August, 2026</p>
      <h1 className="og1-title">
        <span className="og1-product">Rslib</span>
        <span className="og1-version">1.0</span>
      </h1>
      <p className="og1-tagline">Rsbuild-based Library Development Tool</p>
    </section>

    <Portal />
  </main>
);
