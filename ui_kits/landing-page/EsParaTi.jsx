const { Eyebrow } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function EsParaTi() {
  const items = [
    "Eres estudiante de odontología y quieres desarrollar habilidades prácticas.",
    "Eres odontólogo general y deseas ofrecer tratamientos estéticos con mayor confianza.",
    "Ya tomaste otros cursos, pero buscas perfeccionar tu técnica.",
    "Quieres aprender protocolos aplicables desde el primer día en el consultorio.",
  ];
  return (
    <section data-screen-label="02 · Es Para Ti" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",textAlign:"center"}}>
        <Eyebrow>Dirigido A Dentistas Y Estudiantes</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:12}}>¿Este diplomado es para ti?</h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body-lg)",color:"var(--text-secondary)",maxWidth:560,margin:"0 auto 40px"}}>
          Invierte en ti mismo. Haz que te recomienden.
        </p>
        <div className="esparati-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20,textAlign:"left"}}>
          {items.map((text) => (
            <div key={text} style={{display:"flex",gap:14,alignItems:"flex-start",background:"var(--surface-sunken)",borderRadius:"var(--radius-lg)",padding:"24px 28px"}}>
              <span style={{flexShrink:0,width:28,height:28,borderRadius:"50%",background:"var(--accent)",color:"var(--accent-ink)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:15}}>✔</span>
              <span style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body)",color:"var(--text-primary)",lineHeight:"var(--leading-normal)"}}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.EsParaTi = EsParaTi;
