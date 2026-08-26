import "./Banner.css";
import bannerImagem from "./banner.png";


export default function Banner() {
  return (
    
    <header className="banner">
      <img className="banner-imagem" src={bannerImagem} alt="Banner Aliano Computadores" />
      <p>ALIANO COMPUTADORES</p>
      <h1>Cadastro de produtos de informática</h1>
    </header>
  );
}
