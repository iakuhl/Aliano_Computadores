import Produto from "../Produto/Produto";
import "./Area.css";

export default function Area({ nome, corPrimaria, corSecundaria, produtos }) {
  if (!produtos.length) return null;
  return (
    <section className="area" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="produtos">
        {produtos.map((produto, index) => <Produto key={`${produto.nome}-${index}`} {...produto} cor={corPrimaria} />)}
      </div>
    </section>
  );
}
