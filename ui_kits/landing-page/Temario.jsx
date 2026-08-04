const { Eyebrow, Accordion } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Temario() {
  const modulos = [
    "Diagnóstico integral y diseño digital de sonrisa — parámetros estéticos, análisis facial, mock-up 3D",
    "Blanqueamiento y aislamiento avanzado — macro y microabrasión",
    "Operatoria integrada a la salud pulpar — biobase, biomimética, postes y fibras",
    "Preparaciones mínimamente invasivas — anteriores y posteriores",
    "Tejidos blandos y provisionales",
    "Impresiones análogas y digitales",
    "Composites posteriores de alta complejidad — clase II, anatomía compleja",
    "Estampa oclusal e incremento seriado — resinas bulk",
    "Estratificación anterior avanzada y teoría del color",
    "Carillas de resina directa",
    "Carillas cerámicas de mínima invasión (módulo insignia)",
    "Cementación integral",
  ];
  return (
    <section data-screen-label="04 · Temario" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <Eyebrow>Contenido</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:32}}>12 módulos. 100% práctico. Aplicable desde el lunes siguiente.</h2>
        <Accordion items={modulos.map((m) => ({title:m, body:"Sesión teórico-práctica-demostrativa, un fin de semana al mes."}))} />
      </div>
    </section>
  );
}
window.Temario = Temario;
