const { Input, Button } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function SignupForm() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="signup-form" data-screen-label="09 · Formulario" style={{background:"var(--navy-900)",padding:"96px 32px"}}>
      <div className="signup-card" style={{maxWidth:640,margin:"0 auto",background:"var(--white)",borderRadius:"var(--radius-lg)",padding:40,boxShadow:"var(--shadow-lg)"}}>
        <h2 style={{fontSize:"var(--text-display-sm)",marginBottom:8}}>Aparta tu lugar o resuelve tus dudas</h2>
        <p style={{fontFamily:"var(--font-body)",color:"var(--text-secondary)",marginTop:0,marginBottom:28}}>Cupo limitado a 12 alumnos por generación.</p>
        {sent ? (
          <p style={{fontFamily:"var(--font-body)",color:"var(--brand-primary)",fontWeight:600}}>¡Gracias! Hemos recibido tu información. En breve nos pondremos en contacto contigo para confirmar tu lugar o resolver tus dudas.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{display:"flex",flexDirection:"column",gap:18}}>
            <Input label="Nombre completo" required />
            <Input label="Teléfono / WhatsApp" type="tel" required />
            <Input label="Correo electrónico" type="email" required />
            <Input label="Ciudad" options={["Mérida","Campeche","Cd. del Carmen","Cancún","Playa del Carmen","Chetumal","Otra"]} />
            <Input label="¿Ya ejerces odontología?" options={["Sí, ya ejerzo","Soy pasante o estudiante"]} />
            <Input label="¿Qué te interesa más del diplomado?" options={["Fundamentos","Mínima invasión y carillas","Perfeccionar técnica avanzada"]} />
            <Input label="Comentarios o dudas" />
            <Button type="submit" variant="primary" size="lg">Enviar y reservar mi lugar</Button>
          </form>
        )}
      </div>
    </section>
  );
}
window.SignupForm = SignupForm;
