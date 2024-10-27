import { useState } from "react";

const RemoverNome = () => {
    const [nome, setNome] = useState('');
    const [nomeLista, setNomeLista] = useState([]);
  
    const inserirNome = () => {
      if (nome && nome.trim()) {
        setNomeLista([...nomeLista, nome]);
        setNome('');
      }
      else {
        alert('Preencha o campo com um nome válido');
      }
    };

    const tirarNome = (index) => {
        if (window.confirm(`Tem certeza que deseja excluir: ${nomeLista[index]}`)) {
            const novaLista = [...nomeLista];
            novaLista.splice(index, 1);
            setNomeLista(novaLista);
        }
    };
              
  
    return (
      <>
        <div style={{ display: 'flex', gap: '8px', fontSize: '30px'}}>
          <input
            type="text"
            placeholder="Insira um nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
  
          <button onClick={inserirNome}><strong>Adicionar</strong></button>
        </div>
        <ul>
          {nomeLista.map((item, index) => (
            <li key={index}>{item}
            <button onClick={() => tirarNome(index)} style={{margin: '8px'}}><strong>Remover</strong></button></li>
          ))}
        </ul>
      </>
    );
  };
  export default RemoverNome;