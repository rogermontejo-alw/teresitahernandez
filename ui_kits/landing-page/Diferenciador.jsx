const { Eyebrow, Button } = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396;

function Diferenciador() {
  return (
    <section data-screen-label="04 · Diferenciador" style={{background:"var(--navy-900)",color:"var(--text-on-inverse)",padding:"96px 32px"}}>
      <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>
        <Eyebrow tone="inverse">Por Qué Este Diplomado Es Diferente</Eyebrow>
        <h2 style={{fontSize:"var(--text-display-md)",marginBottom:24}}>
          ¿Ya tomaste otros diplomados, viste el procedimiento… y aun así no lo puedes replicar en tu consultorio?
        </h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body-lg)",color:"oklch(from var(--text-on-inverse) l c h / 0.75)",lineHeight:"var(--leading-normal)",maxWidth:680,margin:"0 auto 20px"}}>
          Es el problema más común en la educación odontológica: muchos instructores son clínicos brillantes, pero nunca se formaron para enseñar — demuestran la técnica, pero no logran transmitirla.
        </p>
        <p style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body-lg)",color:"oklch(from var(--text-on-inverse) l c h / 0.75)",lineHeight:"var(--leading-normal)",maxWidth:680,margin:"0 auto 32px"}}>
          La Dra. Teresita Hernández tiene más de 10 años de formación docente, además de su práctica clínica — una preparación pedagógica que la mayoría de quienes imparten cursos de odontología estética no tiene. Por eso en este diplomado no solo ves el procedimiento: aprendes a repetirlo, paso a paso, en tu propio consultorio.
        </p>
        <Button href="#signup-form" variant="primary" size="lg">Quiero Aprender a Replicarlo</Button>
      </div>
    </section>
  );
}
window.Diferenciador = Diferenciador;
