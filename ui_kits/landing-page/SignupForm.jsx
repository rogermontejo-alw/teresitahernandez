const { Input, Button } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

// Google Apps Script Web App — ver GOOGLE_SHEETS_SETUP.md
const GOOGLE_SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbyuk9Q00mgR6so0Ga3PBg7F9M5R9ARseKfwWfJGtGZGFpTM-yil5GjJfS5Rr4eP1U-ezg/exec";

function SignupForm() {
  const [sending, setSending] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const data = Object.fromEntries(new FormData(e.target).entries());
    data.origen = "Landing Diplomado";
    data.fecha = new Date().toISOString();

    if (GOOGLE_SHEETS_ENDPOINT) {
      try {
        // no-cors + text/plain evita el preflight CORS que Apps Script no maneja bien.
        await fetch(GOOGLE_SHEETS_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.error("No se pudo enviar a Google Sheets:", err);
      }
    } else {
      console.warn("GOOGLE_SHEETS_ENDPOINT no configurado todavía — ver GOOGLE_SHEETS_SETUP.md");
    }

    window.location.href = "/gracias";
  }

  return (
    <section id="signup-form" data-screen-label="09 · Formulario" style={{background:"var(--navy-900)",padding:"96px 32px"}}>
      <div className="signup-card" style={{maxWidth:640,margin:"0 auto",background:"var(--white)",borderRadius:"var(--radius-lg)",padding:40,boxShadow:"var(--shadow-lg)"}}>
        <h2 style={{fontSize:"var(--text-display-sm)",marginBottom:8}}>Aparta tu lugar o resuelve tus dudas</h2>
        <p style={{fontFamily:"var(--font-body)",color:"var(--text-secondary)",marginTop:0,marginBottom:28}}>Cupo limitado a 12 alumnos por generación.</p>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:18}}>
          <Input name="nombre" label="Nombre completo" required />
          <Input name="telefono" label="Teléfono / WhatsApp" type="tel" required />
          <Input name="email" label="Correo electrónico" type="email" required />
          <Input name="ciudad" label="Ciudad" options={["Mérida","Campeche","Cd. del Carmen","Cancún","Playa del Carmen","Chetumal","Otra"]} />
          <Input name="ejerce" label="¿Ya ejerces odontología?" options={["Sí, ya ejerzo","Soy pasante o estudiante"]} />
          <Input name="interes" label="¿Qué te interesa más del diplomado?" options={["Fundamentos","Mínima invasión y carillas","Perfeccionar técnica avanzada"]} />
          <Input name="comentarios" label="Comentarios o dudas" />
          <Button type="submit" variant="primary" size="lg" disabled={sending}>
            {sending ? "Enviando…" : "Enviar y reservar mi lugar"}
          </Button>
        </form>
      </div>
    </section>
  );
}
window.SignupForm = SignupForm;
