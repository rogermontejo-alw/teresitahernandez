const { Eyebrow, Accordion } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Faq() {
  const items = [
    {title:"¿Necesito experiencia previa en odontología estética?", body:"No. El diplomado está diseñado paso a paso, desde fundamentos hasta técnicas avanzadas."},
    {title:"¿Qué pasa si soy de fuera de Mérida?", body:"El diplomado es presencial, un fin de semana al mes. Varios alumnos vienen de Campeche, Cancún, Playa del Carmen y Chetumal — recomendamos planear tu traslado y hospedaje para cada sesión."},
    {title:"¿El kit de espátulas es obligatorio?", body:"Sí, es exclusivo del curso y se adquiere en el mes 6, con un costo adicional de $5,500 MXN."},
    {title:"¿Qué pasa después de inscribirme?", body:"Formas parte de un grupo con acceso directo a la Dra. Teresita durante los 12 meses, además de promociones y descuentos exclusivos de casas comerciales."},
  ];
  return (
    <section data-screen-label="10 · FAQ" style={{background:"var(--surface-sunken)",padding:"96px 32px"}}>
      <div style={{maxWidth:760,margin:"0 auto"}}>
        <Eyebrow>Dudas Frecuentes</Eyebrow>
        <Accordion items={items} />
      </div>
    </section>
  );
}
window.Faq = Faq;
