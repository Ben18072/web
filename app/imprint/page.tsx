export default function Imprint() {
  return (
    <main className="container" style={{ padding: "48px 24px" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,6vw,72px)", lineHeight: 1 }}>
        Imprint
      </h1>
      <section style={{ marginTop: 24, fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.7 }}>
        <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 18, marginTop: 24 }}>Responsible for Content</h2>
        <p>LJUSDAL</p>
        <p>Frankfurt am Main, Germany</p>
        <p>Email: info@ljusdal.app</p>
        <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 18, marginTop: 24 }}>Legal Notice</h2>
        <p>All information on this website is provided without guarantee for accuracy or completeness.</p>
        <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 18, marginTop: 24 }}>EU Dispute Resolution</h2>
        <p>We are neither willing nor obliged to participate in dispute resolution before a consumer arbitration board.</p>
      </section>
    </main>
  );
}
