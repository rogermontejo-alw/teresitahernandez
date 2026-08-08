const { Eyebrow, Accordion } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Temario() {
  const modulos = [
    "Diagnóstico integral y diseño digital de sonrisa, análisis facial y mock-up. Procedimientos estéticos de invasión mínima: aclaramiento dental, macro y microabrasión",
    "Operatoria dental integrada a la salud pulpar, biobase, biomimética, postes y fibras",
    "Conceptos y teoría de preparaciones mínimamente invasivas. Preparaciones horizontales y verticales",
    "Técnicas de provisionalización, pónticos ovoides. Impresiones análogas y digitales",
    "Morfología de dientes posteriores en composites de alta complejidad, técnicas de estratificación, elevación de margen y cajas proximales",
    "Estampas oclusales, uso de resinas bulk y registros interoclusales. Técnicas para aumento seriado posterior e incremento de dimensión vertical",
    "Teoría del color y técnica de resinas inyectadas",
    "Estratificación anterior compleja con técnicas palatovestibulares y uso de tintes y efectos",
    "Técnicas avanzadas de resinas anteriores: enmascaramiento de diente obscuro y transformación de diente conoide",
    "Carillas de resina, uso de técnicas mixtas, palatovestibulares y estampas",
    "Carillas cerámicas, preparaciones de mínima invasión. Revisión de materiales cerámicos disponibles en el mercado: disilicato de litio y zirconia. Materiales impresos",
    "Cementación, tipos de cementos disponibles en el mercado, usos y características específicas. Preparación del sustrato dental y preparación de la restauración",
  ];
  return (
    <section data-screen-label="06 · Temario" style={{background:"var(--surface-page)",padding:"96px 32px"}}>
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <Eyebrow>Contenido</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:32}}>12 módulos. 100% práctico. Aplicable desde el lunes siguiente.</h2>
        <Accordion items={modulos.map((m) => ({title:m, body:"Sesión teórico-práctica-demostrativa, un fin de semana al mes."}))} />
      </div>
    </section>
  );
}
window.Temario = Temario;
