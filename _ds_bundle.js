(() => {

const __ds_ns = (window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396 = window.TeresitaHernNdezEstheticDentistryDesignSystem_0dd396 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "brand"
}) {
  const tones = {
    brand: {
      background: "var(--brand-primary)",
      color: "var(--white)"
    },
    lime: {
      background: "var(--accent)",
      color: "var(--accent-ink)"
    },
    ice: {
      background: "var(--surface-sunken)",
      color: "var(--text-primary)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)"
    }
  };
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      fontSize: "13px",
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      letterSpacing: "0.02em",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  style: styleOverride
}) {
  const base = {
    fontFamily: "var(--font-accent)",
    letterSpacing: "0.04em",
    fontWeight: 600,
    border: "none",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)"
  };
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: "13px"
    },
    md: {
      padding: "14px 28px",
      fontSize: "15px"
    },
    lg: {
      padding: "17px 36px",
      fontSize: "16px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand-secondary)",
      color: "var(--navy-900)"
    },
    dark: {
      background: "var(--navy-900)",
      color: "var(--text-on-inverse)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-primary)"
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...styleOverride
  };
  const Tag = href ? "a" : "button";
  return React.createElement(Tag, {
    href,
    onClick,
    type: href ? undefined : type,
    disabled,
    style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "32px",
  style
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = "brand"
}) {
  const colors = {
    brand: "var(--brand-primary)",
    inverse: "var(--brand-secondary)"
  };
  return React.createElement("div", {
    style: {
      fontFamily: "var(--font-accent)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: colors[tone] || colors.brand,
      marginBottom: "var(--space-3)"
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/ValueTable.jsx
try { (() => {
function ValueTable({
  rows,
  total
}) {
  const contents = { display: "contents" };
  return React.createElement("div", { className: "value-table" },
    React.createElement("div", { style: contents },
      React.createElement("span", { className: "vt-cell vt-label vt-header" }, ""),
      React.createElement("span", { className: "vt-cell vt-price vt-header" }, "Por separado"),
      React.createElement("span", { className: "vt-cell vt-highlight vt-header" }, "Nuestro Diplomado")
    ),
    rows.map((r, i) => React.createElement("div", { key: i, style: contents },
      React.createElement("span", { className: "vt-cell vt-label" }, r.label),
      React.createElement("span", { className: "vt-cell vt-price" }, r.value),
      React.createElement("span", { className: "vt-cell vt-highlight vt-check" }, "✓ Incluido")
    )),
    React.createElement("div", { style: contents },
      React.createElement("span", { className: "vt-cell vt-label vt-total" }, "Valor total estimado"),
      React.createElement("span", { className: "vt-cell vt-price vt-total" }, total),
      React.createElement("span", {
        className: "vt-cell vt-highlight vt-total vt-total-note",
        style: { flexDirection: "column", alignItems: "flex-end", justifyContent: "center", lineHeight: 1.35 }
      },
        React.createElement("span", null, "$4,000 al mes"),
        React.createElement("span", null, "por 12 meses")
      )
    )
  );
}
Object.assign(__ds_scope, { ValueTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ValueTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  type = "text",
  placeholder,
  required,
  options,
  name,
  onValueChange
}) {
  const [value, setValue] = useState("");
  const handleChange = e => {
    setValue(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
  };
  const fieldStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border-default)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-sm)",
    color: "var(--text-primary)",
    background: "var(--white)",
    outline: "none"
  };
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontSize: "13px",
      color: "var(--text-secondary)",
      fontWeight: 600
    }
  }, label, options ? React.createElement("select", {
    style: fieldStyle,
    required,
    name,
    value,
    onChange: handleChange
  }, React.createElement("option", {
    value: ""
  }, placeholder || "Selecciona"), options.map(o => React.createElement("option", {
    key: o,
    value: o
  }, o))) : React.createElement("input", {
    type,
    placeholder,
    required,
    name,
    style: fieldStyle,
    value,
    onChange: handleChange
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items
}) {
  const [open, setOpen] = useState(0);
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, items.map((item, i) => React.createElement("div", {
    key: i,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden"
    }
  }, React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "18px 22px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-body)"
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "15px",
      color: "var(--brand-primary)",
      minWidth: "28px"
    }
  }, String(i + 1).padStart(2, "0")), React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, item.title), React.createElement("span", {
    style: {
      fontSize: "18px",
      color: "var(--brand-primary)",
      transform: open === i ? "rotate(45deg)" : "none",
      transition: "transform var(--duration-fast) var(--ease-standard)"
    }
  }, "+")), open === i && React.createElement("div", {
    className: "accordion-body",
    style: {
      padding: "0 22px 18px 66px",
      fontSize: "14px",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-normal)"
    }
  }, item.body))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;
__ds_ns.Button = __ds_scope.Button;
__ds_ns.Card = __ds_scope.Card;
__ds_ns.Eyebrow = __ds_scope.Eyebrow;
__ds_ns.ValueTable = __ds_scope.ValueTable;
__ds_ns.Input = __ds_scope.Input;
__ds_ns.Accordion = __ds_scope.Accordion;

})();
