const { Eyebrow, Button, Card } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Inversion() {
  const rows = [
    {label:"Inscripción", value:"$3,500 MXN"},
    {label:"🎉 Promoción — inscripción hasta el 25 de septiembre", value:"$2,000 MXN"},
    {label:"Aparta tu lugar con", value:"$1,000 MXN (liquidas el resto antes del 25 de septiembre)"},
    {label:"Mensualidad de septiembre (módulo 1, abono parcial)", value:"$2,000 MXN"},
    {label:"Mensualidad de octubre (incluye $1,000 diferidos)", value:"$5,000 MXN"},
    {label:"Mensualidad de noviembre (incluye $1,000 diferidos)", value:"$5,000 MXN"},
    {label:"Mensualidad de diciembre en adelante", value:"$4,000 MXN"},
    {label:"Kit de espátulas para resina (obligatorio, mes 6)", value:"$5,500 MXN"},
  ];
  return (
    <section data-screen-label="08 · Inversión" style={{background:"var(--surface-sunken)",padding:"96px 32px"}}>
      <div className="inversion-grid" style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 600px",gap:48,alignItems:"end"}}>
        <div className="inversion-price-col" style={{maxWidth:760}}>
        <Eyebrow>Inversión</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:12}}>Formación de alta especialidad, en pagos accesibles</h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:15,color:"var(--brand-primary)",fontWeight:700,marginBottom:8}}>
          🔥 Solo quedan 2 lugares disponibles
        </p>
        <p style={{fontFamily:"var(--font-body)",fontSize:14,color:"var(--text-secondary)",lineHeight:"var(--leading-normal)",marginBottom:20}}>
          Para estos últimos lugares, tu inscripción y tu primera mensualidad ya no se te juntan en la misma fecha: pagas $2,000 de inscripción y solo $2,000 de la mensualidad de septiembre. Los $2,000 restantes de esa mensualidad se reparten en $1,000 extra durante octubre y $1,000 extra durante noviembre — a partir de diciembre vuelves a pagar $4,000 al mes, como siempre.
        </p>
        <Card>
          {rows.map((r) => (
            <div key={r.label} className="inversion-row" style={{display:"flex",justifyContent:"space-between",gap:16,padding:"14px 0",borderBottom:"1px solid var(--border-subtle)",fontSize:15}}>
              <span style={{color:"var(--text-secondary)"}}>{r.label}</span>
              <span className="inversion-value" style={{fontWeight:600,whiteSpace:"nowrap",textAlign:"right"}}>{r.value}</span>
            </div>
          ))}
        </Card>
        <p style={{fontFamily:"var(--font-body)",fontSize:16,marginTop:28,color:"var(--text-primary)",fontWeight:600}}>
          Aun con todo incluido, tu inversión total en el diplomado representa menos de la mitad del valor estimado si tomaras cada tema por separado con instructores especializados.
        </p>
        <p style={{fontSize:12,color:"var(--text-muted)",marginTop:12}}>
          Precio sujeto a cambio sin previo aviso. Cupo limitado — tu lugar se aparta con el pago de inscripción.
        </p>
        <Button href="#signup-form" variant="dark" size="lg" style={{marginTop:24}}>Apartar mi lugar</Button>
        </div>
        <img className="inversion-photo" src="/assets/photos/teresita-lateral-derecha-cutout.png?v=2" alt="Dra. Teresita Hernández Tello" style={{width:600,height:740,maxHeight:800,objectFit:"contain",objectPosition:"bottom"}} />
      </div>
    </section>
  );
}
window.Inversion = Inversion;
