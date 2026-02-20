import React from "react";

const PageHero = ({ title, subtitle, bgImage, description, imageUrl, imageAlt }) => {
  const summary = subtitle ?? description;
  const background = bgImage ?? imageUrl;

  return (
    <section className="page-hero" aria-label={title}>
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(${background})`
        }}
        role="img"
        aria-label={imageAlt ?? title}
      />

      <div className="container page-hero-content">
        <h1>{title}</h1>
        {summary ? <p>{summary}</p> : null}
      </div>
    </section>
  );
};

export default PageHero;
