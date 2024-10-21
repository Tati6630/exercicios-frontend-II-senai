import { useState } from "react"

const Contador = () => {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    };
    const decrementar = () => {
        setNumero(numero - 1);
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <button onClick={incrementar} style={{padding: '15px'}}>Mais 1</button>
            <h1 style={{margin: '10px'}}> {numero} </h1>
            <button onClick={decrementar} style={{padding: '15px'}}>Menos 1</button>
        </div>
    );
};
export default Contador; 