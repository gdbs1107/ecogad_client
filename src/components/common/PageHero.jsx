export default function PageHero({ title, description, imageUrl, imageAlt }) {
  return (
    <section className="page-hero" aria-label={title}>
      <img src={imageUrl} alt={imageAlt} loading="lazy" />
      <div className="page-hero-overlay">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
