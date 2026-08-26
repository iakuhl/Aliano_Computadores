export default function ListaSuspensa({ label, itens, valor, aoAlterado }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select value={valor} required onChange={(evento) => aoAlterado(evento.target.value)}>
        <option value="" disabled>Selecione uma opção</option>
        {itens.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}
