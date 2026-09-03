import rslibLogo from "../../asset/rslib-logo.svg";
import "../og-1/Og1.css";
import "../og-6/Og6.css";
import "./OgLatestSeptember1200.css";

const SparkField = () => (
  <div className="og1-spark-field" aria-hidden="true">
    {Array.from({ length: 18 }, (_, index) => (
      <i key={index} />
    ))}
  </div>
);

const LightTrails = () => (
  <div className="og1-light-trails" aria-hidden="true">
    <i className="og1-trail og1-trail-a" />
    <i className="og1-trail og1-trail-b" />
    <i className="og1-trail og1-trail-c" />
    <i className="og1-trail og1-trail-d" />
    <i className="og1-trail og1-trail-e" />
  </div>
);

const Portal = () => (
  <div className="ogsq-portal" aria-hidden="true">
    <div className="ogsq-haze" />
    <div className="ogsq-glow" />
    <div className="ogsq-orbit ogsq-orbit-one" />
    <div className="ogsq-orbit ogsq-orbit-two" />
    <img className="ogsq-logo" src={rslibLogo} alt="" />
  </div>
);

export const OgLatestSeptember1200 = () => (
  <main
    id="rslib-og-latest-september-1200"
    className="og-canvas og1 og6 og-latest-september-1200"
  >
    <div className="og1-ambient og1-ambient-top" aria-hidden="true" />
    <div className="og1-ambient og1-ambient-bottom" aria-hidden="true" />
    <div className="og1-grain" aria-hidden="true" />
    <SparkField />
    <LightTrails />

    <Portal />

    <section className="og1-copy">
      <h1 className="og1-title">
        <span className="og1-product">Rslib</span>
        <span className="og1-version">1.0</span>
      </h1>
      <p className="og1-date">September, 2026</p>
    </section>
  </main>
);
