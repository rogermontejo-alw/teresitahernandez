const { Eyebrow } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Testimonios() {
  const videos = [
    {
      name: "Dr. William",
      src: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto/v1785874552/TESTIMONIO_DR_WILLIAM.mp4",
      poster: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto,w_500/v1785874552/TESTIMONIO_DR_WILLIAM.jpg",
    },
    {
      name: "Dra. Diana",
      src: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto/v1785874550/TESTIMONIO_DRA_DIANA.mp4",
      poster: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto,w_500/v1785874550/TESTIMONIO_DRA_DIANA.jpg",
    },
    {
      name: "Dr. Juan Fernando",
      src: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto/v1785874541/TESTIMONIO_DR_JUAN_FERNANDO.mp4",
      poster: "https://res.cloudinary.com/dwtg72zuj/video/upload/f_auto,q_auto,w_500/v1785874541/TESTIMONIO_DR_JUAN_FERNANDO.jpg",
    },
  ];
  return (
    <section data-screen-label="07 · Testimonios" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",textAlign:"center"}}>
        <Eyebrow>Lo que Dicen Nuestros Alumnos</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:32}}>Generaciones anteriores ya lo comprobaron</h2>
        <div className="testimonios-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {videos.map((v) => (
            <div key={v.name} style={{display:"flex",flexDirection:"column",gap:12}}>
              <video
                controls
                preload="metadata"
                playsInline
                poster={v.poster}
                style={{width:"100%",aspectRatio:"9/16",borderRadius:"var(--radius-lg)",background:"var(--navy-900)",objectFit:"cover",boxShadow:"var(--shadow-md)"}}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <span style={{fontFamily:"var(--font-display)",fontSize:14,fontWeight:600,color:"var(--text-primary)"}}>{v.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonios = Testimonios;
