function Footer() {
  return (
    <footer data-screen-label="10 · Footer" style={{background:"var(--paper-100)",padding:"48px 32px",borderTop:"1px solid var(--border-subtle)"}}>
      <div className="footer-row" style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <div style={{fontFamily:"var(--font-display)",fontSize:14,color:"var(--text-primary)"}}>Clínica Dental Hernández Tello — Mérida, Yucatán</div>
        <div style={{display:"flex",gap:20,fontFamily:"var(--font-body)",fontSize:14}}>
          <a href="#">Instagram</a><a href="#">Facebook</a><a href="#">WhatsApp</a>
        </div>
      </div>
      <div style={{maxWidth:"var(--container-max)",margin:"16px auto 0",fontSize:12,color:"var(--text-muted)"}}>Cupo limitado. Precios sujetos a cambio sin previo aviso.</div>
    </footer>
  );
}
window.Footer = Footer;
