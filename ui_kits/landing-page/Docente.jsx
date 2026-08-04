const { Eyebrow, Badge } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Docente() {
  const credentials = [
    "Primera mujer mexicana admitida en Prostodoncia — University of Rochester",
    "Becada por Procter & Gamble — Universidad de Washington",
    "Certificada por el Consejo Mexicano de Rehabilitación Oral y Maxilofacial",
    "15+ años de práctica clínica",
    "10+ años de experiencia docente",
  ];
  return (
    <section data-screen-label="02 · Docente" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div className="docente-grid" style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"420px 1fr",gap:56,alignItems:"start"}}>
        <div className="docente-photo" style={{aspectRatio:"4/5",background:"var(--surface-sunken)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
          <img src="../../assets/photos/teresita-lateral-izquierda-cutout.png?v=2" alt="Dra. Teresita Hernández Tello" style={{width:"120%",height:"auto",objectFit:"contain"}} />
        </div>
        <div>
          <Eyebrow>Tu Docente</Eyebrow>
          <h2 style={{fontSize:"var(--text-display-md)",marginBottom:20}}>Dra. Teresita Hernández Tello</h2>
          <p style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body)",color:"var(--text-secondary)",lineHeight:"var(--leading-normal)",maxWidth:640}}>
            Cirujano Dentista graduada con honores por la Universidad Autónoma de Yucatán. Especialista en Prostodoncia por la University of Rochester (Nueva York) — primera mujer mexicana admitida en ese posgrado. Formación personalizada con referentes mundiales de la odontología estética: Christian Coachman, Pascal Magne, Gerard Chiche, Sidney Kina y Florin Cofar, en Estados Unidos, Perú y Brasil.
          </p>
          <p style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body)",color:"var(--text-secondary)",lineHeight:"var(--leading-normal)",maxWidth:640}}>
            Más de 15 años de práctica clínica y más de 10 años como docente, incluyendo la Universidad Autónoma de Yucatán y la Benemérita Universidad Autónoma de Puebla.
          </p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:20}}>
            {credentials.map((c) => <Badge key={c} tone="ice">{c}</Badge>)}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Docente = Docente;
