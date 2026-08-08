const { Eyebrow } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

const icons = {
  calendar: "M8 2v4M16 2v4M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  clock: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 5v5l4 2",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z|M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z|M23 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75",
  box: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z|M3.3 7 12 12l8.7-5|M12 22V12",
};

function Icon({ d }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {d.split("|").map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

function Logistics() {
  const items = [
    {icon:icons.calendar, label:"Inicio", value:"18 y 19 de septiembre, 2026"},
    {icon:icons.clock, label:"Horario", value:"Viernes 4:00–7:00 pm, sábado 9:30 am–1:30 pm (primer fin de semana de cada mes)"},
    {icon:icons.pin, label:"Lugar", value:"Clínica Dental Hernández Tello, Mérida, Yucatán"},
    {icon:icons.users, label:"Cupo", value:"Limitado a 12 alumnos"},
    {icon:icons.box, label:"Incluye", value:"Material para prácticas en tipodonto, material bibliográfico y refrigerios"},
  ];
  return (
    <section data-screen-label="07 · Logística" style={{background:"var(--navy-900)",color:"var(--text-on-inverse)",padding:"96px 32px"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto"}}>
        <Eyebrow tone="inverse">Detalles del Diplomado</Eyebrow>
        <div className="logistics-grid" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:0,marginTop:24}}>
          {items.map((it, i) => (
            <div key={it.label} style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:10,padding:"0 20px",borderLeft:i>0?"1px solid oklch(from var(--text-on-inverse) l c h / 0.15)":"none"}}>
              <Icon d={it.icon} />
              <span style={{fontFamily:"var(--font-display)",fontSize:14,letterSpacing:"0.04em",textTransform:"uppercase",color:"var(--brand-secondary)"}}>{it.label}</span>
              <span style={{fontFamily:"var(--font-body)",fontSize:14,color:"oklch(from var(--text-on-inverse) l c h / 0.8)",lineHeight:1.5}}>{it.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Logistics = Logistics;
