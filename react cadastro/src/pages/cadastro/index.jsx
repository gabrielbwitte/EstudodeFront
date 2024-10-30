import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="bg-black">
      <h2>Casdratro</h2>
      <form>
        <input placeholder="Nome" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Senha" type="password" />
        <button>Cadastrar-se</button>
      </form>
      <Link to={"/login"}>Já tem uma conta? Faça o login</Link>
    </div>
  );
}

export default Cadastro;
