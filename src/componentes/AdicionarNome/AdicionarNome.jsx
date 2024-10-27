import { useState } from "react";

const AdicionarNome = () => {
  const [nome, setNome] = useState('');
  const [nomeLista, setNomeLista] = useState([]);

  const inserirNome = () => {
    if (nome && nome.trim()) {
      setNomeLista([...nomeLista, nome]);
      setNome(' ');
    }
    else {
      alert('Preencha o campo com um nome válido');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          id="insira um nome"
          type="text"
          placeholder="Insira um nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button onClick={inserirNome}><strong>Adicionar</strong></button>
      </div>
      <ul>
        {nomeLista.map((nomes, index) => (
          <li key={index}>{nomes}</li>
        ))}
      </ul>
    </>
  );
};
export default AdicionarNome;