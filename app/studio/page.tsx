export default function Studio() {
  return (
    <main className="container" style={{ padding: "48px 24px" }}>
      <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 14, marginBottom: 12 }}>Profile</h2>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,7vw,88px)", lineHeight: 1 }}>
        LJUSDAL <span style={{ fontFamily: "var(--font-sans)" }}>is a</span> FRANKFURT <span style={{ fontFamily: "var(--font-sans)" }}>(DE)</span> based studio focusing on
        functional digital objects designed and crafted for brands and founders.
      </h1>
      <section style={{ marginTop: 32 }}>
        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 14, marginBottom: 8 }}>Contact</h3>
        <p style={{ fontFamily: "var(--font-serif)" }}>Email</p>
        <p style={{ fontFamily: "var(--font-serif)", marginBottom: 8 }}>info@ljusdal.app</p>
        <p style={{ fontFamily: "var(--font-serif)" }}>Social</p>
        <p style={{ fontFamily: "var(--font-serif)" }}>
          <a href="https://www.instagram.com/benljusdal?igsh=MWg4ZWhyYWVrZGJ6Zg==" target="_blank" rel="noreferrer">@benljusdal</a>
        </p>
      </section>
    </main>
  );
}


