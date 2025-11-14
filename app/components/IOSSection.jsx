export default function IOSSection({ title, children }) {
  return (
    <section className="ios-section">
      <h2 className="ios-section-title">{title}</h2>
      <div className="ios-card mt-3">
        {children}
      </div>
    </section>
  );
}
