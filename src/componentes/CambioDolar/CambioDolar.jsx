import { useState } from "react"

const CambioDolar = () => {
    const [real, setReal] = useState(0);
    const [dolar, setDolar] = useState(0);
    const taxaDolar = 5.00;

    const [resultado, setResultado] = useState(0);


    const converteParaDolar = (e) => {
        const valorReal = setResultado(+real / +taxaDolar);
    };

    const converteParaReal = () => {
        setResultado(+dolar * +taxaDolar);
    };

    return (
        <>
            <input
                type="number"
                value={real}
                onChange={(e) => setReal(e.target.value)}
                style={{ margin: '5px' }}
            />

            <strong> reais é igual a </strong>

            <input
                type="number"
                value={dolar}
                onChange={(e) => setDolar(e.target.value)}
                style={{ margin: '5px' }}
            />

        </>
    );
};
export default CambioDolar; 

/*import { useState } from "react";

const CambioDolar = () => {
    const [real, setReal] = useState(0);
    const [dolar, setDolar] = useState(5);
    const taxaDolar = 5.00;

    const [resultado, setResultado] = useState(0);

    // Converte de Real para Dólar
    const converteParaDolar = () => {
        setResultado(real / taxaDolar);  // Calcula a divisão direta
    };

    // Converte de Dólar para Real
    const converteParaReal = () => {
        setResultado(dolar * taxaDolar);  // Calcula a multiplicação direta
    };

    return (
        <>
            <div>
                <label htmlFor="real">Valor em Reais (R$): </label>
                <input
                    type="number"
                    value={real}
                    onChange={(e) => setReal(e.target.value)}  // Atualiza o valor de real
                    style={{ margin: '5px' }}
                />
                <button onClick={converteParaDolar} style={{ margin: '5px' }}>Converter para Dólar</button>
            </div>

            <div>
                <label htmlFor="dolar">Valor em Dólares (USD): </label>
                <input
                    type="number"
                    value={dolar}
                    onChange={(e) => setDolar(e.target.value)}  // Atualiza o valor de dólar
                    style={{ margin: '5px' }}
                />
                <button onClick={converteParaReal} style={{ margin: '5px' }}>Converter para Real</button>
            </div>

            <div>
                <p><strong>Resultado: </strong>{resultado}</p>
            </div>
        </>
    );
};

export default CambioDolar; */




