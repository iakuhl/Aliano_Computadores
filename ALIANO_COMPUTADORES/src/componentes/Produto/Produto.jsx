export default function Produto({ nome, marca, preco, estado, cor }) {
  return (
    <article className="produto">
      <div className="produto-cabecalho" style={{ backgroundColor: cor }}><span>●</span></div>
      <div className="produto-rodape">
        <h4>{nome}</h4>
        <h5>{marca}</h5>
        <p>{estado} · R$ {Number(preco).toFixed(2).replace(".", ",")}</p>
      </div>
    </article>
  );
}
