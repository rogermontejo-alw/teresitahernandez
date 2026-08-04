const { Button, Eyebrow, Badge } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Hero() {
  return (
    <section className="hero-section" data-screen-label="01 · Hero" style={{position:"relative",background:"var(--navy-900)",color:"var(--text-on-inverse)",padding:"56px 32px 0",overflow:"hidden"}}>
      <div className="hero-grid" style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"end",gap:16}}>
        <div className="hero-text" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:20,paddingBottom:56,maxWidth:520}}>
        <img className="hero-logo" src="../../assets/logo/isotipo-neg.svg" style={{height:44,width:"auto"}} alt="Teresita Hernández" />
        <Eyebrow tone="inverse">Diplomado en Odontología Estética</Eyebrow>
        <h1 style={{fontFamily:"var(--font-display)",fontSize:"var(--text-display-md)",fontWeight:600,textWrap:"balance",margin:0}}>
          Domina la Odontología Estética de Alta Especialidad
        </h1>
        <p style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body-lg)",color:"oklch(from var(--text-on-inverse) l c h / 0.75)",maxWidth:460,margin:0}}>
          Diplomado teórico-práctico-demostrativo. 12 módulos, cupo limitado a 12 alumnos, en Mérida, Yucatán.
        </p>
        <div style={{display:"flex",gap:14,marginTop:4,flexWrap:"wrap"}}>
          <Button variant="primary" size="lg">Quiero Inscribirme</Button>
          <Button variant="outline" size="lg" style={{color:"var(--text-on-inverse)",border:"1px solid oklch(from var(--text-on-inverse) l c h / 0.4)"}}>Resolver mis dudas</Button>
        </div>
        </div>
        <img className="hero-photo" src="../../assets/photos/teresita-frontal-2-cutout.png?v=2" alt="Dra. Teresita Hernández Tello" style={{width:"100%",maxWidth:520,maxHeight:640,objectFit:"contain",objectPosition:"bottom",justifySelf:"end"}} />
      </div>
    </section>
  );
}
window.Hero = Hero;
