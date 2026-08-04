const { Eyebrow } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;
const { ValueTable } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function ValueSection() {
  const rows = [
    {label:"Técnica de inyección (resinas anteriores)", value:"$8,000"},
    {label:"Estratificación (resinas anteriores)", value:"$15,000"},
    {label:"Carillas de resina", value:"$18,000"},
    {label:"Morfología y estratificación (posteriores)", value:"$12,000"},
    {label:"Estampas y bulk fill", value:"$8,000"},
    {label:"Carillas cerámicas", value:"$20,000"},
    {label:"Preparaciones verticales", value:"$8,000"},
    {label:"Cerámicas sin metal", value:"$8,000"},
    {label:"Blanqueamientos, macro/microabrasión, impresiones, provisorios", value:"$12,000"},
  ];
  return (
    <section data-screen-label="03 · Valor" style={{background:"var(--surface-sunken)",padding:"96px 32px"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <Eyebrow>Tu Inversión, en Perspectiva</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:16}}>Esto es lo que te costaría aprender cada técnica por separado</h2>
        <p style={{fontFamily:"var(--font-body)",color:"var(--text-secondary)",maxWidth:640,marginBottom:32}}>
          Cada uno de estos temas se enseña hoy en México como curso independiente, con instructores especializados. Este es el valor estimado si los tomaras uno por uno:
        </p>
        <ValueTable rows={rows} total="$109,000" />
        <div style={{marginTop:32,background:"var(--navy-900)",borderRadius:"var(--radius-lg)",padding:"32px 36px",boxShadow:"var(--shadow-md)",borderLeft:"6px solid var(--accent)"}}>
          <p style={{margin:"0 0 10px",fontFamily:"var(--font-body)",fontSize:15,color:"oklch(from var(--text-on-inverse) l c h / 0.75)"}}>Valor estimado en cursos individuales: <strong style={{color:"var(--text-on-inverse)"}}>$109,000 MXN</strong></p>
          <p style={{margin:"0 0 16px",fontFamily:"var(--font-body)",fontSize:15,color:"oklch(from var(--text-on-inverse) l c h / 0.75)"}}>Costo total real de tu diplomado (inscripción promocional + kit): <strong style={{color:"var(--accent-ink)",background:"var(--accent)",padding:"2px 8px",borderRadius:"var(--radius-sm)"}}>$4,000 MXN al mes, por 12 meses</strong></p>
          <p style={{margin:0,fontFamily:"var(--font-display)",fontSize:28,fontWeight:600,color:"var(--accent)"}}>Tu ahorro: más de $53,000 MXN</p>
        </div>
        <p style={{fontSize:12,color:"var(--text-muted)",marginTop:16,lineHeight:1.5}}>
          Valor estimado con base en honorarios de referencia de cursos especializados independientes en México; no corresponde a un precio de mercado publicado por un tercero. Costo total real calculado con inscripción promocional ($2,000), 12 mensualidades de $4,000 y kit de espátulas ($5,500); detalle completo en la sección de Inversión.
        </p>
        <p style={{fontFamily:"var(--font-body)",fontSize:16,color:"var(--text-primary)",marginTop:28,fontWeight:600}}>
          Además, durante 12 meses tienes acceso directo a la Dra. Teresita para resolver dudas, y a promociones, descuentos y becas exclusivas de casas comerciales.
        </p>
      </div>
    </section>
  );
}
window.ValueSection = ValueSection;
