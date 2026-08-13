import rslibLogo from "../../asset/rslib-logo.svg";
import "../og-3/Og3.css";
import "./Og4.css";

const LightTrails = () => (
  <div className="og3-light-trails" aria-hidden="true">
    <i className="og3-trail og3-trail-a" />
    <i className="og3-trail og3-trail-b" />
  </div>
);

const SparkField = () => (
  <div className="og3-spark-field" aria-hidden="true">
    {Array.from({ length: 8 }, (_, index) => (
      <i key={index} />
    ))}
  </div>
);

const Portal = () => (
  <div className="og3-portal" aria-hidden="true">
    <div className="og3-portal-haze" />
    <div className="og3-portal-arc" />
    <div className="og3-portal-core">
      <div className="og3-portal-disc">
        <div className="og3-logo-glow" />
        <img src={rslibLogo} alt="" />
      </div>
    </div>
    <div className="og3-orbit" />
  </div>
);

export const Og4 = () => (
  <main id="rslib-og-4" className="og-canvas og3 og4">
    <div className="og3-ambient" aria-hidden="true" />
    <SparkField />
    <LightTrails />

    <section className="og3-copy">
      <p className="og3-date">August, 2026</p>
      <h1 className="og3-title">
        <span className="og3-product">Rslib</span>
        <span className="og3-version">1.0</span>
      </h1>
      <p className="og3-tagline">Rsbuild-based Library Development Tool</p>
    </section>

    <Portal />
  </main>
);
