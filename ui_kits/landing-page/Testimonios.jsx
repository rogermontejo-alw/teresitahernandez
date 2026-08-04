const { Eyebrow } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Testimonios() {
  return (
    <section data-screen-label="07 · Testimonios" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",textAlign:"center"}}>
        <Eyebrow>Lo que Dicen Nuestros Alumnos</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:32}}>Generaciones anteriores ya lo comprobaron</h2>
        <div className="testimonios-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {[1,2,3].map((i) => (
            <div key={i} style={{aspectRatio:"1",background:"var(--surface-sunken)",borderRadius:"var(--radius-lg)",padding:32,display:"flex",flexDirection:"column",gap:14,alignItems:"center",justifyContent:"center",color:"var(--text-muted)",fontSize:14}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:"var(--ice-200-hover)"}} />
              Testimonio pendiente — contenido real por confirmar
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonios = Testimonios;
