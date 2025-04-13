import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const cadastrarUsuario = async () => {
    setMensagem('');
    setErro('');

    if (!name || !email) {
      setErro('Todos os Campos são obrigatórios.');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) {
        setErro('Erro ao cadastrar usuário');
        alert('Erro ao cadastrar usuário');
      }

      const data = await response.json();
      setMensagem(`Usuário "${data.name}"cadastrado com sucesso!`);
      alert(`Usuário "${data.name}"cadastrado com sucesso!`);
      setName('');
      setEmail('');
    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar usuário.');
      setErro('Erro ao cadastrar usuário.');
    }
  };

  return (
    <main>
      <h1>Cadastrar Novo Usuário</h1>
      <section>
        <form onSubmit={(e) => { e.preventDefault(); cadastrarUsuario(); }}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome do usuário"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o email do usuário"
          />

          <button type="submit">Cadastrar</button>
        </form>

        {mensagem && <p className="text-green-500 mt-4">{mensagem}</p>}
        {erro && <p className="text-red-500 mt-4">{erro}</p>}
      </section>
    </main>
  );
}

export default App;
