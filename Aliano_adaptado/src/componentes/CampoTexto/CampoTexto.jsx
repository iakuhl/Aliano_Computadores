export default function CampoTexto({ label, placeholder, valor, tipo = "text", aoAlterado }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={tipo}
        inputMode={tipo === "number" ? "decimal" : "text"}
        min={tipo === "number" ? "0" : undefined}
        step={tipo === "number" ? "0.01" : undefined}
        placeholder={placeholder}
        value={valor}
        required
        onChange={(evento) => aoAlterado(evento.target.value)}
      />
    </div>
  );
}
