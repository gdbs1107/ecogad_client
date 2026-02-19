export default function EmptyState({ title, description }) {
  return (
    <section className="empty-state" aria-live="polite">
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
