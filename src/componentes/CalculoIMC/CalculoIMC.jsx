import { useState } from "react"

const CalculoIMC = () => {
    const [altura, setAltura] = useState(" ");
    const [peso, setPeso] = useState(" ");
    const [parametro, setParametro] = useState(" ");

    const [resultado, setResultado] = useState(" ");

    const calcular = () => {
        const resultado = (+peso / (+altura * +altura));
        setResultado(resultado.toFixed(1));

        if(resultado < 18.5) {
            setParametro ('Abaixo do peso');
        }
        else if(resultado < 25) {
            setParametro ('Peso normal');
        }
        else if(resultado < 30) {
            setParametro ('Sobrepeso');
        }
        else {     // resultado >= 30
            setParametro ('Obeso');
        }

        
    };

    return (
        <>
        Altura (m): 
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                style={{ margin: '5px' }}
            />

        Peso (Kg):
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                style={{ margin: '5px' }}
            />
            <br />
            <br />
            <button onClick={calcular} style={{ margin: '5px' }}>Calcular IMC</button><br /><br />
        <strong>Resultado: </strong> {resultado && `${resultado} - ${parametro}`};
        </>
    );
};
export default CalculoIMC;