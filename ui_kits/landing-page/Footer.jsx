function Footer() {
  return (
    <footer data-screen-label="12 · Footer" style={{background:"var(--paper-100)",padding:"48px 32px",borderTop:"1px solid var(--border-subtle)"}}>
      <div className="footer-row" style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <div style={{fontFamily:"var(--font-display)",fontSize:14,color:"var(--text-primary)"}}>Clínica Dental Hernández Tello — Mérida, Yucatán</div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <a href="https://www.instagram.com/teresitahernandezt/" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-accent)",fontSize:13,fontWeight:700,color:"var(--white)",background:"var(--brand-primary)",padding:"9px 18px",borderRadius:"var(--radius-pill)",textDecoration:"none"}}>Instagram</a>
          <a href="https://www.facebook.com/TeresitaHernandezT" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-accent)",fontSize:13,fontWeight:700,color:"var(--white)",background:"var(--brand-primary)",padding:"9px 18px",borderRadius:"var(--radius-pill)",textDecoration:"none"}}>Facebook</a>
          <a href="https://wa.me/529996221741" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-accent)",fontSize:13,fontWeight:700,color:"var(--accent-ink)",background:"var(--accent)",padding:"9px 18px",borderRadius:"var(--radius-pill)",textDecoration:"none"}}>WhatsApp</a>
        </div>
      </div>
      <div style={{maxWidth:"var(--container-max)",margin:"16px auto 0",fontSize:12,color:"var(--text-muted)"}}>Cupo limitado. Precios sujetos a cambio sin previo aviso.</div>
    </footer>
  );
}
window.Footer = Footer;
