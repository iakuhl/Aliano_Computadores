import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

const secoes = [
  { nome: "Acessórios", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
  { nome: "Computadores", corPrimaria: "#82cffa", corSecundaria: "#e8f8ff" },
  { nome: "Gadgets", corPrimaria: "#a6d157", corSecundaria: "#f0f8e2" },
  { nome: "Games", corPrimaria: "#e06b69", corSecundaria: "#fde7e8" },
  { nome: "Impressoras", corPrimaria: "#9c83d9", corSecundaria: "#f0ebff" },
];

export default function App() {
  const [produtos, setProdutos] = useState([]);

  function adicionaProduto(produto) {
    setProdutos((atual) => [...atual, produto]);
  }

  return (
    <div>
      <Banner />
      <Formulario secoes={secoes.map((secao) => secao.nome)} aoProdutoCadastrado={adicionaProduto} />
      {secoes.map((secao) => (
        <Area
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter((produto) => produto.secao === secao.nome)}
        />
      ))}
    </div>
  );
}
