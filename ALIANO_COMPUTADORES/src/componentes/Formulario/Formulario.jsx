import { useState } from "react";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import "./Formulario.css";

export default function Formulario({ secoes, aoProdutoCadastrado }) {
  const [produto, setProduto] = useState({ secao: "", marca: "", nome: "", preco: "", estado: "Novo" });
  const [mensagem, setMensagem] = useState("");
  const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling genérico"];

  function altera(campo, valor) {
    setProduto((atual) => ({ ...atual, [campo]: valor }));
    setMensagem("");
  }

  function salva(evento) {
    evento.preventDefault();
    const preco = Number(produto.preco);
    if (!produto.secao || !produto.marca || !produto.nome.trim() || !Number.isFinite(preco) || preco <= 0) {
      setMensagem("Preencha todos os campos e informe um preço maior que zero.");
      return;
    }
    aoProdutoCadastrado({ ...produto, nome: produto.nome.trim(), preco });
    setProduto({ secao: "", marca: "", nome: "", preco: "", estado: "Novo" });
    setMensagem("Produto cadastrado com sucesso.");
  }

  return (
    <section className="formulario">
      <form onSubmit={salva}>
        <h2>Dados do produto:</h2>
        <ListaSuspensa label="Seção" itens={secoes} valor={produto.secao} aoAlterado={(valor) => altera("secao", valor)} />
        <ListaSuspensa label="Marca" itens={marcas} valor={produto.marca} aoAlterado={(valor) => altera("marca", valor)} />
        <CampoTexto label="Nome" placeholder="Digite o nome do produto" valor={produto.nome} aoAlterado={(valor) => altera("nome", valor)} />
        <CampoTexto label="Preço" placeholder="0,00" tipo="number" valor={produto.preco} aoAlterado={(valor) => altera("preco", valor)} />
        <fieldset className="estado">
          <legend>Estado</legend>
          <label><input type="radio" name="estado" value="Novo" checked={produto.estado === "Novo"} onChange={() => altera("estado", "Novo")} /> Novo</label>
          <label><input type="radio" name="estado" value="Usado" checked={produto.estado === "Usado"} onChange={() => altera("estado", "Usado")} /> Usado</label>
        </fieldset>
        {mensagem && <p className="mensagem">{mensagem}</p>}
        <Botao>Adicionar produto</Botao>
      </form>
    </section>
  );
}
