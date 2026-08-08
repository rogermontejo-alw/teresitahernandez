const { Eyebrow } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Stars() {
  return (
    <div style={{display:"flex",gap:2,color:"var(--navy-900)",fontSize:16,letterSpacing:2}}>
      {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
    </div>
  );
}

function Testimonios() {
  const videos = [
    {
      name: "William Rafael Talavera",
      role: "Dentista · Campeche",
      quote: "El aprender de manera práctica nos permite aplicarlo al día siguiente en nuestro consultorio.",
      src: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto/v1785874552/TESTIMONIO_DR_WILLIAM.mp4",
      poster: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto,w_500/v1785874552/TESTIMONIO_DR_WILLIAM.jpg",
    },
    {
      name: "Dra. Diana",
      role: "Recién egresada",
      quote: "Hay muchas cosas que vemos en la facultad, pero no tan completo como en el diplomado.",
      src: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto/v1785874550/TESTIMONIO_DRA_DIANA.mp4",
      poster: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto,w_500/v1785874550/TESTIMONIO_DRA_DIANA.jpg",
    },
    {
      name: "Dr. Juan Fernando Casanova",
      role: "Ex rector de la UAC",
      quote: "Tomé el diplomado 2 veces ya que las técnicas se van perfeccionando y actualizando.",
      src: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto/v1785874541/TESTIMONIO_DR_JUAN_FERNANDO.mp4",
      poster: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto,w_500/v1785874541/TESTIMONIO_DR_JUAN_FERNANDO.jpg",
    },
  ];
  return (
    <section data-screen-label="09 · Testimonios" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",textAlign:"center"}}>
        <Eyebrow>Lo que Dicen Nuestros Alumnos</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:32}}>Generaciones anteriores ya lo comprobaron</h2>
        <div className="testimonios-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {videos.map((v) => (
            <div key={v.name} style={{display:"flex",flexDirection:"column",gap:14,textAlign:"left",background:"var(--surface-sunken)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"var(--shadow-md)"}}>
              <video
                controls
                preload="metadata"
                playsInline
                poster={v.poster}
                style={{width:"100%",aspectRatio:"1/1",background:"var(--navy-900)",objectFit:"cover"}}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div style={{padding:"0 20px 24px"}}>
                <Stars />
                <div style={{fontFamily:"var(--font-display)",fontSize:15,fontWeight:600,color:"var(--text-primary)",marginTop:10}}>{v.name}</div>
                <div style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--brand-primary)",fontWeight:600,marginTop:2,marginBottom:10}}>{v.role}</div>
                <p style={{fontFamily:"var(--font-body)",fontSize:14,color:"var(--text-secondary)",lineHeight:"var(--leading-normal)",margin:0,fontStyle:"italic"}}>“{v.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonios = Testimonios;
